"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import AboutSection from "@/Compnents/AboutSection";
import SkillsSection from "@/Compnents/SkillsSection";
import WorkSection from "@/Compnents/WorkSection";
import ContactSection from "@/Compnents/ContactSection";

export default function Portfolio3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
};

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[#0c0016] flex flex-col">
        {/* Navigation */}
        <nav className="fade-in sticky top-0 z-50 flex justify-between items-center p-4 md:p-6 lg:p-9 bg-[#0c0016]/90 backdrop-blur-sm">
          <div className="relative group cursor-pointer">
            <span className="relative z-10 text-2xl md:text-3xl text-white font-bold">Hassan</span>
            <span className="absolute w-0 h-[3px] bg-purple-500 left-0 bottom-0 top-10 transition-all duration-300 group-hover:w-full"></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ol className="flex gap-3 md:gap-5 text-white text-xl ">
              {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <span 
                    className="relative z-10 text-base md:text-lg"
                    onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </span>
                  <span className="absolute w-0 h-[1px] left-0 bottom-0 top-7 md:top-8 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden text-white bg-purple-950 fixed top-16 left-0 right-0 bg-[#0c0016] z-40 py-4">
            <ol className="flex flex-col items-center gap-6">
              {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <span 
                    className="relative z-10 text-xl"
                    onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </span>
                  <span className="absolute w-0 h-[1px] left-0 bottom-0 top-7 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Hero Content */}
        <div className="w-full flex-1 flex justify-center items-center px-4 py-12">
          <div className="flex flex-col justify-center items-center gap-4 max-w-4xl text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="fade-in lucide lucide-file-stack-icon lucide-file-stack text-white p-2 rounded-full shadow-[0_0_23px_rgba(168,85,247,0.7)] hover:shadow-[0_0_29px_rgba(168,185,247,0.7)] transition-all duration-300" >
                  <div className="bg-[#0c0016] rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {i === 0 ? (
                        <>
                          <path d="M12 18V5" />
                          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                          <path d="M18 18a4 4 0 0 0 2-7.464" />
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                          <path d="M6 18a4 4 0 0 1-2-7.464" />
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                        </>
                      ) : i === 1 ? (
                        <>
                          <path d="M12 8V4H8" />
                          <rect width="16" height="12" x="4" y="8" rx="2" />
                          <path d="M2 14h2" />
                          <path d="M20 14h2" />
                          <path d="M15 13v2" />
                          <path d="M9 13v2" />
                        </>
                      ) : (
                        <>
                          <path d="M21 7h-3a2 2 0 0 1-2-2V2" />
                          <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
                          <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
                          <path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-in text-white text-3xl md:text-4xl font-bold">👋 Hi I'm Hassan Nadeem</div>
            <div className="fade-in text-4xl font-extralight font-sans text-[#3B4A5C]">Web Developer</div>
            <div className="fade-in text-white text-4xl md:text-5xl font-bold">Welcome To My</div>
            <div className="fade-in text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-700 bg-clip-text text-transparent">
              Portfolio Website
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}