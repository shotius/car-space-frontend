import { AspectRatio, Box, Center, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { toggleCarDetailModal } from 'src/redux/features/global/gloabalSlice';
import styles from './styles.module.scss';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface Props {
  images: string[];
}

export const CarDetailSlider: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const dispatch = useAppDispatch();

  return (
    <Box w="full">
      <Box borderRadius="8px" overflow="hidden">
        <Swiper
          spaceBetween={4}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <AspectRatio ratio={579 / 364} width="579px">
                <Image
                  src={img}
                  borderRadius="8px"
                  onClick={() => dispatch(toggleCarDetailModal())}
                  cursor="pointer"
                />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box pt="4">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          className={styles.thumbsSliderDesktop}
        >
          {images.slice(0, 4).map((thumb) => (
            <SwiperSlide key={thumb}>
              <AspectRatio ratio={103 / 70} cursor="pointer" width="103px">
                <Image src={thumb} borderRadius="8px" width="103px" />
              </AspectRatio>
            </SwiperSlide>
          ))}
          {/* last all picture slide  */}
          <SwiperSlide>
            <AspectRatio
              ratio={103 / 70}
              cursor="pointer"
              width="103px"
              onClick={() => dispatch(toggleCarDetailModal())}
            >
              <Box borderRadius="8px" h="full" w="full">
                <Image src={images[images.length - 1]} width="full" h="full" />
                <Box
                  position="absolute"
                  right="0"
                  top="0"
                  bottom="0"
                  left="0"
                  cursor="pointer"
                  background="rgba(0, 0, 0,0.5)"
                  zIndex="1"
                >
                  <Center h="full">
                    <TextRegular fontSize="18px" color="white" opacity="1">
                      {images.length > 5 ? `+${images.length - 5}` : 'See all'}
                    </TextRegular>
                  </Center>
                </Box>
              </Box>
            </AspectRatio>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
