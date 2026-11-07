export type SceneFrame = {
  time: number;
  delta: number;
  pointerX: number | null;
  pointerY: number | null;
  scrollTop: number;
};
const listeners = new Set<(frame: SceneFrame) => void>();
export function subscribeScene(listener: (frame: SceneFrame) => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}
export function publishScene(frame: SceneFrame) {
  listeners.forEach(listener => listener(frame));
}
