import { Box, IconButton } from '@chakra-ui/react';
import { ArrowNextIcon } from 'src/components/atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from 'src/components/atoms/Icons/Arrows/ArrowPrevIcon';
import { CustomerReviewCard } from 'src/components/molecules/CustomerReviewCard';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import  { useRef, useState } from 'react';
import Slider from 'react-slick';

interface CustomperReviewProps {}

function SampleNextArrow(props) {
  const { onClick, visibility } = props;
  return (
    <IconButton
      onClick={onClick}
      aria-label="previous slide"
      icon={<ArrowNextIcon />}
      visibility={visibility}
      bg="white"
      _active={{
        bg: 'white',
      }}
      _focus={{
        bg: 'white',
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick, visibility } = props;
  return (
    <IconButton
      mr="1"
      onClick={onClick}
      aria-label="previous slide"
      icon={<ArrowPrevIcon />}
      // bg="white"
      // colorScheme="red"
      visibility={visibility}
      // color="red"
      _active={{
        bg: 'white',
      }}
      _focus={{
        bg: 'white',
      }}
    />
  );
}

export const CustomperReview: React.FC<CustomperReviewProps> = () => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const slider = useRef<Slider | null>(null);

  const beforeChange = (prev: number, next: number) => {
    setShowPrevArrow(next > 0);
    setShowNextArrow(next < 3);
  };

  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    // fade: true,
    beforeChange,
  };

  return (
    <Box w="full" position="relative">
      <SectionHeader mainText="Customer review" />

      <Box
        position="absolute"
        right="10px"
        zIndex="1"
        top="65px"
        display={['block', 'none']}
      >
        <SamplePrevArrow
          onClick={() => slider?.current?.slickPrev()}
          visibility={showPrevArrow ? 'visible' : 'hidden'}
        />
        <SampleNextArrow
          onClick={() => slider?.current?.slickNext()}
          visibility={showNextArrow ? 'visible' : 'hidden'}
        />
      </Box>

      <Slider {...settings} ref={slider}>
        <CustomerReviewCard />
        <CustomerReviewCard />
        <CustomerReviewCard />
        <CustomerReviewCard />
      </Slider>
    </Box>
  );
};
