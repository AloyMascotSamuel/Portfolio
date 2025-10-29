'use client';

import { useEffect, useState } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Technical Leadership', percentage: 95, icon: (
      <svg className="w-8 h-8 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ), color: 'from-blue-500 to-cyan-500' },
    { name: 'System Architecture', percentage: 90, icon: (
      <svg className="w-8 h-8 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ), color: 'from-purple-500 to-pink-500' },
    { name: 'Team Building', percentage: 92, icon: (
      <svg className="w-8 h-8 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ), color: 'from-green-500 to-emerald-500' },
    { name: 'Product Strategy', percentage: 88, icon: (
      <svg className="w-8 h-8 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ), color: 'from-orange-500 to-red-500' },
    { name: 'Cloud Infrastructure', percentage: 85, icon: (
      <svg className="w-8 h-8 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ), color: 'from-indigo-500 to-blue-500' },
    { name: 'Startup Scaling', percentage: 93, icon: (
      <svg className="w-8 h-8 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ), color: 'from-pink-500 to-rose-500' },
  ];

  const CircularProgress = ({ percentage, icon, color }: { percentage: number; icon: React.ReactNode; color: string }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = isVisible ? circumference - (percentage / 100) * circumference : circumference;

    return (
      <div className="relative w-40 h-40">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-800"
          />
          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8cc63f" />
              <stop offset="100%" stopColor="#a8d963" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-1">{icon}</div>
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen px-3 py-6 lg:p-0 lg:mb-16">
      <div className="w-full bg-[#111111]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-12 border border-gray-800/50">
        <div className="mb-6">
          <span className="text-[#8cc63f] font-semibold text-sm uppercase tracking-wider">Expertise</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">Skills & Knowledge</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <CircularProgress 
                  percentage={skill.percentage} 
                  icon={skill.icon}
                  color={skill.color}
                />
              </div>
              <h3 className="text-center text-gray-300 font-semibold group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Skills List */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'Go', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'].map((tech, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg text-sm border border-gray-800 hover:border-[#8cc63f] hover:text-[#8cc63f] transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Agile', 'Scrum', 'Kanban', 'DevOps', 'CI/CD', 'TDD', 'Microservices', 'Event-Driven', 'Domain-Driven Design', 'API-First'].map((method, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg text-sm border border-gray-800 hover:border-[#8cc63f] hover:text-[#8cc63f] transition-all duration-200"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
