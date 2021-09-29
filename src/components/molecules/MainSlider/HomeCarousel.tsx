import Slider from 'react-slick';
import './styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AspectRatio, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { Slide1 } from './Slides/Slide1';
import { SlideWrap } from '../SlideWrap';
import { Slide2 } from './Slides/Slide2';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", position: "absolute", bottom: "100px", right: "100px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "10px", zIndex: "9", width: "40px", height: "40px", backgroundColor: "white"  }}
      onClick={onClick}
    />
  );
}


export const HomeCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Box w="full" h="md" bg="teal">
      <Slider {...settings}>
        {/* <SlideWrap height="400px" Slide={Slide2}/> */}
        <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
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
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image
            src="https://images.unsplash.com/photo-1592853285454-34691b7b74c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZSUyMG9mJTIwdGhlJTIwZGF5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
      </Slider>
    </Box>
  );
};
