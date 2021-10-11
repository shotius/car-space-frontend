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
import { CarCard } from 'src/components/molecules/CarCard';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        // slidesPerView={1.1}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.3,
          },
        }}
      >
        <SwiperSlide>
          <Box >
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box >
          <CarCard />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
