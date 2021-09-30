import { Box, Center } from '@chakra-ui/layout';
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
        right: '20px',
      }}
      top={["160px", "150px","250px"]}
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
      style={{ ...style, left: '10px',  zIndex: '9' }}
      onClick={onClick}
      top={["160px", "150px","250px"]}
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
    // autoplay: true,
    // autoplaySpeed: 50000,
  };
  return (
    <Box w="full" mt={['-20px', '-10px']}>
      <Slider {...settings}>
        <Box
          bgImage="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
          bgPosition="center"
          bgRepeat="no-repeat"
          objectFit="cover"
          h={['273px', '300px', '470px']}
          zIndex="1"
          w="full"
          borderRadius={['18px', '50px', '60px','67px']}
        ></Box>
        <Box
          h={['273px', '300px', '470px']}
          // bgImage="https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg"
          // bgPosition="center"
          // bgRepeat="no-repeat"
          // objectFit="cover"
          borderRadius={['18px', '30px', '67px']}
          zIndex="1"
        >
          <Center h="full">
            <Image
              // src="https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg"
              src="https://www.gannett-cdn.com/media/2019/04/25/USATODAY/usatsports/247WallSt.com-247WS-543507-ms.jpg?crop=1365,768,x0,y0&width=1365&height=768&format=pjpg&auto=webp"
              // src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-bugatti-chiron-is-shown-to-the-goodwood-festival-of-news-photo-1600106522.jpg?crop=0.641xw:1.00xh;0.127xw,0&resize=640:*"
              alt="orange car"
              w="100%"
              borderRadius={['18px', '50px', '60px','67px']}
              h="full"
            />
          </Center>
        </Box>
      </Slider>
    </Box>
  );
};
