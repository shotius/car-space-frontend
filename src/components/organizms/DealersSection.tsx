import { Box, SimpleGrid } from '@chakra-ui/layout';
import { DealerCard } from 'src/components/molecules/DealerCard';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import React from 'react';

interface DealersSectionProps {}

export const DealersSection: React.FC<DealersSectionProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Dealers" mainFontSize={["20px","18px"]}/>
      <SimpleGrid spacing="4" gridTemplateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
        <DealerCard />
        <DealerCard />
        <DealerCard />
        <DealerCard />
      </SimpleGrid>
    </Box>
  );
};
