'use client';

import { useState } from 'react';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'FinTech Payment Platform',
      category: 'architecture',
      description: 'Built scalable payment processing system handling $100M+ in annual transactions',
      tags: ['Node.js', 'PostgreSQL', 'AWS'],
      image: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'HealthTech SaaS',
      category: 'leadership',
      description: 'Scaled engineering team from 3 to 25 engineers in 18 months',
      tags: ['React', 'Python', 'Team Building'],
      image: 'from-purple-500 to-pink-500',
    },
    {
      title: 'E-commerce Platform',
      category: 'architecture',
      description: 'Architected microservices infrastructure supporting 1M+ daily users',
      tags: ['Microservices', 'Kubernetes', 'GraphQL'],
      image: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI/ML Product Suite',
      category: 'product',
      description: 'Led product development from concept to $5M ARR in 2 years',
      tags: ['AI/ML', 'Python', 'Strategy'],
      image: 'from-green-500 to-teal-500',
    },
    {
      title: 'DevOps Transformation',
      category: 'process',
      description: 'Reduced deployment time by 80% and increased release frequency by 5x',
      tags: ['CI/CD', 'Docker', 'Automation'],
      image: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Mobile-First Platform',
      category: 'architecture',
      description: 'Cross-platform mobile solution serving 500K+ active users',
      tags: ['React Native', 'Firebase', 'Mobile'],
      image: 'from-pink-500 to-rose-500',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'product', label: 'Product' },
    { id: 'process', label: 'Process' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="min-h-screen px-3 py-6 lg:p-0 lg:mb-16">
      <div className="w-full bg-[#111111]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-12 border border-gray-800/50">
        <div className="mb-6">
          <span className="text-[#8cc63f] font-semibold text-sm uppercase tracking-wider">Projects</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Portfolio</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#8cc63f] text-white shadow-lg shadow-[#8cc63f]/30'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8cc63f]/20 cursor-pointer"
            >
              {/* Image/Gradient Background */}
              <div className={`h-56 bg-gradient-to-br ${project.image} opacity-80 group-hover:opacity-100 transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-[#8cc63f] font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-[#8cc63f] transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
