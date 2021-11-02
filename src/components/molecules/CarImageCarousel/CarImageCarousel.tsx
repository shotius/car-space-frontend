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
import { SwiperButton } from '../Buttons/SwiperButton';
import style from  './styles.module.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

interface CarImageCarouselProps {}

export const CarImageCarousel: React.FC<CarImageCarouselProps> = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);
  const [isLaptopScreen] = useMediaQuery('(min-width: 1024px)');

  return (
    <AspectRatio
      ratio={311 / 292}
      w="full"
      overflow="hidden"
      borderRadius="md"
      maxH={['192px', null, null, '160px', '190px', '218px']}
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
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <Box
            backgroundImage="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
            backgroundSize="cover"
            backgroundPosition="center"
            w="full"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk="
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ="
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            backgroundImage="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="full"
          />
        </SwiperSlide>
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
