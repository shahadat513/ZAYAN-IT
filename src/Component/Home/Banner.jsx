import React from 'react';
import slider1 from '../../../public/Slider-1.json'
import slider2 from '../../../public/Slider-2.json'
import slider3 from '../../../public/Slider-3.json'
import slider4 from '../../../public/Slider-4.json'
import slider5 from '../../../public/Slider-5.json'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, EffectCoverflow, Pagination,} from 'swiper/modules';
import Lottie from "lottie-react";

const Banner = () => {
    return (
        <>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay: 2500,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          loop: true,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='h-96 w-96 mx-auto object-cover'><Lottie animationData={slider1} className=' '/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 w-96 mx-auto object-cover'><Lottie animationData={slider3} className=' '/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 w-96 mx-auto object-cover'><Lottie animationData={slider2} className=' '/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 w-96 mx-auto object-cover'><Lottie animationData={slider4} className=' '/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 w-96 mx-auto object-cover'><Lottie animationData={slider5} className=' '/></div>
        </SwiperSlide>
      </Swiper>
        </>
    );
}

export default Banner;
