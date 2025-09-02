"use client"
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Multivitamin For Cat",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    price: 15000,
    imageSrc: "/muiltivitamin.jpg",
    imageAlt: "Multivitamin For Cat"
  },
  {
    id: 2,
    title: "Cat Food",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    price: 15000,
    imageSrc: "/cat-food.jpg",
    imageAlt: "Cat Food"
  },
  {
    id: 3,
    title: "Dog Food",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    price: 15000,
    imageSrc: "/dog-food.jpg",
    imageAlt: "Dog Food"    
  },
  {
    id: 4,
    title: "Pet Plate",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    price: 15000,
    imageSrc: "/pet-plate.png",
    imageAlt: "Pet Plate"
  },
  {
    id: 5,
    title: "Bird Water",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    price: 15000,
    imageSrc: "/bird-water.png",
    imageAlt: "Bird Water"
  },
  {
    id: 6,
    title: "Dog Water",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    price: 15000,
    imageSrc: "/dog-water.png",
    imageAlt: "Dog Water"
  }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("Random");
  const [showMoreProducts, setShowMoreProducts] = useState(false);

  const categories = ["Random", "Cat", "Dogs", "Fish", "Birds"];

  return (
    <div className="min-h-screen relative bg-white flex justify-center px-4 md:px-[80px] py-[35px] md:py-[70px]">
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
            <h2 className="text-black font-medium text-[20px] md:text-[35px] leading-[1]">Shop</h2>
          </div>
        </div>
        
        <div className="lg:hidden w-full max-w-[1201px] mx-auto mt-0 md:mt-[92px] border-0 md:border-2 border-gray-200 rounded-lg p-6">
            <div className="w-full max-w-[1158px] text-black font-semibold text-[15px] p-4">
                <h2>Featured Products</h2>
                <div className="w-full flex flex-row justify-center gap-2 text-[12px] font-semibold mt-8">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                           selectedCategory === category
                             ? "bg-gradient-to-r from-[#101828] to-[#233250] text-white"
                             : "text-black hover:bg-gray-100"
                         }`}
                      >
                        {category}
                      </button>
                    ))}
                </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 gap-[17px]">
              {products.slice(0, 2).map((product) => (
                <div key={product.id} className="relative group cursor-pointer">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={380}
                    height={450}
                    className="object-cover w-full h-[450px]"
                  />
                  <div className="absolute inset-0 bg-[#1018288A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                    <div className="absolute top-4 left-4 px-2 py-1 rounded">
                      <p className="text-xl font-bold">₦{product.price.toLocaleString()}</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                      <h3 className="text-lg text-[34px] font-semibold text-white">{product.title}</h3>
                      <p className="text-white text-[18px]">{product.description}</p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px] pb-4">
                      <button className="w-[95px] text-center px-4 py-2 bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] rounded text-white transition-all duration-300 ease-in">
                           + 1 -
                       </button>
                       <button className="w-[120px] text-center px-4 py-2 bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] rounded text-white transition-all duration-300 ease-in">
                           Add to Cart
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="hidden lg:block w-full max-w-[1201px] mx-auto mt-[92px] border-2 border-gray-200 rounded-lg p-6">
            <div className="w-full max-w-[1158px] text-black font-semibold text-[35px] p-4">
                <h2>Featured Products</h2>
                <div className="w-full max-w-[492px] flex flex-row gap-[10px] text-[20px] font-semibold mx-auto mt-8">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                           selectedCategory === category
                             ? "bg-gradient-to-r from-[#101828] to-[#233250] text-white"
                             : "text-black hover:bg-gray-100"
                         }`}
                      >
                        {category}
                      </button>
                    ))}
                </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-[17px]">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="relative group cursor-pointer">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={380}
                    height={450}
                    className="object-cover w-full h-[450px]"
                  />
                  <div className="absolute inset-0 bg-[#1018288A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                    <div className="absolute top-4 left-4 px-2 py-1 rounded">
                      <p className="text-xl font-bold">₦{product.price.toLocaleString()}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                      <h3 className="text-lg text-[34px] font-semibold text-white">{product.title}</h3>
                      <p className="text-white text-[18px]">{product.description}</p>
                    </div>
                    <div className="flex justify-center items-center gap-[10px] pb-4">
                      <button className="w-[95px] text-center px-4 py-2 bg-gradient-to-r text-[20px] hover:bg-gradient-to-l from-[#101828] to-[#233250] from-[#101828] to-[#233250] rounded text-white">
                          + 1 -
                      </button>
                      <button className="bg-gradient-to-r from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] text-[20px] text-white px-4 py-2 rounded">
                          Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {showMoreProducts && products.slice(3, 6).map((product) => (
                <div key={product.id} className="relative group cursor-pointer">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={380}
                    height={450}
                    className="object-cover w-full h-[450px]"
                  />
                  <div className="absolute inset-0 bg-[#1018288A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                    <div className="absolute top-4 left-4 px-2 py-1 rounded">
                      <p className="text-xl font-bold">₦{product.price.toLocaleString()}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                      <h3 className="text-lg text-[34px] font-semibold text-white">{product.title}</h3>
                      <p className="text-white text-[18px]">{product.description}</p>
                    </div>
                    <div className="flex justify-center items-center gap-[10px] pb-4">
                      <button className="w-[95px] text-center px-4 py-2 bg-gradient-to-r text-[20px] from-[#101828] to-[#233250] hover:bg-gradient-to-l from-[#101828] to-[#233250] rounded text-white">
                          + 1 -
                      </button>
                      <button className="bg-gradient-to-r from-[#101828] to-[#233250] text-[20px] hover:bg-gradient-to-l from-[#101828] to-[#233250] text-white px-4 py-2 rounded">
                          Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowMoreProducts(!showMoreProducts)}
                className="text-[#101828] text-[18px] font-medium hover:text-[#101828] transition-colors duration-300"
              >
                View More {showMoreProducts ? '<<<' : '>>>'}
              </button>
            </div>
        </div>


      </div>
    </div>
  );
}
