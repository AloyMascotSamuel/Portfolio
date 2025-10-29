export default function HeroContent() {
  return (
    <div className="w-full bg-[#111111]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-12 border border-gray-800/50 mb-16">
      <p className="text-gray-400 text-lg mb-4">
        Hello, I'm <span className="text-[#8cc63f] font-semibold">Lead Data Scientist</span>
      </p>
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
        Senior Data Engineer and <span className="text-[#8cc63f]">Data Scientist</span> Based in California, Los Angeles.
      </h1>
      <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-12">
        Have worked in a variety of positions, including key developer, solution designer, and data architect. 
        Strong engineering background combined with closely working with business customers.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 lg:gap-8">
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl lg:text-5xl font-bold text-white">96</span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm">
            Completed<br />Projects
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl lg:text-5xl font-bold text-white">8</span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm">
            Years of<br />Experience
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl lg:text-5xl font-bold text-white">10+</span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm">
            Awards<br />Winning
          </p>
        </div>
      </div>
    </div>
  );
}
