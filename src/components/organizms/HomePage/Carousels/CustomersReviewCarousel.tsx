import { Box, HStack } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import useWindowSize from 'src/utils/hooks/useWindowSize';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomerReviewCard } from '../../../molecules/Cards/CustomerReviewCard';
import { ButtonMobile } from './Navigation/ButtonMobile';
import { ButtonNext } from './Navigation/Deskop/ButtonNext';
import { ButtonPrev } from './Navigation/Deskop/ButtonPrev';

SwiperCore.use([Navigation]);

interface CustomersReviewProps {}

export const CustomersReviewCarousel: React.FC<CustomersReviewProps> = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const { isDesktop } = useDetectScreen();
  // changes on window resize
  const windowSize = useWindowSize();

  // swiper initialize function
  // extracted in function because we use it in useEffect
  const initSwiper = (swiper: SwiperCore) => {
    // @ts-ignore
    swiper.params.navigation.prevEl = prevRef.current;
    // @ts-ignore
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };

  // reinitialize swiper when windos is resized
  useEffect(() => {
    if (swiper) {
      initSwiper(swiper);
    }
  }, [swiper, windowSize]);

  return (
    <Box w="100%" position="relative">
      <Swiper
        className="mySwiper"
        loop={isDesktop}
        onSlideChange={(swiper) => {
          setIsLastSlide(swiper.isEnd);
          setIsFirstSlide(swiper.isBeginning);
        }}
        onInit={(swiper: SwiperCore) => {
          setSwiper(swiper);
          setTimeout(() => {
            initSwiper(swiper);
          });
        }}
      >
        <SwiperSlide>
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerReviewCard />
        </SwiperSlide>
      </Swiper>

      {/* navigation buttons */}

      {!isDesktop ? (
        // buttons in mobile and tablet
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
      ) : (
        // buttons on desktop screen
        <>
          <ButtonPrev ref={prevRef} />
          <ButtonNext ref={nextRef} />
        </>
      )}
    </Box>
  );
};
