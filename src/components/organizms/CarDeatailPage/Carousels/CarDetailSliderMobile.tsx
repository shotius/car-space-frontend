import { AspectRatio, Box, Center, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
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

interface CarDetailSliderProps {}

export const CarDetailSliderMobile: React.FC<CarDetailSliderProps> = ({}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <Box w="full">
      <Box borderRadius="8px">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          <SwiperSlide>
            <AspectRatio ratio={3 / 2} width="full">
              <Image src="http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX392/9397cb64-5c25-4226-88fb-f559e394e2ad.JPG" />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={3 / 2} width="full">
              <Image src="https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=" />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={3 / 2} width="full">
              <Image src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={3 / 2} width="full">
              <Image src="https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ=" />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={3 / 2} width="full">
              <Image src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg" />
            </AspectRatio>
          </SwiperSlide>
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
          <SwiperSlide>
            <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
              <Image
                src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
                borderRadius="8px"
                width="88px"
              />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
              <Image
                src="https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk="
                borderRadius="8px"
                width="88px"
              />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
              <Image
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                borderRadius="8px"
                width="88px"
              />
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
              <Image
                src="https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ="
                borderRadius="8px"
                width="88px"
              />
            </AspectRatio>
          </SwiperSlide>
          {/* last all picture slide  */}
          <SwiperSlide style={{ position: 'relative' }}>
            <AspectRatio ratio={88 / 70} cursor="pointer" width="88px">
              <Box borderRadius="8px">
                <Image
                  src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
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
        </Swiper>
      </Box>
    </Box>
  );
};
