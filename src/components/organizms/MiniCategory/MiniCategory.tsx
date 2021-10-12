import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'src/components/molecules/MiniCategoryCard';
import { ScrollableDiv } from 'src/components/molecules/ScrollableDiv';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
 ;
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Mini Category" secondaryText="See all" />
      <ScrollableDiv cardCount={6}>
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
      </ScrollableDiv>
    </Box>
  );
};
