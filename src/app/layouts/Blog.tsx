import Image from "next/image";

export default function Blog() {
  return (
    <div className="relative bg-white flex justify-center px-4 md:px-[80px] py-[35px] md:py-[70px]">
      <div className="w-full max-w-[1440px]">
        <div className="w-full max-w-[1280px] mx-auto border-[#000000] border-b-[0.2px] relative pb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/paw_prints_flat.svg"
              alt="Logo"
              width={27}
              height={24}
              className="object-contain"
            />
            <h2 className="text-black font-medium text-[20px] md:text-[35px] leading-[1]">Blog</h2>
          </div>
        </div>
        
        <div className="w-full max-w-[1201px] mx-auto mt-[20px] md:mt-[92px]">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-[570px]">
              <h3 className="text-black text-[20px] md:text-[36px] font-semibold mb-4">
              Milestone: 20,000 Pets Treated
              </h3>
              <hr className="h-[1px] bg-[#000000]" />
              <p className="text-black text-[15px] md:text-[18px] mb-8">
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
              </p>
              
              <h3 className="text-black text-[20px] md:text-[24px] font-semibold mb-4">
                Renewed target
              </h3>
              <p className="text-black text-[15px] md:text-[18px] mb-8">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac.
              </p>
              
              <button className="bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] text-white px-6 py-3 rounded-lg text-[15px] md:text-[16px] transition-all duration-300 ease-in">
                Read More
              </button>
            </div>
            <div className="hidden md:block w-full max-w-[552px]">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/golden-retriever-video.png"
              >
                <source src="/Rusty the Narcoleptic dog.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
