import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Grooming",
    description: "Professional grooming services for all types of pets",
    imageSrc: "/grooming.png",
    imageAlt: "Pet grooming"
  },
  {
    id: 2,
    title: "Boarding",
    description: "Comprehensive health care and medical services",
    imageSrc: "/boarding.png",
    imageAlt: "Pet Boarding"
  },
  {
    id: 3,
    title: "Adoption",
    description: "Expert training programs for behavioral improvement",
    imageSrc: "/adoption.png",
    imageAlt: "Pet adoption"
  },
  {
    id: 4,
    title: "Veterinary",
    description: "In-home pet care and companionship services",
    imageSrc: "/veterinary.png",
    imageAlt: "Veterinary"
  },
  {
    id: 5,
    title: "Training",
    description: "Safe and comfortable boarding facilities",
    imageSrc: "/training.png",
    imageAlt: "Pet training"
  }
];

export default function Services() {
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
            <h2 className="text-black font-medium text-[20px] md:text-[35px] leading-[1]">Services</h2>
          </div>
        </div>
        
        <div className="w-full max-w-[1201px] mx-auto mt-0 md:mt-[92px] border-0 md:border-2 border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={service.id} className={`relative group cursor-pointer ${service.id === 3 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''} ${service.id === 3 ? 'order-5 md:order-3' : ''} ${service.id === 4 ? 'order-3 md:order-4' : ''} ${service.id === 5 ? 'order-4 md:order-5' : ''}`}>
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={350}
                  height={350}
                  className={`w-full object-cover rounded ${service.id === 3 ? 'h-[188px] md:h-[724px]' : 'h-[188px] md:h-[350px]'}`}
                />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1018288A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="text-center">
                     <h3 className="text-white text-[15px] md:text-[50px] font-semibold mb-4 group-hover:-translate-y-4 transition-transform duration-300">
                       {service.title}
                     </h3>
                     <p className="text-white text-[15px] md:text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-6 max-w-[300px]">
                       {service.description}
                     </p>
                     <button className="bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] text-white px-6 py-3 rounded-lg font-medium text-[16px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in delay-200">
                       Learn More
                     </button>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
