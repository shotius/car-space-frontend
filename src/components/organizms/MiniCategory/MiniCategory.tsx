import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'src/components/molecules/MiniCategoryCard';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import Slider from 'react-slick';
import { breakpoint } from './breakpoints';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  const settings = {
     // speed: 500,
    // slidesToScroll: 3,
    touchThreshold: 800,
    // infinite: false,
    slidesToShow: 8,
    speed: 500,
    infinite: false,
    // slidesToShow: 4,
    responsive: breakpoint,
    swipeToSlide: true,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  return (
    <Box w="full">
      <SectionHeader mainText="Mini Category" secondaryText="See all" />
      <Box>
        <Slider {...settings}>
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
        </Slider>
      </Box>
    </Box>
  );
};
