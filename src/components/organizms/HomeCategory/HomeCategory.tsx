import { Box } from '@chakra-ui/react';
import { CarCard } from 'components/molecules/CarCard';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import Slider from 'react-slick';
import { breakpoints } from './breakpoints';
import './styles.css'

interface HomeCategoryProps {}

export const HomeCategory: React.FC<HomeCategoryProps> = () => {
  const settings = {
    // speed: 500,
    // slidesToScroll: 2,
    touchThreshold: 1000,
    responsive: breakpoints,
    // infinite: false,
    // slidesToShow: 2.1,
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  return (
    <Box w="full">
      <SectionHeader mainText="Category" secondaryText="See all" />
      <Box>
        <Slider {...settings}>
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </Slider>
      </Box>
    </Box>
  );
};
