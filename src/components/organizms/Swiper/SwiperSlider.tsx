import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { Box } from '@chakra-ui/layout';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><Box h="200px" >Slide 1</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 2</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 3</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 4</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 5</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 6</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 7</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 8</Box></SwiperSlide>
        <SwiperSlide><Box h="200px" >Slide 9</Box></SwiperSlide>
      </Swiper>
    </>
  );
}
