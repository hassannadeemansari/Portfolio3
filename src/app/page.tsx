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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // ✅ Social Icons Array
  const socialIcons = [
    {
      name: "GitHub",
      link: "https://github.com/hassannadeemansari",
      svg: (
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
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-hassan-42ba382ba/",
      svg: (
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
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hassannadeem._/",
      svg: (
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
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[#0c0016] flex flex-col">
        {/* Navigation */}
        <nav className="fade-in sticky top-0 z-50 flex justify-between items-center p-4 md:p-6 lg:p-9 bg-[#0c0016]/90 backdrop-blur-sm">
          <div className="relative group cursor-pointer">
            <span className="relative z-10 text-2xl md:text-3xl text-white font-bold">
              Hassan
            </span>
            <span className="absolute w-0 h-[3px] bg-purple-500 left-0 bottom-0 top-10 transition-all duration-300 group-hover:w-full"></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ol className="flex gap-3 md:gap-5 text-white text-xl ">
              {["About", "Skills", "Work", "Contact"].map((item) => (
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden text-white bg-purple-950 fixed top-16 left-0 right-0 bg-[#0c0016] z-40 py-4">
            <ol className="flex flex-col items-center gap-6">
              {["About", "Skills", "Work", "Contact"].map((item) => (
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
            {/* ✅ Social Icons */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fade-in text-white p-2 rounded-full shadow-[0_0_23px_rgba(168,85,247,0.7)] hover:shadow-[0_0_29px_rgba(168,185,247,0.7)] transition-all duration-300"
                >
                  <div className="bg-[#0c0016] rounded-full p-2">{icon.svg}</div>
                </a>
              ))}
            </div>

            <div className="fade-in text-white text-3xl md:text-4xl font-bold">
              👋 Hi I&apos;m Hassan Nadeem
            </div>
            <div className="fade-in text-4xl font-extralight font-sans text-[#3B4A5C]">
              Web Developer
            </div>
            <div className="fade-in text-white text-4xl md:text-5xl font-bold">
              Welcome To My
            </div>
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

<footer className="bg-[#0B0014] py-6">
  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center">
      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Hassan Nadeem</span>. All rights reserved.
      </p>
    </div>
  </div>
</footer>



    </div>
  );
}
