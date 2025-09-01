"use client"
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="w-full py-6 px-4 md:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 lg:gap-8">
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => scrollToSection('landing')}>
                  <Image
                    src="/paw_prints_flat.svg"
                    alt="Logo"
                    width={27}
                    height={24}
                    className="object-contain brightness-0 invert"
                  />
                  <h1 className="text-white font-bold text-[24px] leading-[1]">Paws n' Play</h1>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity duration-200" onClick={() => scrollToSection('shop')}>
                    <span className="text-white/80 hover:text-white text-[16px] font-semibold tracking-normal transition-colors duration-200">Shop</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity duration-200" onClick={() => scrollToSection('services')}>
                    <span className="text-white/80 hover:text-white text-[16px] font-semibold tracking-normal transition-colors duration-200">Services</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <span className="text-white/80 hover:text-white text-[16px] font-semibold tracking-normal cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('about-us')}>About Us</span>
                  <span className="text-white/80 hover:text-white text-[16px] font-semibold tracking-normal cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('blog')}>Blog</span>
                  <span className="text-white/80 hover:text-white text-[16px] font-semibold tracking-normal cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('contact')}>Contact</span>
                </div>
              </div>

              <div className="flex items-center">
                <button className="hidden lg:block bg-white text-[#101828] px-6 py-3 leading-[24px] rounded-[50px] font-semibold text-[16px] hover:bg-transparent hover:text-white hover:border-[#101828] border-1 transition ease-in-out">
                  Get Started
                </button>

                <div className="lg:hidden">
                  <Image
                    src="/navbar-menu.png"
                    alt="Menu"
                    width={24}
                    height={24}
                    className="object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                    onClick={toggleSidebar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        scrollToSection={scrollToSection}
      />
    </>
  );
}
