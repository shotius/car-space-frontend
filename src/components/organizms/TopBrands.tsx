import { Box } from '@chakra-ui/layout';
import { ScrollableDiv } from 'src/components/molecules/ScrollableDiv';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { TopBrandCard } from 'src/components/molecules/TopBrandCard';
import React from 'react';

interface TopBrandsProps {}

export const TopBrands: React.FC<TopBrandsProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Top Brands" secondaryText="See all" />
      <ScrollableDiv cardCount={16}>
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />

        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />

        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />

        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
        <TopBrandCard image="https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" />
      </ScrollableDiv>
    </Box>
  );
};
