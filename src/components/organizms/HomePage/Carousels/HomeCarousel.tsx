// Import Swiper React components
import { AspectRatio, Box, Center, Image, Spinner } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { ButtonNext } from 'src/components/molecules/CarouselNavigations/Deskop/ButtonNext';
import { ButtonPrev } from 'src/components/molecules/CarouselNavigations/Deskop/ButtonPrev';
import { useAppSelector } from 'src/redux/app/hook';
import useWindowSize from 'src/utils/hooks/useWindowSize';
// import Swiper core and required modules
import SwiperCore, { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([EffectFade]);

export const HomeCarousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const windowWidth = useWindowSize();
  const isDesktop = useAppSelector(
    (state) => state.globalAppState.screen.isDesktop
  );
  const banners = useAppSelector((state) => state.banners.banners);
  const fetching = useAppSelector((state) => state.banners.fetchingBanners);

  const sortedBanners = banners.length ? [...banners].sort((a, b) => a.place - b.place) : [];

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
      minH={['279px', null, '360px']}
      opacity={fetching ? '0' : '1'}
      transition="all .2s"
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
        {sortedBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <AspectRatio ratio={5 / 3} h={['279px', null, '360px']}>
              <Image src={banner.img} />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  Navigation  */}
      <ButtonPrev
        ref={prevRef}
        bg="#E8E8E8"
        opacity="0.7"
        left={['20px', null, null, '30px']}
        w={['40px', '45px', '56px']}
        h={['40px', '45px', '56px']}
        _hover={{
          opacity: isDesktop && '0.86',
        }}
        _active={{
          bg: 'white',
          transform:
            isDesktop &&
            'rotate(90deg) translateX(-50%) translateY(5px) scale(0.96)',
        }}
      />
      <ButtonNext
        ref={nextRef}
        bg="#E8E8E8"
        opacity="0.7"
        right={['0px', null, null, '10px']}
        w={['40px', '45px', '56px']}
        h={['40px', '45px', '56px']}
        _hover={{
          opacity: isDesktop && '0.86',
        }}
        _active={{
          bg: 'white',
          transform:
            isDesktop &&
            'rotate(-90deg) translateX(50%) translateY(-15px) scale(0.96)',
        }}
      />
    </Box>
  );
};
