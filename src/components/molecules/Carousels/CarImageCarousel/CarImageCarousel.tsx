// Import Swiper React components
import { AspectRatio } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/react';
import { useRef, useState } from 'react';
// import styles from './styles.module.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonNext } from './navigation/ButtonNext';
import { ButtonPrev } from './navigation/ButtonPrev';
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
      zIndex="0"
      w="full"
      borderRadius="8px"
      cursor="auto"
      maxH={['192px', null, '143px']}
      onClick={(e) => {
        if (e.stopPropagation) e.stopPropagation();
      }}
      onMouseEnter={() => {
        isLaptopScreen && setButtonsVisible(true);
      }}
      onMouseLeave={() => setButtonsVisible(false)}
    >
      <Swiper
        className={
          buttonsVisible ? style.CarImagesSwiperHover : style.CarImagesSwiper
        }
        slidesPerView={1}
        spaceBetween={3}
        pagination={true}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <AspectRatio>
              <Image src={image} fallbackSrc={'https://via.placeholder.com/150'}/>
            </AspectRatio>
          </SwiperSlide>
        ))}

        <ButtonNext
          isVisible={buttonsVisible}
          ref={nextRef}
          aria-label="next slide"
        />
        <ButtonPrev
          isVisible={buttonsVisible}
          ref={prevRef}
          aria-label="previous slide"
        />

        {/* <SwiperButton
          isVisible={buttonsVisible}
          ref={nextRef}
          side="right"
          
        /> */}
        {/* <SwiperButton
          isVisible={buttonsVisible}
          ref={prevRef}
          side="left"
          aria-label="previous slide"
        /> */}
      </Swiper>
    </AspectRatio>
  );
};
