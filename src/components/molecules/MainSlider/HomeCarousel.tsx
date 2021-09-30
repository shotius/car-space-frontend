import {
  Box, Center
} from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './styles.css';


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <Button
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '200px',
        right: '20px',
      }}
      onClick={onClick}
    >
      Next
    </Button>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <Button
      style={{ ...style, left: '10px', top: '200px', zIndex: '9' }}
      onClick={onClick}
    >
      prev
    </Button>
  );
}

export const HomeCarousel = () => {
  const settings = {
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 50000,
  };
  return (
    <Box w="full" mt="-20px">
      <Slider {...settings}>
        <Box
          bgImage="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
          bgPosition="center"
          bgRepeat="no-repeat"
          objectFit="cover"
          h="410px"
          zIndex="1"
          w="full"
          borderRadius="50px"
        ></Box>
        <Box
          h="410px"
          // bgImage="https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg"
          // bgPosition="center"
          // bgRepeat="no-repeat"
          // objectFit="cover"
          borderRadius="50px"
          zIndex="1"
        >
          <Center h="full">
          <Image src="https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg" alt="orange car" borderRadius="50px" h="full"/>
          </Center>
        </Box>
      </Slider>
    </Box>
  );
};
