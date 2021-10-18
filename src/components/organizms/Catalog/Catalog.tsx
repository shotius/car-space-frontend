import  { useRef } from 'react';
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
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { useMediaQuery } from '@chakra-ui/media-query';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const  Catalog = () =>  {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isLaptopScreen] = useMediaQuery("(min-width: 1024px)")

  return (
    <Box w="full" position="relative">
      <SectionHeader mainText="Catalog" secondaryText="See all" />
      {/* arrows */}
      <Box position="absolute" top="0" right="0" zIndex="10" display="none">
        <IconButton
          aria-label="previous slide"
          icon={<ArrowPrevIcon />}
          ref={prevRef}
          mr="2"
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
      {/* Swiper */}
      <Swiper
        className="carCardSwiper"
        allowTouchMove={!isLaptopScreen} // disable slider on laptop screen
        spaceBetween={15}
        slidesPerView={2.1}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1.071,
          },
          540: {
            slidesPerView: 2.2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.5,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          1296: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Box w="full">
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
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
    </Box>
  );
}
export default Catalog