import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'components/molecules/MiniCategoryCard';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import Slider from 'react-slick';
import { breakpoint } from './breakpoints';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {


  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    responsive: breakpoint
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
