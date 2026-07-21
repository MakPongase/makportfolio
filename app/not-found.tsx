"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden">
      {/* Top Header Grid Bar */}
      <header className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-red-600 inline-block animate-pulse"></span>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-gray-500 font-bold">
            [SYS_ERR: 404_NOT_FOUND] • ROUTE TERMINATED
          </p>
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-gray-400">
          JOHN MARK PONGASE • DIRECTORY 2026
        </div>
      </header>

      {/* Center Architectural Block */}
      <section className="my-auto py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Massive 404 Graphic & Error Text */}
        <div className="lg:col-span-7 space-y-8 lg:border-r border-gray-200 lg:pr-12">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-red-600 font-bold">
              Error Code: 0x000404
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-black leading-[0.88] uppercase">
              COORDINATES <br />
              UNKNOWN.
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl font-normal">
            The page or system node you are attempting to access does not exist inside our directory. It may have been moved, renamed, or permanently decommissioned.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="px-8 py-4 bg-black text-white text-sm font-mono font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors shadow-xs flex items-center gap-3"
            >
              <span>← RETURN TO SYSTEM HOME</span>
            </Link>
            <Link
              href="/#about"
              className="px-8 py-4 bg-white text-black border border-black text-sm font-mono font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors shadow-xs"
            >
              SELECTED WORK [10]
            </Link>
          </div>
        </div>

        {/* Right Column: Architectural Diagnostic Terminal */}
        <div className="lg:col-span-5 bg-gray-50/70 border border-black p-8 sm:p-10 relative">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black -translate-x-1 -translate-y-1"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black -translate-x-1 translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black translate-x-1 translate-y-1"></div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-black">
                SYSTEM DIAGNOSTIC REPORT
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-red-100 text-red-700 border border-red-300 font-bold">
                CRITICAL_MISS
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-gray-700 divide-y divide-gray-200">
              <div className="flex justify-between py-2">
                <span className="text-gray-400">STATUS</span>
                <span className="font-bold text-red-600">404 (NOT_FOUND)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">ORIGIN ROUTE</span>
                <span className="font-bold">CLIENT_REQUEST</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">TARGET DIRECTORY</span>
                <span className="font-bold">UNRESOLVED</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">SUGGESTED ACTION</span>
                <span className="font-bold">REDIRECT_MAIN_INDEX</span>
              </div>
            </div>

            {/* Auto-redirect or quick jump links */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                Quick Directory Jump:
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold uppercase">
                <Link
                  href="/#about"
                  className="p-2.5 border border-gray-300 hover:border-black hover:bg-white transition-all text-center block"
                >
                  01 / Projects
                </Link>
                <Link
                  href="/#introduction"
                  className="p-2.5 border border-gray-300 hover:border-black hover:bg-white transition-all text-center block"
                >
                  02 / Philosophy
                </Link>
                <Link
                  href="/#certificates"
                  className="p-2.5 border border-gray-300 hover:border-black hover:bg-white transition-all text-center block"
                >
                  03 / Credentials
                </Link>
                <Link
                  href="/#contact"
                  className="p-2.5 border border-gray-300 hover:border-black hover:bg-white transition-all text-center block"
                >
                  04 / Contact
                </Link>
              </div>
            </div>

            {/* Countdown Tip */}
            <div className="pt-2 text-[10px] font-mono text-gray-400 uppercase tracking-wider text-center sm:text-left">
              * SYSTEM ARCHITECTURE BY JOHN MARK PONGASE
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <footer className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} JOHN MARK PONGASE. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-4">
          <span>SWISS ARCHITECTURAL GRID</span>
          <span>•</span>
          <Link href="/" className="hover:text-black transition-colors font-bold">
            SYSTEM ROOT ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
