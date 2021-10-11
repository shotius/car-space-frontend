import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Box } from '@chakra-ui/layout';
import { CarCard } from 'src/components/molecules/CarCard';
import { IconButton } from '@chakra-ui/button';
import { ArrowNextIcon } from 'src/components/atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from 'src/components/atoms/Icons/Arrows/ArrowPrevIcon';
import useSwiperRef from 'src/utils/hooks/useSwiperRef';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box>
        <IconButton
          aria-label="previous slide"
          icon={<ArrowPrevIcon />}
          ref={prevRef}
        >
          Prev
        </IconButton>
        <IconButton
          aria-label="next slide"
          icon={<ArrowNextIcon />}
          ref={nextRef}
        >
          Next
        </IconButton>
      </Box>
      <Swiper
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onBeforeInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.destroy()
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        // }}
        // slidesPerView={1.1}
        // spaceBetween={30}
        // navigation={{
        //   prevEl: prevRef.current ? prevRef.current : undefined,
        //   nextEl: nextRef.current ? nextRef.current : undefined,
        // }}
        // onInit={(swiper) => {
        //   //@ts-ignore
        //   swiper.params.navigation.prevEl = prevRef.current;
        //   //@ts-ignore
        //   swiper.params.navigation.nextEl = nextRef.current;
        //   swiper.navigation.destroy();
        //   swiper.navigation.init();
        //   swiper.navigation.update();
        // }}
        // onInit={(swiper) => {
        //   swiper.params.navigation.prevEl = prevRef.current;
        //   swiper.params.navigation.nextEl = nextRef.current;
        //   swiper.navigation.init();
        //   swiper.navigation.update();
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true  }
        // hashNavigation={{
        //   watchState: true,
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
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
