import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'src/components/molecules/Cards/MiniCategoryCard';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';

import './styles.css';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { useAppDispatch } from 'src/redux/app/hook';
import { selectTypes } from 'src/redux/features/auth/selectedCarFilterSlice';
import { useHistory } from 'react-router-dom';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <Box w="full">
      <ContainerOuter pl="4">
        <SectionHeader mainText="Mini Category" />
      </ContainerOuter>
      <ContainerOuter p="0">
        <ScrollableDiv cardCount={7} pl="4" pr="4">
          <MiniCategoryCard
            onClick={() => {
              dispatch(selectTypes(['SUV']));
              history.push('/catalog');
            }}
            categoryTitle="SUV"
          />
          <MiniCategoryCard
            onClick={() => {
              dispatch(selectTypes(['HACHBACK']));
              history.push('/catalog');
            }}
            categoryTitle="Hachback"
          />
          <MiniCategoryCard
            onClick={() => {
              dispatch(selectTypes(['SEDAN ']));
              history.push('/catalog');
            }}
            categoryTitle="Sedan"
          />
          <MiniCategoryCard categoryTitle="$4k" mr="1px" />
          <MiniCategoryCard categoryTitle="$4-6k" mr="1px" />
          <MiniCategoryCard categoryTitle="$6-10k" mr="1px" />
          <MiniCategoryCard categoryTitle="Most demand" />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
