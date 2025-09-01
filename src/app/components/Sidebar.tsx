"use client"
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Sidebar({ isOpen, onClose, scrollToSection }: SidebarProps) {
  const handleItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/paw_prints_flat.svg"
              alt="Logo"
              width={27}
              height={24}
              className="object-contain"
            />
            <h1 className="text-[#101828] font-bold text-[24px] leading-[1]">Paws n' Play</h1>
          </div>

          <nav className="flex flex-col gap-6">
            <div 
              className="flex items-center gap-2 cursor-pointer py-3 border-b border-gray-100"
              onClick={() => handleItemClick('shop')}
            >
              <span className="text-[#101828] text-[18px] font-semibold">Shop</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div 
              className="flex items-center gap-2 cursor-pointer py-3 border-b border-gray-100"
              onClick={() => handleItemClick('services')}
            >
              <span className="text-[#101828] text-[18px] font-semibold">Services</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div 
              className="cursor-pointer py-3 border-b border-gray-100"
              onClick={() => handleItemClick('about-us')}
            >
              <span className="text-[#101828] text-[18px] font-semibold">About Us</span>
            </div>
            
            <div 
              className="cursor-pointer py-3 border-b border-gray-100"
              onClick={() => handleItemClick('blog')}
            >
              <span className="text-[#101828] text-[18px] font-semibold">Blog</span>
            </div>
            
            <div 
              className="cursor-pointer py-3 border-b border-gray-100"
              onClick={() => handleItemClick('contact')}
            >
              <span className="text-[#101828] text-[18px] font-semibold">Contact</span>
            </div>
          </nav>

        </div>
      </div>
    </>
  );
}
