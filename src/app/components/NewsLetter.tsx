export default function NewsLetter() {
  return (
    <div className="relative bg-[#101828] flex justify-center px-4 md:px-[80px] py-12">
      <div className="w-full max-w-[1440px]">
        <div className="w-full max-w-[1201px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-[570px] text-left">
              <h2 className="mb-4 text-[20px] md:text-[20px] text-white">
                Join our newsletter
              </h2>
              <h3 className="text-[#CECECE] text-[13px] md:text-[20px]">
                Be the first to receive latest updates on promo, sales and offers
              </h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-[280px] px-4 py-2 text-[14px] md:text-[16px] text-[#667085] bg-[#DEDEDE] border-[1px] border-[#D0D5DD] rounded-[8px] focus:outline-none placeholder:text-[14px] md:placeholder:text-[16px]"
                />
              </div>
              <button className="w-full md:w-[115px] flex items-center justify-center rounded-[8px] border-[#D0D5DD] text-[#344054] bg-white px-6 py-3 font-semibold text-[14px] md:text-[16px] hover:bg-transparent hover:text-white hover:border-white border-1 transition ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
