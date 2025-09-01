import Image from "next/image";

interface TeamMember {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    title: "Dr. Olivia Rhye",
    description: "Senior Veterinarian",
    imageSrc: "/olivia-rhye.jpg",
    imageAlt: "Olivia Rhye"
  },
  {
    id: 2,
    title: "Phoenix Baker",
    description: "Asst. Veterinarian",
    imageSrc: "/phoenix-baker.jpg",
    imageAlt: "Phoenix Baker"
  },
  {
    id: 3,
    title: "Lana Steiner",
    description: "Resident Veterinarian",
    imageSrc: "/lana-steiner.jpg",
    imageAlt: "Lana Steiner"
  },
  {
    id: 4,
    title: "Demi Wilkinson",
    description: "Intern Veterinarian",
    imageSrc: "/demi-wilkinson.jpg",
    imageAlt: "Demi Wilkinson"
  }
];

export default function OurTeam() {
  return (
    <div className="relative bg-white flex justify-center px-4 md:px-[80px] py-0 md:py-[70px]">
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
            <h2 className="text-black font-medium text-[20px] md:text-[35px] leading-[1]">Our Team</h2>
          </div>
        </div>
        
        <div className="w-full max-w-[1201px] mx-auto mt-[25px] md:mt-[92px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-left">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  width={280}
                  height={296}
                  className="w-full h-[185px] md:h-[296px] object-cover mb-4"
                />
                <h3 className="text-black text-[12px] md:text-[20px] mb-2 text-center md:text-left">{member.title}</h3>
                <p className="text-[#10182880] text-[11px] md:text-[18px] mb-4 text-center md:text-left">{member.description}</p>
                <div className="flex justify-center md:justify-start gap-3">
                  <Image
                    src="/twitter.svg"
                    alt="Website"
                    width={24}
                    height={19.5}
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                  />
                  <Image
                    src="/linkedin.svg"
                    alt="Document"
                    width={24}
                    height={19.5}
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                  />
                  <Image
                    src="/dribbble.svg"
                    alt="Window"
                    width={24}
                    height={19.5}
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
