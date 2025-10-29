export default function HeroContent() {
  return (
    <div className="w-full bg-[#111111]/95 backdrop-blur-sm p-6 lg:p-12 border border-gray-800/50 mb-16">
      <p className="text-gray-400 text-base font-normal mb-4">
        Hello, I'm <span className="text-[#8cc63f] font-semibold">Lead Data Scientist</span>
      </p>
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-6 leading-tight">
        Senior Data Engineer and <span className="text-[#8cc63f]">Data Scientist</span> Based in California, Los Angeles.
      </h1>
      <p className="text-gray-300 text-sm lg:text-base font-normal leading-relaxed mb-12">
        Have worked in a variety of positions, including key developer, solution designer, and data architect. 
        Strong engineering background combined with closely working with business customers.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 lg:gap-8">
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl lg:text-4xl font-semibold text-white">96</span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm font-normal">
            Completed<br />Projects
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl lg:text-4xl font-semibold text-white">8</span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm font-normal">
            Years of<br />Experience
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl lg:text-4xl font-semibold text-white">10+</span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm font-normal">
            Awards<br />Winning
          </p>
        </div>
      </div>
    </div>
  );
}
