'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function MainSwiper() {
  return (
    <>
      <Swiper 
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper mb-6"
      >
    


        <SwiperSlide>

                 <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px]">
                    <Image
                        src="/images/Mainslider2.jpg"
                        alt="sliderimage"
                        fill
                        className="object-fill"
                        priority
                        sizes="100vw"   
                    />
                    </div>


        </SwiperSlide>


        <SwiperSlide>
        
                  <div className="relative w-full h-auto sm:h-64 md:h-80 lg:h-[500px]">
                    <Image
                        src="/images/Mainslider3.jpg"
                        alt="sliderimage"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"   // 👈 always full width of viewport
                    />
                    </div>





        </SwiperSlide>




            <SwiperSlide>

                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px]">
                    <Image
                        src="/images/Mainslider1.jpg"
                        alt="sliderimage"
                        fill
                        className="object-fill"
                        priority
                        sizes="100vw"   
                    />
                    </div>

        </SwiperSlide>

      </Swiper>
    </>
  );
}

