import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative bg-white flex justify-center px-4 md:px-[80px] py-0 md:py-[70px]">
      <div className="w-full max-w-[1440px]">
        <div className="w-full max-w-[1280px] mx-auto  border-[#000000] border-b-[0.2px] relative pb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/paw_prints_flat.svg"
              alt="Logo"
              width={27}
              height={24}
              className="object-contain"
            />
            <h2 className="text-black font-medium text-[20px] md:text-[35px] leading-[1]">About Us</h2>
          </div>
        </div>
        
        <div className="w-full max-w-[1201px] mx-auto mt-0 md:mt-[92px] border-0 md:border-2 md:border-gray-200 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-[570px] text-[15px] sm:text-[18px] md:text-[19px] lg:text-[21px]">
              <p className="text-black mb-4">
              At Paws n' Play, our journey began with a simple yet profound love for animals. Inspired by the unwavering companionship and joy they bring to our lives, we embarked on a mission to create a haven where pets and their owners alike could experience unparalleled happiness and care.
              </p>
              <p className="text-black mb-4">
              Driven by our passion for animal welfare, we hand-select each product and service with meticulous attention to quality and sustainability. From nutritious food and enriching toys to expert grooming and healthcare, every offering is carefully curated to meet the unique needs of our beloved furry friends.
              </p>
              <p className="text-black mb-4">
              But our commitment doesn't end there. We're dedicated to fostering a community that celebrates the bond between pets and their human companions. Through educational resources, compassionate support, and memorable experiences, we strive to empower pet owners to provide the best possible care for their furry family members.
              </p>
              <p className="text-black mb-4">
              At Paws n' Play, customer satisfaction isn't just a goal – it's our guiding principle. We go above and beyond to ensure every interaction leaves tails wagging and hearts smiling. From personalized recommendations to attentive service, we're here to make your journey with your pet as joyful and fulfilling as possible.
              </p>
              <p className="text-black">
              Join us in our mission to create a world where every pet is cherished, every need is met, and every tail wags with happiness. Welcome to Paws n' Play, where pets are family, and love knows no bounds.
              </p>
            </div>
            <div className="hidden lg:block w-[552px] relative h-[687px]">
              <Image
                src="/cat-cake1.png"
                alt="Large image"
                width={500}
                height={687}
                className="w-full h-full absolute object-cover rounded-lg"
              />
              <div className="absolute z-10 -bottom-[200px] left-0 2xl:-left-[60px]">
                <div className="bg-white rounded-lg p-4">
                  <Image
                    src="/cat-cake2.png"
                    alt="Small image"
                    width={346}
                    height={346}
                    className="relative object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
