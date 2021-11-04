import { Box } from '@chakra-ui/layout';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { TopBrandCard } from '../../../molecules/Cards/TopBrandCard';


interface TopBrandsProps {}

export const TopBrands: React.FC<TopBrandsProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Top Brands" secondaryText="See all" />
      <ScrollableDiv cardCount={7}>
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
        <TopBrandCard image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png" />
      </ScrollableDiv>
    </Box>
  );
};
