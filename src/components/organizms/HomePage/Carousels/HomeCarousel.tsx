// Import Swiper React components
import { AspectRatio, Box, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { ButtonNext } from 'src/components/molecules/CarouselNavigations/Deskop/ButtonNext';
import { ButtonPrev } from 'src/components/molecules/CarouselNavigations/Deskop/ButtonPrev';
import useWindowSize from 'src/utils/hooks/useWindowSize';
// import Swiper core and required modules
import SwiperCore, { Navigation, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, EffectFade]);

export const HomeCarousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const windowWidth = useWindowSize();

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

  useEffect(() => {
    if (swiper) {
      initSwiper(swiper);
    }
  }, [windowWidth]);

  return (
    <Box
      position="relative"
      borderRadius={[null, null, null, '28px']}
      borderBottomRadius={['3%', '24px']}
      overflow="hidden"
    >
      <Swiper
        className="mySwiper"
        loop={true}
        effect="fade"
        speed={800}
        onInit={(swiper) => {
          setSwiper(swiper);
          setTimeout(() => {
            initSwiper(swiper);
          });
        }}
      >
        <SwiperSlide>
          <AspectRatio ratio={5 / 3} h={['279px', null, '360px']}>
            <Image src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide>
          <AspectRatio ratio={5 / 3} h={['279px', null, "360px"]}>
            <Image src="https://images.unsplash.com/photo-1560253787-9c3babc1fab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide>
          <AspectRatio ratio={5 / 3} h={['279px', null, '360px']}>
            <Image src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </AspectRatio>
        </SwiperSlide>
      </Swiper>

      {/*  Navigation  */}
      <ButtonPrev
        ref={prevRef}
        bg="#E8E8E8"
        opacity="0.7"
        left={["20px", null, null, '30px']}
        w={['40px', '45px', '56px']}
        h={['40px', '45px', '56px']}
      />
      <ButtonNext
        ref={nextRef}
        bg="#E8E8E8"
        opacity="0.7"
        right={["0px", null, null, '10px']}
        w={['40px', '45px', '56px']}
        h={['40px', '45px', '56px']}
      />
    </Box>
  );
};
