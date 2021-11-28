import { Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';
import styles from './styles.module.scss';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const CarListCarousel = ({ car }: { car: ICar }) => {
  const [isLaptopScreen] = useMediaQuery('(min-width: 1024px)');

  return (
    <Box
      position="relative"
      ml={[null, null, null, '-4']}
      mr={[null, null, null, '-4']}
      w={['full', 'auto']}
    >
      {/* Swiper */}
      <Swiper
        className={styles.carCardSwiper}
        allowTouchMove={!isLaptopScreen} // disable slider on laptop screen
        spaceBetween={16}
        slidesPerView={2.1}
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1.081,
          },
          420: {
            slidesPerView: 1.271,
          },
          490: {
            slidesPerView: 1.471,
          },
          540: {
            slidesPerView: 1.6,
          },
          700: {
            slidesPerView: 2.25,
          },
          768: {
            slidesPerView: 2.5,
          },
          890: {
            slidesPerView: 3.2,
          },
          992: {
            slidesPerView: 4,
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
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full">
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CarCard car={car} />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
