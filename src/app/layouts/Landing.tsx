import Image from "next/image";

export default function Landing() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/golden-retriever.png"
        alt="Globe background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-[1440px] w-full px-4 md:px-8">
          <div className="text-white max-w-[630px] px-4">
            <h1 className="text-[30px] md:text-[60px] mb-[16px] leading-none tracking-[2%] font-semibold">
              Pawsitively Perfect: Where Every Pet's Dream Comes True!
            </h1>
            <p className="text-[14px] md:text-[16px] font-semibold mb-[16px] leading-[24px] tracking-[0%]">
              Welcome to Paws n' Play, the ultimate destination for pet lovers! Explore a world of tail-wagging joy and furry companionship with our wide range of products and services. From pampering essentials to playful toys, we're here to make every moment with your pet pawsitively perfect!"
            </p>
            <button className="flex items-center w-[187px] gap-3 px-[28px] py-[16px] border-[1px] border-white rounded-4xl text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out group">
              <span className="text-[16px] md:text-[18px] leading-[28px] font-semibold">Shop Now</span>
              <Image
                src="/paw_prints_flat_white.png"
                alt="Logo"
                width={27}
                height={24}
                className="object-contain group-hover:brightness-0 transition-all duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
