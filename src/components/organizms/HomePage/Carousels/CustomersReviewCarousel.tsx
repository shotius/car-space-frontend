import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useRef } from 'react';
import { ArrowNextIcon } from 'src/components/atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from 'src/components/atoms/Icons/Arrows/ArrowPrevIcon';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomerReviewCard } from '../../../molecules/Cards/CustomerReviewCard';

SwiperCore.use([Navigation]);

interface CustomersReviewProps {}

export const CustomersReviewCarousel: React.FC<CustomersReviewProps> = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Box w="100%">
      <Swiper className="mySwiper">
        <SwiperSlide>
          {' '}
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <CustomerReviewCard />
        </SwiperSlide>
      </Swiper>
      <IconButton
        icon={<ArrowPrevIcon />}
        aria-label="next customer review card"
        ref={prevRef}
      />
      <IconButton
        icon={<ArrowNextIcon />}
        aria-label="next customer review card"
        ref={nextRef}
      />
    </Box>
  );
};
