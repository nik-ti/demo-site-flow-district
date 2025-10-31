import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse-slow-delay"></div>
      </div>

      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 border border-cyan-500/30 rounded-full mb-8">
            <span className="text-cyan-400 text-sm font-mono">NEXT GENERATION PLATFORM</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up-delay-1">
          <span className="text-white">FLOW</span>
          <br />
          <span className="text-cyan-400">DISTRICT</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto animate-fade-in-up-delay-2">
          Build, deploy, and scale your applications with unparalleled speed and reliability
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold text-lg text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            Get Started
          </button>
          <button className="px-8 py-4 border border-gray-700 hover:border-cyan-500 rounded-lg font-semibold text-lg text-white transition-all hover:scale-105">
            View Documentation
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up-delay-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">99.99%</div>
            <div className="text-sm text-gray-500">Uptime</div>
          </div>
          <div className="text-center border-x border-gray-800">
            <div className="text-3xl font-bold text-cyan-400 mb-1">&lt;100ms</div>
            <div className="text-sm text-gray-500">Latency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
            <div className="text-sm text-gray-500">Support</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>
  );
}
