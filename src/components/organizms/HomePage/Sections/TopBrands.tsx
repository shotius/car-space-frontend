import { Box } from '@chakra-ui/layout';
import { AudiIcon } from 'src/components/atoms/Icons/AudiIcon';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { HiundayIcon } from 'src/components/atoms/Icons/HyundayIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { ToyotaIcon } from 'src/components/atoms/Icons/ToyotaIcon';
import { VolkswagenIcon } from 'src/components/atoms/Icons/VoltswagenIcon';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { TopBrandCard } from '../../../molecules/Cards/TopBrandCard';


interface TopBrandsProps {}

export const TopBrands: React.FC<TopBrandsProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Top Brands" secondaryText="See all" />
      <ScrollableDiv cardCount={7}>
        <TopBrandCard icon={BmwIcon} />
        <TopBrandCard icon={MercedesIcon} />
        <TopBrandCard icon={VolkswagenIcon} />
        <TopBrandCard icon={AudiIcon} />
        <TopBrandCard icon={HiundayIcon} />
        <TopBrandCard icon={ToyotaIcon} />
        <TopBrandCard icon={HiundayIcon} />
      </ScrollableDiv>
    </Box>
  );
};
