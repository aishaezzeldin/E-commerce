'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
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
        className="mySwiper"
      >
        <SwiperSlide>
          <Image width={200} height={200} src='/public/images/slider-image-1.jpeg' alt='sliderimage'  />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={200} height={200} src='/public/images/slider-image-2.jpeg' alt='sliderimage'  />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
