export default function BlogSection() {
  const posts = [
    {
      title: 'Building Your First Technical Team',
      date: 'October 15, 2024',
      excerpt: 'Key considerations when hiring your founding engineering team and establishing culture from day one. Learn from real experiences scaling teams from 0 to 20+ engineers.',
      readTime: '8 min',
      category: 'Leadership',
    },
    {
      title: 'Scaling from Monolith to Microservices',
      date: 'September 22, 2024',
      excerpt: 'When and how to transition your architecture as your startup grows. Real-world lessons from the trenches, including pitfalls to avoid and best practices.',
      readTime: '12 min',
      category: 'Architecture',
    },
    {
      title: 'The Fractional CTO Model: A Strategic Advantage',
      date: 'August 30, 2024',
      excerpt: 'Why early-stage startups benefit from fractional technical leadership and how to make it work effectively for your organization.',
      readTime: '6 min',
      category: 'Strategy',
    },
    {
      title: 'Technical Debt: Investment or Burden?',
      date: 'July 18, 2024',
      excerpt: 'Strategic approach to managing technical debt in fast-growing startups. Understanding when to address it and when to move fast.',
      readTime: '10 min',
      category: 'Process',
    },
    {
      title: 'Hiring Senior Engineers: Beyond the Resume',
      date: 'June 5, 2024',
      excerpt: 'What to look for when hiring senior engineering talent for your startup. Cultural fit, technical depth, and leadership potential.',
      readTime: '7 min',
      category: 'Leadership',
    },
    {
      title: 'DevOps Culture: More Than Tools',
      date: 'May 12, 2024',
      excerpt: 'Building a DevOps culture that enables rapid deployment and high reliability. Lessons from implementing CI/CD at scale.',
      readTime: '9 min',
      category: 'Process',
    },
  ];

  return (
    <section id="blog" className="min-h-screen px-3 py-6 lg:p-0 lg:mb-16">
      <div className="w-full bg-[#111111]/95 backdrop-blur-sm p-6 lg:p-12 border border-gray-800/50">
        <div className="mb-6">
          <span className="text-[#8cc63f] font-semibold text-sm uppercase tracking-wider">Insights</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium text-white mb-8">Notes & Articles</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl">
          Sharing experiences and insights from years of building and scaling engineering teams. 
          Practical advice for founders and technical leaders navigating startup growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-[#111111] p-6  border border-gray-800/50 hover:border-gray-700 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-[#8cc63f]/10"
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-[#8cc63f]/20 text-[#8cc63f] rounded-full text-xs font-semibold mb-4 border border-[#8cc63f]/30">
                {post.category}
              </span>
              
              {/* Meta Info */}
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <time className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} read
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#8cc63f] transition-all">
                {post.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-gray-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              {/* Read More Link */}
              <div className="flex items-center text-[#8cc63f] font-semibold text-sm group-hover:text-[#a8d963]">
                Read More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
