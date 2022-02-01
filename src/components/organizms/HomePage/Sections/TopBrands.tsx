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
import useWindowSize from 'src/utils/hooks/useWindowSize';
import { TopBrandCard } from '../../../molecules/Cards/TopBrandCard';

interface TopBrandsProps {}

export const TopBrands: React.FC<TopBrandsProps> = () => {
  const history = useHistory();

  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  let wW = windowSize?.width || 200;

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
            className="hoverable"
            onClick={() => {
              dispatch(selectBrand(['BMW']));
              redirect();
            }}
            icon={BmwIcon}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
           <TopBrandCard
            className="hoverable"
            icon={MercedesIcon}
            onClick={() => {
              dispatch(selectBrand(['MERCEDES']));
              redirect();
            }}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
          />
          <TopBrandCard
            className="hoverable"
            icon={ToyotaIcon}
            mr="1px"
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
            onClick={() => {
              dispatch(selectBrand(['TOYOTA']));
              redirect();
            }}
          />
          <TopBrandCard
            boxSize={[36, null, 48]}
            className="hoverable"
            icon={ShevroletIcon}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
            onClick={() => {
              dispatch(selectBrand(['SHEVROLET']));
              redirect();
            }}
          />
          <TopBrandCard
            className="hoverable"
            icon={HiundayIcon}
            mr="1px"
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
            onClick={() => {
              dispatch(selectBrand(['HYUNDAI']));
              redirect();
            }}
          />{/**/}
          <TopBrandCard
            className="hoverable"
            icon={FordIcon}
            boxSize={[14, null, null, 20]}
            mr="1px"
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
            onClick={() => {
              dispatch(selectBrand(['FORD']));
              redirect();
            }}
          /> 
          <TopBrandCard
            className="hoverable"
            icon={LexusIcon}
            boxSize={[16, null, 20, null, 24]}
            w={wW ? wW / 4.1 : '88px'}
            h={wW ? wW / 4.9 : '88px'}
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
