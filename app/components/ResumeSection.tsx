export default function ResumeSection() {
  const experiences = [
    {
      role: 'Fractional CTO',
      company: 'Multiple Startups',
      period: '2020 - Present',
      description: 'Partner with early-stage founders to build scalable technology foundations, establish engineering practices, and grow technical teams from 0 to 20+ engineers. Focus on strategic planning, system architecture, and technical leadership.',
    },
    {
      role: 'VP of Engineering',
      company: 'TechScale Inc.',
      period: '2017 - 2020',
      description: 'Led engineering organization through hypergrowth phase, scaling from $1M to $10M ARR. Built distributed team of 30+ engineers across 3 time zones. Implemented modern DevOps practices and microservices architecture.',
    },
    {
      role: 'Engineering Manager',
      company: 'CloudSoft Solutions',
      period: '2014 - 2017',
      description: 'Managed cross-functional engineering teams building enterprise SaaS products. Implemented agile practices and modern development workflows. Led migration from monolith to microservices.',
    },
  ];

  const education = [
    {
      degree: 'MS in Computer Science',
      institution: 'Stanford University',
      year: '2012',
      focus: 'Distributed Systems & Software Architecture',
    },
    {
      degree: 'BS in Software Engineering',
      institution: 'MIT',
      year: '2010',
      focus: 'Computer Systems Engineering',
    },
  ];

  return (
    <section id="resume" className="min-h-screen px-3 py-6 lg:p-0 lg:mb-16">
      <div className="w-full bg-[#111111]/95 backdrop-blur-sm p-6 lg:p-12 border border-gray-800/50">
        <div className="mb-6">
          <span className="text-[#8cc63f] font-semibold text-sm uppercase tracking-wider">Career Path</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium text-white mb-16">Resume</h2>
        
        {/* Experience */}
        <div className="mb-20">
          <h3 className="text-xl font-medium text-white mb-10 flex items-center gap-3">
            <span className="w-10 h-10  bg-[#8cc63f]/20 border border-[#8cc63f]/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 border-l-2 border-gray-700/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#8cc63f] rounded-full shadow-lg shadow-[#8cc63f]/50"></div>
                <div className="bg-[#1a1a1a] p-6  border border-gray-800/50 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-[#8cc63f]/10">
                  <h4 className="text-lg font-medium text-white mb-2">{exp.role}</h4>
                  <p className="text-[#8cc63f] font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-medium text-white mb-10 flex items-center gap-3">
            <span className="w-10 h-10  bg-[#8cc63f]/20 border border-[#8cc63f]/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-[#1a1a1a] p-6  border border-gray-800/50 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-[#8cc63f]/10"
              >
                <h4 className="text-lg font-medium text-white mb-2">{edu.degree}</h4>
                <p className="text-[#8cc63f] font-semibold mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                <p className="text-sm text-gray-500">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
