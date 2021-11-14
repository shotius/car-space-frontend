// Import Swiper React components
import { AspectRatio, Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useRef, useState } from 'react';
// import styles from './styles.module.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButton } from '../../Buttons/SwiperButton';
import style from './styles.module.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

interface CarImageCarouselProps {
  images: string[];
}

export const CarImageCarousel: React.FC<CarImageCarouselProps> = ({
  images,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);
  const [isLaptopScreen] = useMediaQuery('(min-width: 1024px)');

  return (
    <AspectRatio
      ratio={[311 / 292, null, null, 231 / 143]}
      w="full"
      overflow="hidden"
      borderRadius="md"
      maxH={['192px', null, '143px']}
      onMouseEnter={() => {
        isLaptopScreen && setButtonsVisible(true);
      }}
      onMouseLeave={() => setButtonsVisible(false)}
    >
      <Swiper
        className={style.CarImagesSwiper}
        slidesPerView={1}
        spaceBetween={3}
        pagination={true}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          // console.log('prev', prevRef.current);
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box
               backgroundImage={image}
             // backgroundImage="http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX377/af1a9d83-d6ef-4a09-b539-0d9081a18090.JPG"
              backgroundSize="cover"
              backgroundPosition="center"
              w="full"
              h="full"
            />
          </SwiperSlide>
        ))} 

        {/* <SwiperSlide>
          <Box
            backgroundImage="http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX377/af1a9d83-d6ef-4a09-b539-0d9081a18090.JPG"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX377/fe8ecba7-4899-4939-8f8f-949956b606dc.JPG"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX392/9397cb64-5c25-4226-88fb-f559e394e2ad.JPG"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX392/93bd115c-22e9-4421-bb3a-202cecc64277.JPG"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
          
        </SwiperSlide>
        */}
        <SwiperButton
          isVisible={buttonsVisible}
          ref={nextRef}
          side="right"
          aria-label="next slide"
        />
        <SwiperButton
          isVisible={buttonsVisible}
          ref={prevRef}
          side="left"
          aria-label="previous slide"
        />
      </Swiper>
    </AspectRatio>
  );
};
