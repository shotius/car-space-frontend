import { Box, IconButton } from '@chakra-ui/react';
import { ArrowNextIcon } from 'components/atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from 'components/atoms/Icons/Arrows/ArrowPrevIcon';
import { CustomerReviewCard } from 'components/molecules/CustomerReviewCard';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React, { useRef } from 'react';
import Slider from 'react-slick';

interface CustomperReviewProps {}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      aria-label="previous slide"
      icon={<ArrowNextIcon />}
      bg="white"
      _active={{
        bg: "white"
      }}
      _focus={{
        bg: "white"
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      mr="1"
      onClick={onClick}
      aria-label="previous slide"
      icon={<ArrowPrevIcon />}
      bg="white"
      _active={{
        bg: "white"
      }}
      _focus={{
        bg: "white"
      }}
    />
  );
}

export const CustomperReview: React.FC<CustomperReviewProps> = () => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <SamplePrevArrow onClick={() => slider?.current?.slickNext()} />
        <SampleNextArrow onClick={() => slider?.current?.slickPrev()} />
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
