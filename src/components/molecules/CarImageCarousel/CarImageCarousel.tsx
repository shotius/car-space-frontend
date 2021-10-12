// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';
// import styles from './styles.module.css';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';

// install Swiper modules
SwiperCore.use([Navigation]);

interface CarImageCarouselProps {}

export const CarImageCarousel: React.FC<CarImageCarouselProps> = () => {
  return (
    <>
      <Swiper navigation={true} className="CarImagesSwiper">
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
          <Image src="https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
        </SwiperSlide>
        <SwiperSlide>
        <Box
            backgroundImage="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            backgroundSize="cover"
            backgroundPosition="center"
            w="full"
            h="full"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Box
            backgroundImage="https://www.motortrend.com/uploads/sites/5/2020/10/2021-SSC-Tuatara-Reruns-Record-Car-Front-3.4.jpg"
            backgroundSize="cover"
            backgroundPosition="center"
            w="full"
            h="full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
