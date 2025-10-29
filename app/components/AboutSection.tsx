'use client';

interface AboutSectionProps {
  onNavigate: (section: string) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <>
      {/* Desktop: Fixed Profile Card */}
      <div className="hidden lg:block sticky top-12 h-fit w-[390px]">
        <div className="bg-[#111111]/95 backdrop-blur-sm p-8 border border-gray-800/50">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-full aspect-square overflow-hidden border-4 border-gray-800/50">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                alt="Nicolas Cava" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-normal">SOFTWARE ENGINEER</p>
            <h3 className="text-lg font-semibold text-white mb-1">Nicolas Cava</h3>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-2 mb-6 pb-6 border-b border-gray-800/50">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-[#8cc63f]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-[#8cc63f]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-[#8cc63f]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full px-5 py-2.5 bg-[#8cc63f] text-white text-sm rounded-full font-semibold hover:shadow-xl hover:shadow-[#8cc63f]/30 transition-all duration-300"
            >
              Download CV
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full px-5 py-2.5 border border-gray-600 text-white text-sm font-medium hover:bg-[#1a1a1a] hover:border-[#8cc63f] transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Full Hero Section */}
      <section id="about" className="lg:hidden min-h-screen px-3 py-6 flex items-center">
        <div className="w-full">
          <div className="bg-[#111111]/95 backdrop-blur-sm p-6 border border-gray-800/50 mb-6">
            {/* Profile Image */}
            <div className="mb-6">
              <div className="w-full aspect-square overflow-hidden border-4 border-gray-800/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                  alt="Nicolas Cava" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2 font-normal">Fractional CTO</p>
              <h3 className="text-xl font-semibold text-white">Nicolas Cava</h3>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-8 pb-8 border-b border-gray-800/50">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-[#8cc63f]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-[#8cc63f]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-[#8cc63f]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full px-6 py-3 bg-[#8cc63f] text-white font-medium hover:shadow-xl hover:shadow-[#8cc63f]/30 transition-all duration-300"
              >
                Download CV
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full px-6 py-3 border border-gray-600 text-white font-medium hover:bg-[#1a1a1a] hover:border-[#8cc63f] transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="bg-[#111111]/95 backdrop-blur-sm p-6 border border-gray-800/50">
            <p className="text-gray-400 text-sm mb-2 font-normal">
              Hello, I'm <span className="text-[#8cc63f] font-medium">Fractional CTO</span>
            </p>
            <h1 className="text-lg sm:text-xl font-semibold text-white mb-4 leading-snug">
              Senior Technical Leader and <span className="text-[#8cc63f]">Fractional CTO</span> Based in San Francisco Bay Area.
            </h1>
            <p className="text-gray-300 text-sm font-normal leading-relaxed mb-6">
              Have worked in a variety of positions, including key developer, solution designer, and data architect. 
              Strong engineering background combined with closely working with business customers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="mb-1">
                  <span className="text-2xl sm:text-3xl font-semibold text-white">25+</span>
                </div>
                <p className="text-gray-400 text-[10px] font-normal leading-tight">
                  Completed<br />Projects
                </p>
              </div>
              <div>
                <div className="mb-1">
                  <span className="text-2xl sm:text-3xl font-semibold text-white">8</span>
                </div>
                <p className="text-gray-400 text-[10px] font-normal leading-tight">
                  Years of<br />Experience
                </p>
              </div>
              <div>
                <div className="mb-1">
                  <span className="text-2xl sm:text-3xl font-semibold text-white">15+</span>
                </div>
                <p className="text-gray-400 text-[10px] font-normal leading-tight">
                  Awards<br />Winning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
