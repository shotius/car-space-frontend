// Import Swiper React components
import { IconButton } from '@chakra-ui/button';
import { AspectRatio, Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useRef, useState } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
// import styles from './styles.module.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';

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
      maxH={['192px', null, null, '160px', null, '218px']}
      onMouseEnter={() => {
        isLaptopScreen ? setButtonsVisible(true) : null;
      }}
      onMouseLeave={() => setButtonsVisible(false)}
    >
      <Swiper
        className="CarImagesSwiper"
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
          {/* <Image src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg" /> */}
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
        <IconButton
          aria-label="next slide"
          zIndex="2"
          right="0"
          position="absolute"
          ref={nextRef}
          icon={<DropdownIcon fill="white" boxSize="5" ml="5px" />}
          borderRadius="none"
          transform="rotate(-90deg)"
          bg="black"
          w={{ md: '50px', '2xl': '70px' }}
          mr={{ md: '-10px', '2xl': '-15px' }}
          borderTopRadius="100px"
          opacity=".65"
          display={buttonsVisible ? 'block' : 'none'}
          // transition="all 0.2s"
          _hover={{
            bg: 'black',
          }}
          _active={{
            bg: 'black',
            opacity: '.9',
          }}
        />
        <IconButton
          zIndex="2"
          left="0"
          display={buttonsVisible ? 'block' : 'none'}
          icon={<DropdownIcon fill="white" boxSize="5" ml="5px" />}
          borderRadius="none"
          position="absolute"
          ref={prevRef}
          bg="black"
          w={{ md: '50px', '2xl': '70px' }}
          ml={{ md: '-10px', '2xl': '-15px' }}
          aria-label="previous slide"
          transform="rotate(90deg)"
          borderTopRadius="100px"
          opacity=".65"
          _hover={{
            bg: 'black',
          }}
          _active={{
            bg: 'balck',
            opacity: '.9',
          }}
        />
      </Swiper>
    </AspectRatio>
  );
};
