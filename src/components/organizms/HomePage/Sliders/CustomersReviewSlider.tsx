import { Box } from '@chakra-ui/layout';
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

export const CustomersReviewSlider: React.FC<CustomersReviewProps> = () => {
  return (
    <Box w="100%">
      <Swiper navigation={true} className="mySwiper">
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
    </Box>
  );
};
