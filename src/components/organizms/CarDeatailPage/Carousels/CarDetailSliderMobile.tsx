import { AspectRatio, Box, Center, Image, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppSelector } from 'src/redux/app/hook';
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
  thumbs: string[];
}

export const CarDetailSliderMobile: React.FC<CarDetailSliderProps> = ({
  thumbs,
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const { fetchingThumbs, fetchingMediums } = useAppSelector(
    (state) => state.carImages
  );
  const { lotNumber } = useParams<{ lotNumber: string }>();

  const fallbackArray = Array(5).fill(0);

  return (
    <Box w="full">
      <Box borderRadius="8px">
        <Swiper
          spaceBetween={0}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {fetchingMediums[lotNumber] ? (
            <>
              {fallbackArray.map((img) => (
                <SwiperSlide key={img}>
                  <AspectRatio ratio={3 / 2} width="full">
                    <Box bg="autoGrey.400">
                      <Spinner />
                    </Box>
                  </AspectRatio>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {images.map((img) => (
                <SwiperSlide key={img}>
                  <AspectRatio ratio={3 / 2} width="full">
                    <Image src={img} />
                  </AspectRatio>
                </SwiperSlide>
              ))}
            </>
          )}
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
          {/* if fetching thubnneils falback will be shown  */}
          {fetchingThumbs[lotNumber] ? (
            <>
              {Array(5)
                .fill(0)
                .map((img) => (
                  <SwiperSlide key={img}>
                    <AspectRatio ratio={3 / 2} width="full">
                      <Box bg="autoGrey.400" borderRadius="8px">
                        <Spinner />
                      </Box>
                    </AspectRatio>
                  </SwiperSlide>
                ))}
            </>
          ) : (
            <>
              {thumbs.slice(0, thumbs.length - 1).map((thumb) => (
                <SwiperSlide key={thumb}>
                  <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
                    <Image src={thumb} borderRadius="8px" width="88px" />
                  </AspectRatio>
                </SwiperSlide>
              ))}
              {/* last all picture slide  */}
              <SwiperSlide style={{ position: 'relative' }}>
                <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
                  <Box borderRadius="8px">
                    <Image
                      src={thumbs[thumbs.length - 1]}
                      width="full"
                      h="full"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      right="0"
                      bottom="0"
                      left="0"
                      borderRadius="8px"
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
            </>
          )}
        </Swiper>
      </Box>
    </Box>
  );
};
