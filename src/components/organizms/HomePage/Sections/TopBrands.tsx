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
import useWindowSize from 'src/utils/hooks/useWindowSize';
import { TopBrandCard } from '../../../molecules/Cards/TopBrandCard';

interface TopBrandsProps {}

export const TopBrands: React.FC<TopBrandsProps> = () => {
  const windowSize = useWindowSize();

  let wW = windowSize?.width || 200;

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
          <TopBrandCard
            className="hoverable"
            icon={BmwIcon}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={MercedesIcon}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={VolkswagenIcon}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={AudiIcon}
            mr="1px"
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={HiundayIcon}
            mr="1px"
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={ToyotaIcon}
            mr="1px"
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={HiundayIcon}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
