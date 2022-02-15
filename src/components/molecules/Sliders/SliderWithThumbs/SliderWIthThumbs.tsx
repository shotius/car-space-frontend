import { AspectRatio, Box, Center, Image } from '@chakra-ui/react';
import { useRef, useState } from 'react';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationButton } from './NavigationButton';
import styles from './styles.module.scss';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface Props {
  images: string[];
}

export const SliderWIthThumbs: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Box w="full">
      <NavigationButton ref={prevRef} aria-label="previous photo" role="prev" />
      <NavigationButton ref={nextRef} aria-label="previous photo" role="next" />
      <Center h="100vh" w="70%" maxW="950px" margin="auto">
        <Box w="full">
          <Box borderRadius="8px" overflow="hidden">
            <Swiper
              spaceBetween={4}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {images.map((img) => (
                <SwiperSlide key={img}>
                  <AspectRatio ratio={5/3} width="full">
                    <Image src={img} borderRadius="8px" />
                  </AspectRatio>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box pt="4">
            <Swiper
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              spaceBetween={10}
              freeMode={true}
              watchSlidesProgress={true}
              slidesPerView={7}
              className={styles['thumb-slider']}
            >
              {images.map((thumb) => (
                <SwiperSlide key={thumb}>
                  <AspectRatio ratio={103 / 70} cursor="pointer" minW="103px">
                    <Image src={thumb} borderRadius="8px" width="103px" />
                  </AspectRatio>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
