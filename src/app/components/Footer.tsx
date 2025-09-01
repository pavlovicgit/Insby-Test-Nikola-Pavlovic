import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#101828] text-white py-8 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-0">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-[30%] text-center md:text-left pl-0 md:pl-4">
              <div className="flex items-center justify-start gap-3 mb-4">
                <Image
                  src="/paw_prints_flat.svg"
                  alt="Logo"
                  width={27}
                  height={24}
                  className="object-contain brightness-0 invert"
                />
                <h2 className="text-white font-bold text-[20px] leading-[24px]">Paws n' Play</h2>
              </div>
              <p className="text-[#CECECE] text-[16px] leading-[24px] text-left">
                    Where wagging tails and purring hearts reign supreme!
              </p>
            </div>
            
             <div className="w-full md:w-[65%] grid grid-cols-2 md:grid-cols-5 gap-8">
               <div>
                 <h3 className="text-white text-[14px] leading-[20px] font-bold mb-4">Shop</h3>
                 <ul className="space-y-[16px] text-[16px] leading-[24px] font-semibold text-[#CECECE]">
                   <li>Pet Adoption</li>
                   <li>Nutrition</li>
                   <li>Pet care</li>
                   <li>Pet food</li>
                   <li>Pricing</li>
                 </ul>
               </div>

               <div>
                 <h3 className="text-white text-[14px] leading-[20px] font-bold mb-4">Company</h3>
                 <ul className="space-y-[16px] text-[16px] leading-[24px] font-semibold text-[#CECECE]">
                   <li>About us</li>
                   <li>Careers</li>
                   <li>Press</li>
                   <li>News</li>
                   <li>Contact</li>
                 </ul>
               </div>

               <div>
                 <h3 className="text-white text-[14px] leading-[20px] font-bold mb-4">Services</h3>
                 <ul className="space-y-[16px]  text-[16px] leading-[24px] font-semibold text-[#CECECE]">
                   <li>Grooming</li>
                   <li>Boarding</li>
                   <li>Training</li>
                   <li>Veterinary</li>
                   <li>Support</li>
                 </ul>
               </div>

               <div>
                 <h3 className="text-white text-[14px] leading-[20px] font-bold mb-4">Social</h3>
                 <ul className="space-y-[16px] text-[16px] leading-[24px] font-semibold text-[#CECECE]">
                   <li>Twitter</li>
                   <li>LinkedIn</li>
                   <li>Facebook</li>
                   <li>AngelList</li>
                   <li>Dribble</li>
                 </ul>
               </div>

               <div>
                 <h3 className="text-white text-[14px] leading-[20px] font-bold mb-4">Legal</h3>
                 <ul className="space-y-[16px] text-[16px] leading-[24px] font-semibold text-[#CECECE]">
                   <li>Terms</li>
                   <li>Privacy</li>
                   <li>Cookies</li>
                   <li>Licenses</li>
                   <li>Settings</li>
                 </ul>
               </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-[#CECECE] gap-6 px-4">
            <div className="text-[#CECECE] text-[16px] leading-[24px] text-center md:text-left">
              © 2024 Paws n' Play. All rights reserved.
            </div>

            <div className="flex gap-[24px]">
              <Image
                src="/vector-twitter.png"
                alt="Logo 1"
                width={24}
                height={19.5}
                className="object-contain"
              />
              <Image
                src="/vector-linkedin.png"
                alt="Logo 2"
                width={24}
                height={19.5}
                className="object-contain"
              />
              <Image
                src="/vector-facebook.png"
                alt="Logo 3"
                width={24}
                height={19.5}
                className="object-contain"
              />
              <Image
                src="/vector-github.png"
                alt="Logo 4"
                width={24}
                height={19.5}
                className="object-contain"
              />
              <Image
                src="/two-fingers.png"
                alt="Logo 5"
                width={24}
                height={19.5}
                className="object-contain"
              />
              <Image
                src="/vector-dribbble.png"
                alt="Logo 6"
                width={24}
                height={19.5}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
