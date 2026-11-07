import { publishScene } from "./scene-motion";
type Spring = { position: number; velocity: number; target: number };
export interface ParticleField { setPaused(value: boolean): void; dispose(): void; }

const vertexSource = `
attribute vec3 a_position;
attribute vec2 a_detail;
uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform vec2 u_cursor;
uniform float u_pointer_active;
uniform float u_time;
uniform float u_scroll;
uniform float u_ratio;
varying float v_alpha;
varying float v_depth;
void main() {
  vec3 p = a_position;
  float angle = atan(p.y, p.x);
  p.z += sin(angle * 3.0 + u_time * 0.11 + a_detail.x * 6.28) * 0.07;
  float turn = u_time * 0.018 + u_pointer.x * 0.08 + u_scroll * 0.19;
  float tilt = 0.18 + u_pointer.y * 0.08;
  p.yz = mat2(cos(tilt), -sin(tilt), sin(tilt), cos(tilt)) * p.yz;
  p.xy = mat2(cos(turn), -sin(turn), sin(turn), cos(turn)) * p.xy;
  float perspective = 3.0 / (3.0 - p.z);
  float aspect = u_resolution.x / u_resolution.y;
  float scale = mix(0.94, 1.08, u_scroll);
  float center = aspect > 1.3 ? 0.17 : 0.0;
  vec2 projected = vec2(p.x * perspective * scale / aspect + center + u_pointer.x * 0.025,
                        p.y * perspective * scale * 0.80 + 0.15 + u_scroll * 0.60);
  vec2 difference = projected-u_cursor;
  float disturbance = exp(-dot(difference,difference)*24.0)*u_pointer_active;
  projected += normalize(difference+vec2(0.001))*disturbance*0.065;
  gl_Position = vec4(projected,0.0,1.0);
  gl_PointSize = clamp((0.85 + a_detail.y * 1.5) * perspective * u_ratio, 0.8, 3.8);
  float lighting = mix(0.18, 1.0, smoothstep(-0.6, 0.65, p.y));
  v_alpha = (0.30 + a_detail.x * 0.65) * (0.85 + p.z * 0.35) * lighting * (1.0-u_scroll*0.6);
  v_depth = a_detail.y;
}`;
const fragmentSource = `
precision mediump float;
varying float v_alpha;
varying float v_depth;
void main() {
  float radius = length(gl_PointCoord - vec2(0.5));
  float softness = 1.0 - smoothstep(0.16, 0.5, radius);
  vec3 color = mix(vec3(0.30, 0.46, 0.88), vec3(0.93, 0.96, 1.0), v_depth);
  gl_FragColor = vec4(color, softness * v_alpha);
}`;

function step(s: Spring, dt: number) {
  s.velocity += ((s.target - s.position) * 48 - s.velocity * 13) * dt;
  s.position += s.velocity * dt;
}

