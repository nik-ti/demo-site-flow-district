import { Zap, Shield, Layers, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy in seconds with optimized build pipelines and global edge network',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with industry standards',
    },
    {
      icon: Layers,
      title: 'Auto-Scaling',
      description: 'Handle traffic spikes seamlessly with intelligent resource allocation',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Serve content from 200+ edge locations worldwide',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Built for Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to ship faster and scale effortlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-gray-900/50 to-black"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/5 group-hover:to-fuchsia-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
