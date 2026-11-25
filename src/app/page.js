
import Link from "next/link";

const technologies = [
  "NEXT.JS",
  "REACT",
  "JAVASCRIPT",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "TAILWIND CSS",
  "REST APIS",
  "MERN STACK",
];

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a08] text-white selection:bg-emerald-400 selection:text-black">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.10] blur-[150px]" />
        <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-green-500/[0.07] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:65px_65px]" />
      </div>

      {/* Top navigation */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <Link href="/" className="text-xl font-black tracking-tight">
          Jareer<span className="text-emerald-400">.</span>
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[10px] font-semibold tracking-[0.16em] text-emerald-300 sm:text-xs">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
      </header>

      {/* Main introduction */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-190px)] max-w-5xl flex-col items-center justify-center px-5 pb-14 pt-12 text-center sm:px-8">

        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-gray-400">
          <span className="text-emerald-400">✦</span>
          WEB DEVELOPER · PAKISTAN
        </div>

        <p className="mb-4 text-sm font-medium tracking-[0.28em] text-gray-400 sm:text-base">
          HELLO, I'M
        </p>

        <h1 className="text-5xl font-black leading-[1.08] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[100px]">
          Jareer Ahmad
          <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
            Khan.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
          I build modern, responsive and functional web applications
          with a focus on clean design, powerful functionality and
          meaningful user experiences.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300">
            MERN Stack
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300">
            Next.js
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300">
            Full Stack Development
          </span>
        </div>

        <Link
          href="/portfolio"
          className="group relative mt-12 inline-flex items-center gap-4 overflow-hidden rounded-full bg-emerald-400 px-9 py-5 text-sm font-bold text-[#061009] shadow-[0_0_45px_rgba(52,211,153,0.17)] transition-all duration-300 hover:scale-[1.04] hover:bg-emerald-300 hover:shadow-[0_0_65px_rgba(52,211,153,0.3)] active:scale-95"
        >
          <span>ENTER PORTFOLIO</span>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>

        <p className="mt-5 text-[11px] tracking-widest text-gray-600">
          EXPLORE MY WORK & CAPABILITIES
        </p>
      </section>

      {/* Technology marquee */}
      <div className="relative z-10 overflow-hidden border-y border-white/[0.07] bg-white/[0.015] py-5">
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-8 px-7 sm:gap-12 sm:px-10"
            >
              <span className="whitespace-nowrap text-xs font-bold tracking-[0.2em] text-gray-400 sm:text-sm">
                {tech}
              </span>
              <span className="text-emerald-400">✳</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom information */}
      <footer className="relative z-10 flex flex-col items-center justify-between gap-3 px-6 py-6 text-center text-[10px] tracking-widest text-gray-600 sm:flex-row sm:px-12">
        <p>© 2026 JAREER AHMAD KHAN</p>
        <p>DESIGNED & DEVELOPED WITH PURPOSE.</p>
      </footer>

    </main>
  );
}
