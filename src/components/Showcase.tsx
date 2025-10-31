export default function Showcase() {
  const items = [
    {
      title: 'Real-time Analytics',
      category: 'Dashboard',
      stats: ['10M+ Events/sec', 'Sub-second insights', '99.9% Accuracy'],
    },
    {
      title: 'Edge Functions',
      category: 'Infrastructure',
      stats: ['Global deployment', 'Zero cold starts', 'Auto-scaling'],
    },
    {
      title: 'Developer Experience',
      category: 'Platform',
      stats: ['Git integration', 'Preview deploys', 'Instant rollbacks'],
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Powering Innovation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by thousands of developers and teams worldwide
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-8 p-12">
                <div>
                  <div className="text-sm font-mono text-cyan-400 mb-4">{item.category}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {item.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-400"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-full h-64 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 p-8 w-full h-full">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="rounded bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 animate-pulse-random"
                          style={{
                            animationDelay: `${i * 150}ms`,
                            animationDuration: `${2000 + i * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
      </div>
    </section>
  );
}
