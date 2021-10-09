import { Box } from '@chakra-ui/react';
import { CarCard } from 'src/components/molecules/CarCard';
// import { ScrollableDiv } from 'src/components/molecules/ScrollableDiv';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import Slider from 'react-slick';
import { breakpoints } from './breakpoints';
import './styles.css'

interface HomeCategoryProps {}

export const HomeCategory: React.FC<HomeCategoryProps> = () => {
  const settings = {
    touchThreshold: 100,
    responsive: breakpoints,
    speed: 400,
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    // autoplay: true,
    // infinite: false,
    // slidesToScroll: 1,
    // autoplaySpeed: 4000,
  };

  return (
    <Box w="full">
      <SectionHeader mainText="Category" secondaryText="See all" />
      <Box>
        <Slider {...settings}>
        {/* <ScrollableDiv cardCount={8} columnsLaptop={3} columnsHD={4}> */}
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          {/* </ScrollableDiv> */}
        </Slider>
      </Box>
    </Box>
  );
};
