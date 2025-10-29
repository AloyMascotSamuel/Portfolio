'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import AboutSection from './components/AboutSection';
import HeroContent from './components/HeroContent';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('resume');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Header */}
      <MobileHeader
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Desktop Three Column Layout with Margins */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left: Icon Navigation - Fixed */}
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
        
        {/* Main Container with Left/Right Margins */}
        <div className="flex-1 ml-28">
          <div className="max-w-[1400px] mx-auto px-8 xl:px-16 flex gap-8 xl:gap-12">
            {/* Center: Profile Card - Fixed */}
            <AboutSection onNavigate={scrollToSection} />
            
            {/* Right: Main Content - Scrollable */}
            <main className="flex-1 py-12 max-h-screen overflow-y-auto">
              {/* Hero Content (replaces About section) */}
              <HeroContent />
              
              <ResumeSection />
              <SkillsSection />
              <PortfolioSection />
              <BlogSection />
              <ContactSection />

              {/* Footer */}
              <footer className="bg-[#111111]/95 backdrop-blur-sm rounded-2xl border border-gray-800/50 py-8 mt-12 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Nicolas Cava. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Built with Next.js & Tailwind CSS
                  </p>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden pt-16">
        <AboutSection onNavigate={scrollToSection} />
        <ResumeSection />
        <SkillsSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-[#111111]/95 backdrop-blur-sm rounded-2xl border border-gray-800/50 py-8 mx-2 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Nicolas Cava. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
