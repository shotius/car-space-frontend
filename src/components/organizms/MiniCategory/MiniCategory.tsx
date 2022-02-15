import { Box } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { MiniCategoryCard } from 'src/components/molecules/Cards/MiniCategoryCard';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { useMiniCategory } from 'src/utils/hooks/useMiniCategory';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  const {
    suvs,
    hachbackes,
    redirectCarType,
    sedans,
    four_k,
    fourToSix_k,
    sixToTen_k,
    icon,
    mostDemands,
    fourKRedirect,
    fourToSixKRedirect,
    mostDemandRedict,
    sixToTenRedirect,
  } = useMiniCategory();

  return (
    <Box w="full">
      <ContainerOuter pl="4">
        <SectionHeader mainText="Mini Category" />
      </ContainerOuter>
      <ContainerOuter p="0">
        <ScrollableDiv cardCount={7} pl="4" pr="4">
          <MiniCategoryCard
            onClick={() => redirectCarType(['SUV'])}
            categoryTitle="SUV"
            carCount={suvs}
          />
          <MiniCategoryCard
            onClick={() => redirectCarType(['HACHBACK'])}
            categoryTitle="Hachback"
            carCount={hachbackes}
          />
          <MiniCategoryCard
            onClick={() => redirectCarType(['SEDAN'])}
            categoryTitle="Sedan"
            carCount={sedans}
          />
          <MiniCategoryCard
            carCount={four_k}
            onClick={() => fourKRedirect()}
            categoryTitle={`${icon}4k`}
            mr="1px"
          />
          <MiniCategoryCard
            carCount={fourToSix_k}
            categoryTitle={`${icon}4-6k`}
            mr="1px"
            onClick={() => fourToSixKRedirect()}
          />
          <MiniCategoryCard
            carCount={sixToTen_k}
            onClick={() => sixToTenRedirect()}
            categoryTitle={`${icon}6-10k`}
            mr="1px"
          />
          <MiniCategoryCard
            carCount={mostDemands}
            onClick={() => mostDemandRedict()}
            categoryTitle="Most demand"
          />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
