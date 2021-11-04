import { Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
import { ICar } from 'src/redux/features/auth/types';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';




// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const  CarListCarousel = ({car}: {car: ICar}) =>  {
  const [isLaptopScreen] = useMediaQuery("(min-width: 1024px)")

  return (
    <Box w="full" position="relative">
      {/* Swiper */}
      <Swiper
        className={styles.carCardSwiper}
        allowTouchMove={!isLaptopScreen} // disable slider on laptop screen
        spaceBetween={15}
        slidesPerView={2.1}
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
          1137: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
          <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
          <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard car={car}/>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}