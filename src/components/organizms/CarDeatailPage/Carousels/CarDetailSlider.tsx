import { AspectRatio, Box, Center, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
// import './styles.css';
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
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {images.slice(0, images.length - 1).map((thumb) => (
            <SwiperSlide key={thumb}>
              <AspectRatio ratio={103 / 70} cursor="pointer" width="103px">
                <Image src={thumb} borderRadius="8px" width="103px" />
              </AspectRatio>
            </SwiperSlide>
          ))}
          {/* last all picture slide  */}
          <SwiperSlide style={{ position: 'relative' }}>
            <AspectRatio ratio={103 / 70} cursor="pointer" width="103px">
              <Box borderRadius="8px">
                <Image src={images[images.length - 1]} width="103px" />
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  bottom="0"
                  left="0"
                  cursor="pointer"
                  background="rgba(0, 0, 0,0.5)"
                  zIndex="1"
                >
                  <Center h="full">
                    <TextRegular fontSize="24px" color="white" opacity="1">
                      +6
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
