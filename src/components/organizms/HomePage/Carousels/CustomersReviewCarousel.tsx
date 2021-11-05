import { Box, HStack } from '@chakra-ui/layout';
import { useRef, useState } from 'react';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomerReviewCard } from '../../../molecules/Cards/CustomerReviewCard';
import { ButtonMobile } from './Navigation/ButtonMobile';

SwiperCore.use([Navigation]);

interface CustomersReviewProps {}

export const CustomersReviewCarousel: React.FC<CustomersReviewProps> = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const { isMobile } = useDetectScreen();

  return (
    <Box w="100%" position="relative">
      <Swiper
        className="mySwiper"
        onSlideChange={(swiper) => {
          setIsLastSlide(swiper.isEnd);
          setIsFirstSlide(swiper.isBeginning);
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
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
        {isMobile && (
          <HStack
            position="absolute"
            zIndex="1"
            top="10px"
            right="10px"
            spacing="0"
          >
            <ButtonMobile side="right" ref={prevRef} animate={!isFirstSlide} />
            <ButtonMobile side="left" ref={nextRef} animate={!isLastSlide} />
          </HStack>
        )}
      </Swiper>
    </Box>
  );
};
