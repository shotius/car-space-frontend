import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'src/components/molecules/Cards/MiniCategoryCard';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';

import './styles.css';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  return (
    <Box w="full">
      <ContainerOuter pl="4">
        <SectionHeader mainText="Mini Category"/>
      </ContainerOuter>
      <ContainerOuter p="0">
        <ScrollableDiv cardCount={7} pl="4" pr="4">
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard />
          <MiniCategoryCard mr="1px" />
          <MiniCategoryCard mr="1px" />
          <MiniCategoryCard mr="1px" />
          <MiniCategoryCard />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
