export default function Footer() {
  const sections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Documentation', 'Changelog'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Community', 'Support', 'Status', 'API'],
    },
  ];

  return (
    <footer className="relative py-20 px-6 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white">
              FLOW<span className="text-cyan-400">DISTRICT</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The platform for developers who ship.
            </p>
            <div className="flex gap-4">
              {['GitHub', 'Twitter', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-600 hover:text-cyan-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Flow District. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-700 font-mono">Built by</span>
            <span className="text-xs font-bold text-cyan-400 font-mono tracking-wider">
              SIMPLE FLOW
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
