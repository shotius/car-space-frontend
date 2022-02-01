import { Box } from '@chakra-ui/layout';
import { useHistory } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { FordIcon } from 'src/components/atoms/Icons/FordIcon';
import { HiundayIcon } from 'src/components/atoms/Icons/HyundayIcon';
import { LexusIcon } from 'src/components/atoms/Icons/LexusIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { ShevroletIcon } from 'src/components/atoms/Icons/ShevroletIcon';
import { ToyotaIcon } from 'src/components/atoms/Icons/ToyotaIcon';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { useAppDispatch } from 'src/redux/app/hook';
import { selectBrand } from 'src/redux/features/auth/selectedCarFilterSlice';
import { TopBrandCard } from '../../../molecules/Cards/TopBrandCard';

interface TopBrandsProps {}

export const TopBrands: React.FC<TopBrandsProps> = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const redirect = () => history.push('/catalog');

  return (
    <Box w="full">
      <ContainerOuter>
        <SectionHeader mainText="Brands" />
      </ContainerOuter>
      <ContainerOuter p="0">
        <ScrollableDiv
          cardCount={7}
          pl={['4', null, null, '4']}
          pr={['4', null, null, '4']}
          w="full"
        >
          <TopBrandCard
            onClick={() => {
              dispatch(selectBrand(['BMW']));
              redirect();
            }}
            icon={BmwIcon}
          />
          <TopBrandCard
            icon={MercedesIcon}
            onClick={() => {
              dispatch(selectBrand(['MERCEDES']));
              redirect();
            }}
          />
          <TopBrandCard
            icon={ToyotaIcon}
            mr="1px"
            onClick={() => {
              dispatch(selectBrand(['TOYOTA']));
              redirect();
            }}
          />
          <TopBrandCard
            boxSize={[36, null, 48]}
            icon={ShevroletIcon}
            onClick={() => {
              dispatch(selectBrand(['SHEVROLET']));
              redirect();
            }}
          />
          <TopBrandCard
            icon={HiundayIcon}
            mr="1px"
            onClick={() => {
              dispatch(selectBrand(['HYUNDAI']));
              redirect();
            }}
          />
          {/**/}
          <TopBrandCard
            icon={FordIcon}
            boxSize={[14, null, null, 20]}
            mr="1px"
            onClick={() => {
              dispatch(selectBrand(['FORD']));
              redirect();
            }}
          />
          <TopBrandCard
            icon={LexusIcon}
            boxSize={[16, null, 20, null, 24]}
            onClick={() => {
              dispatch(selectBrand(['LEXUS']));
              redirect();
            }}
          />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
