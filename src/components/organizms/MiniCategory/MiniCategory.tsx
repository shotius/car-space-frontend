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
    sedans,
    four_k,
    fourToSix_k,
    sixToTen_k,
    icon,
    mostDemands,
    redirectInPriceRange,
    redirectCarType,
    mostDemandRedict,
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
            onClick={() => redirectInPriceRange({ to: 4000 })}
            categoryTitle={`${icon}4k`}
            mr="1px"
          />
          <MiniCategoryCard
            mr="1px"
            carCount={fourToSix_k}
            categoryTitle={`${icon}4-6k`}
            onClick={() => redirectInPriceRange({ to: 6000, from: 4000 })}
          />
          <MiniCategoryCard
            mr="1px"
            carCount={sixToTen_k}
            categoryTitle={`${icon}6-10k`}
            onClick={() => redirectInPriceRange({ from: 6000, to: 10000 })}
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
