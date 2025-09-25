'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { categoryType } from "@/app/_Types/categoryType";
import { Pagination } from 'swiper/modules';

type CatSwiperProps = {
  category: categoryType[];
};

export default function CatSwiper({ category }: CatSwiperProps) {
  return (
    <Swiper slidesPerView={3} spaceBetween={10} pagination={{clickable:true}} modules={[ Pagination]}
    >
      {/* {category.map((cat) => (
      
        <SwiperSlide key={cat._id}>

                        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px]">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"   // 👈 always full width of viewport
                            />

                            </div>

                    <p>{cat.name}</p>

        
                </SwiperSlide>
      ))} */}
      {category.map((cat) => (
        <SwiperSlide key={cat._id}>
          <div className="flex flex-col items-center">
            <div className="relative w-full h-40 sm:h-56 md:h-72 lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <p className="mt-3 text-center font-medium">{cat.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
