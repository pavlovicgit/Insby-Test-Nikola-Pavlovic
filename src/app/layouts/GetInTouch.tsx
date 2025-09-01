import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="relative bg-[#101828] flex justify-center px-4 md:px-[80px] py-[35px] md:py-[70px]">
      <div className="w-full max-w-[1440px]">
        <div className="w-full max-w-[1280px] mx-auto border-white border-b-[0.2px] relative pb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/paw_prints_flat.svg"
              alt="Logo"
              width={27}
              height={24}
              className="object-contain brightness-0 invert"
            />
            <h2 className="text-white font-medium text-[20px] md:text-[35px] leading-[1]">Get in Touch</h2>
          </div>
        </div>
        
        <div className="w-full max-w-[1201px] mx-auto mt-[92px]">
          <div className="lg:hidden flex flex-col gap-8">
            <div className="w-full">
              <div className="grid grid-cols-2 gap-x-[32px] gap-y-[48px]">
                <div className="text-white">
                  <Image
                    src="/mail.png"
                    alt="Email"
                    width={20}
                    height={16}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-[13px] leading-[30px] font-semibold mb-5">Email</h3>
                  <p className="text-[#CECECE] leading-[24px] mb-4 text-[10px]">Our friendly team is here to help.</p>
                  <p className="font-semibold text-[10px]">hello@pawsnplay.com</p>
                </div>
                
                <div className="text-white">
                  <Image
                    src="/chat.png"
                    alt="Live Chat"
                    width={20}
                    height={16}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-[13px] leading-[30px] font-semibold mb-5">Live chat</h3>
                  <p className="text-[#CECECE] leading-[24px] mb-4 text-[10px]">Our friendly team is here to help.</p>
                  <p className="font-semibold text-[10px]">24/7 support</p>
                </div>
                
                <div className="text-white">
                  <Image
                    src="/location.png"
                    alt="Office"
                    width={20}
                    height={16}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-[13px] leading-[30px] font-semibold mb-5">Office</h3>
                  <p className="text-[#CECECE] leading-[24px] mb-4 text-[10px]">Come say hello at our office HQ.</p>
                  <p className="font-semibold text-[10px]">123, Yaya Abatan st, Ogba Lagos.</p>
                </div>
                
                <div className="text-white">
                  <Image
                    src="/phone.png"
                    alt="Phone"
                    width={20}
                    height={16}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-[13px] leading-[30px] font-semibold mb-5">Phone</h3>
                  <p className="text-[#CECECE] leading-[24px] mb-4 text-[10px]">Mon-Fri from 8am to 5pm.</p>
                  <p className="font-semibold text-[10px]">+234 901234 384</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 text-[9px] font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px] md:text-base placeholder:text-[10px] md:placeholder:text-base"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 text-[9px] font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px] md:text-base placeholder:text-[10px] md:placeholder:text-base"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-[9px] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px] md:text-base placeholder:text-[10px] md:placeholder:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-[9px] font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none text-[10px] md:text-base placeholder:text-[10px] md:placeholder:text-base"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 text-[10px]">You agree to our friendly <span className="underline">privacy policy</span></span>
                  </label>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 ease-in text-[10px]">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-between">
            <div className="w-full max-w-[570px]">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 text-sm">You agree to our friendly <span className="underline">privacy policy</span></span>
                  </label>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 ease-in">
                  Send Message
                </button>
              </div>
            </div>
            <div className="w-full max-w-[552px]">
              <div className="h-full flex items-center">
                <div className="grid grid-cols-2 gap-x-[32px] gap-y-[48px] px-4">
                  <div className="text-white">
                    <Image
                      src="/mail.png"
                      alt="Email"
                      width={20}
                      height={16}
                      className="object-contain mb-4"
                    />
                    <h3 className="text-[20px] leading-[30px] font-semibold mb-5">Email</h3>
                    <p className="text-[#CECECE] leading-[24px] mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold">hello@pawsnplay.com</p>
                  </div>
                  
                  <div className="text-white">
                    <Image
                      src="/chat.png"
                      alt="Live Chat"
                      width={20}
                      height={16}
                      className="object-contain mb-4"
                    />
                    <h3 className="text-[20px] leading-[30px] font-semibold mb-5">Live chat</h3>
                    <p className="text-[#CECECE] leading-[24px] mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold">24/7 support</p>
                  </div>
                  
                  <div className="text-white">
                    <Image
                      src="/location.png"
                      alt="Office"
                      width={20}
                      height={16}
                      className="object-contain mb-4"
                    />
                    <h3 className="text-[20px] leading-[30px] font-semibold mb-5">Office</h3>
                    <p className="text-[#CECECE] leading-[24px] mb-4">Come say hello at our office HQ.</p>
                    <p className="font-semibold">123, Yaya Abatan st, Ogba Lagos.</p>
                  </div>
                  
                  <div className="text-white">
                    <Image
                      src="/phone.png"
                      alt="Phone"
                      width={20}
                      height={16}
                      className="object-contain mb-4"
                    />
                    <h3 className="text-[20px] leading-[30px] font-semibold mb-5">Phone</h3>
                    <p className="text-[#CECECE] leading-[24px] mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold">+234 901234 384</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
