import Slider from 'react-slick';
import './styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AspectRatio, Box, Center, Container } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import { Slide1 } from './Slides/Slide1';
import { SlideWrap } from '../SlideWrap';
import { Slide2 } from './Slides/Slide2';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
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
  const { className, style, onClick } = props;
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box w="full" h="md" bg="teal.800" mt="-40px">
      <Slider {...settings}>
        {/* <SlideWrap height="400px" Slide={Slide2}/> */}
        {/* <AspectRatio maxW="400px" ratio={4 / 3}> */}
        <Box h="410px" >
          <Box
            bgImage="https://bit.ly/naruto-sage"
            bgPosition="center"
            bgRepeat="no-repeat"
            h="full"
            zIndex="1"
            w="full"
          >
            {/* <Image
              src="https://bit.ly/naruto-sage"
              alt="naruto"
            objectFit="cover" */}
            {/* /> */}
          </Box>
        </Box>
        {/* </AspectRatio> */}
        {/* <SlideWrap height="400px">
          <Slide2 />
        </SlideWrap> */}
        {/* <SlideWrap height="400px">
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
              alt="naruto"
              objectFit="cover"
            />
          </AspectRatio>
        </SlideWrap> */}
        {/* <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image
            src="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio> */}
        <Box h="410px" >
          <Box
            bgImage="https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp"
            bgPosition="center"
            bgRepeat="no-repeat"
            h="full"
            zIndex="1"
            // bg="white"
          >
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};