export function createParticleField(canvas: HTMLCanvasElement): ParticleField | null {
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "low-power", premultipliedAlpha: true });
  if (!gl) { canvas.dataset.renderStatus = "webgl-unavailable"; return null; }
  const shaders: WebGLShader[] = [];
  for (const [type, source] of [[gl.VERTEX_SHADER, vertexSource], [gl.FRAGMENT_SHADER, fragmentSource]] as const) {
    const shader = gl.createShader(type);
    if (!shader) { shaders.forEach(s => gl.deleteShader(s)); return null; }
    gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { console.error("Particle shader compilation failed", gl.getShaderInfoLog(shader)); canvas.dataset.renderStatus = "shader-failed"; gl.deleteShader(shader); shaders.forEach(s => gl.deleteShader(s)); return null; }
    shaders.push(shader);
  }
  const program = gl.createProgram();
  if (!program) { shaders.forEach(s => gl.deleteShader(s)); return null; }
  shaders.forEach(s => gl.attachShader(program, s)); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { console.error("Particle program linking failed", gl.getProgramInfoLog(program)); canvas.dataset.renderStatus = "link-failed"; shaders.forEach(s => gl.deleteShader(s)); gl.deleteProgram(program); return null; }
  canvas.dataset.renderStatus = "ready";
  gl.useProgram(program);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(pointer: fine)");
  const count = window.innerWidth < 601 ? 15000 : 32000;
  const positions = new Float32Array(count * 3), details = new Float32Array(count * 2);
  let seed = 4723;
  const random = () => { seed = seed * 16807 % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < count; i++) {
    const angle = random() * Math.PI * 2, tube = random() * Math.PI * 2;
    const thickness = 0.12 + Math.pow(random(), 1.6) * 0.25;
    const radius = 0.91 + Math.cos(tube) * thickness + Math.sin(angle * 3 + 0.3) * 0.04;
    positions.set([Math.cos(angle) * radius, Math.sin(angle) * radius, Math.sin(tube) * thickness + (random() - 0.5) * 0.18], i * 3);
    details.set([random(), random()], i * 2);
  }
  const buffers: WebGLBuffer[] = [];
  for (const [name, values, size] of [["a_position", positions, 3], ["a_detail", details, 2]] as const) {
    const buffer = gl.createBuffer();
    if (!buffer) continue;
    buffers.push(buffer); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, values, gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
  }
  const resolution = gl.getUniformLocation(program, "u_resolution"), pointer = gl.getUniformLocation(program, "u_pointer");
  const time = gl.getUniformLocation(program, "u_time"), scroll = gl.getUniformLocation(program, "u_scroll"), ratio = gl.getUniformLocation(program, "u_ratio");
  const cursor = gl.getUniformLocation(program, "u_cursor"), pointerActive = gl.getUniformLocation(program, "u_pointer_active");
  gl.enable(gl.BLEND); gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.clearColor(0, 0, 0, 0);
  const x: Spring = {position:0,velocity:0,target:0}, y: Spring = {position:0,velocity:0,target:0}, progress: Spring = {position:0,velocity:0,target:0};
  let frame = 0, elapsed = 0, last = 0, lastDraw = 0, drawCount = count, paused = false, visible = true, disposed = false;
  let hasPointer = false, scrollTop = window.scrollY, canvasLeft = 0, canvasTop = 0, canvasWidth = 1, canvasHeight = 1, deltaTime = 0.016, settleUntil = 0, workBottom = 2200;
  const sceneHost = canvas.parentElement;
  const workSection = document.getElementById("work");
  const draw = () => {
    if (disposed || gl.isContextLost()) return;
    gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform2f(pointer, x.position, y.position); gl.uniform1f(time, elapsed); gl.uniform1f(scroll, progress.position); gl.drawArrays(gl.POINTS, 0, drawCount);
    publishScene({time:elapsed,delta:deltaTime,pointerX:hasPointer?(x.position+1)*window.innerWidth/2:null,pointerY:hasPointer?(y.position+1)*window.innerHeight/2:null,scrollTop});
  };
  const animate = (now: number) => {
    frame = 0;
    if (disposed || paused || !visible || document.hidden || reduced.matches || gl.isContextLost()) return;
    const delta = Math.min(last ? (now-last)/1000 : 0.016, 0.04); last = now; elapsed += delta;
    deltaTime=delta;
    step(x,delta); step(y,delta); step(progress,delta);
    gl.uniform1f(pointerActive,hasPointer?1:0);
    gl.uniform2f(cursor,((x.position+1)*window.innerWidth/2-canvasLeft)/canvasWidth*2-1,1-((y.position+1)*window.innerHeight/2-canvasTop)/canvasHeight*2);
    if (now-lastDraw > 32) {deltaTime=Math.min((now-lastDraw)/1000,0.04);draw();lastDraw=now;}
    const settling = Math.abs(x.target-x.position)+Math.abs(y.target-y.position)+Math.abs(progress.target-progress.position)+Math.abs(x.velocity)+Math.abs(y.velocity)+Math.abs(progress.velocity);
    if (elapsed < 5 || settling > 0.001 || now < settleUntil) frame=requestAnimationFrame(animate);
  };
  const sync = () => { cancelAnimationFrame(frame);last=0;draw();if(!disposed&&!paused&&visible&&!document.hidden&&!reduced.matches&&!gl.isContextLost())frame=requestAnimationFrame(animate); };
  const resize = () => {
    const rect=canvas.getBoundingClientRect(), density=Math.min(window.devicePixelRatio||1,1.5);
    canvasLeft=rect.left;canvasTop=rect.top;canvasWidth=rect.width;canvasHeight=rect.height;
    if(workSection)workBottom=workSection.getBoundingClientRect().bottom+window.scrollY;
    drawCount = rect.width < 601 ? Math.min(count, 15000) : count;
    canvas.width=Math.round(rect.width*density);canvas.height=Math.round(rect.height*density);
    gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(resolution,rect.width,rect.height);gl.uniform1f(ratio,density);sync();
  };
  const wake=()=>{settleUntil=performance.now()+1200;if(!frame&&!disposed&&!paused&&visible&&!document.hidden&&!reduced.matches){last=0;frame=requestAnimationFrame(animate);}};
  const onPointer=(event:PointerEvent)=>{if(fine.matches){hasPointer=true;x.target=event.clientX/window.innerWidth*2-1;y.target=event.clientY/window.innerHeight*2-1;wake();}};
  const onScroll=()=>{scrollTop=window.scrollY;progress.target=Math.min(scrollTop/950,1);const opacity=Math.max(0,Math.min(1,1-(scrollTop-workBottom+120)/430));visible=opacity>0.01;if(sceneHost){sceneHost.style.opacity=String(opacity);sceneHost.style.setProperty("--scene-depth",String(Math.min(scrollTop/650,1)));}wake();};
  const onLeave=()=>{hasPointer=false;wake();};
  const onLost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(frame);};
  const resizeObserver=new ResizeObserver(resize), observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting&&scrollTop<workBottom+310;sync();});
  const workObserver=new ResizeObserver(()=>{if(workSection)workBottom=workSection.getBoundingClientRect().bottom+window.scrollY;});
  if(workSection)workObserver.observe(workSection);
  resizeObserver.observe(canvas);observer.observe(canvas);
  window.addEventListener("pointermove",onPointer,{passive:true});window.addEventListener("scroll",onScroll,{passive:true});document.addEventListener("visibilitychange",sync);reduced.addEventListener("change",sync);canvas.addEventListener("webglcontextlost",onLost);
  document.documentElement.addEventListener("pointerleave",onLeave);
  onScroll();resize();
  return {setPaused(value){paused=value;sync();},dispose(){disposed=true;cancelAnimationFrame(frame);resizeObserver.disconnect();observer.disconnect();workObserver.disconnect();window.removeEventListener("pointermove",onPointer);window.removeEventListener("scroll",onScroll);document.documentElement.removeEventListener("pointerleave",onLeave);document.removeEventListener("visibilitychange",sync);reduced.removeEventListener("change",sync);canvas.removeEventListener("webglcontextlost",onLost);buffers.forEach(b=>gl.deleteBuffer(b));shaders.forEach(s=>gl.deleteShader(s));gl.deleteProgram(program);}};
}
