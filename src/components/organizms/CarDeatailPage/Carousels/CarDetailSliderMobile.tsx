import { AspectRatio, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface CarDetailSliderProps {
  images: string[];
}

export const CarDetailSliderMobile: React.FC<CarDetailSliderProps> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <Box w="full">
      <Box borderRadius="8px">
        <Swiper
          spaceBetween={0}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <AspectRatio ratio={3 / 2} width="full">
                <Image src={img} />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box pt="4" pl="4">
        <Swiper
          className={styles.mobileCarDetailThumbs}
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          breakpoints={{
            200: {
              slidesPerView: 2.2,
            },
            260: {
              slidesPerView: 2.6,
            },
            290: {
              slidesPerView: 2.8,
            },
            300: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 3.2,
            },
            340: {
              slidesPerView: 3.4,
            },
            370: {
              slidesPerView: 3.8,
            },
            400: {
              slidesPerView: 4.1,
            },
            420: {
              slidesPerView: 4.3,
            },
            445: {
              slidesPerView: 4.5,
            },
            480: {
              slidesPerView: 4.8,
            },
            500: {
              slidesPerView: 5,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
        >
          {images.map((thumb) => (
            <SwiperSlide key={thumb}>
              <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
                <Image src={thumb} borderRadius="8px" width="88px" />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
