import { Box } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
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
      <ContainerOuter>
        <SectionHeader mainText="Top Brands" secondaryText="See all" />
      </ContainerOuter>
      <ContainerOuter p="0">
        <ScrollableDiv
          cardCount={7}
          pl={['4', null, null, '4']}
          pr={['4', null, null, '4']}
          w="full"
        >
          <TopBrandCard className="hoverable" icon={BmwIcon} />
          <TopBrandCard className="hoverable" icon={MercedesIcon} />
          <TopBrandCard className="hoverable" icon={VolkswagenIcon} />
          <TopBrandCard className="hoverable" icon={AudiIcon} mr="1px" />
          <TopBrandCard className="hoverable" icon={HiundayIcon} mr="1px" />
          <TopBrandCard className="hoverable" icon={ToyotaIcon} mr="1px" />
          <TopBrandCard className="hoverable" icon={HiundayIcon} />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
