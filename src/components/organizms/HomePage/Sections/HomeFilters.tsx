import { Center, Divider, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { DividerVertical } from 'src/components/atoms/Divider';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { MobileYearSelect } from 'src/components/molecules/FilterSelects/mobile/MobileYearSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import { openAdvancedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { DEALER_CARS_CATALOG_URL } from 'src/utils/config/contants';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { SearchButton } from '../../../molecules/Buttons/SearchButton';
import { Card } from '../../../molecules/Cards/Card';
import { BrandSelect } from '../../../molecules/FilterSelects/desktop/BrandSelect';
import { ModelSelect } from '../../../molecules/FilterSelects/desktop/ModelSelect';
import { YearSelect } from '../../../molecules/FilterSelects/desktop/YearSelect';
import { MobileBrandSelect } from '../../../molecules/FilterSelects/mobile/MobileBrandSelect';
import { MobileModelSelect } from '../../../molecules/FilterSelects/mobile/MobileModelSelect';

interface SearchProps {}

export const HomeFilters: React.FC<SearchProps> = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector((state) => state.selectedCarFilters);
  const { brands } = useAppSelector((state) => state.carsReducer);

  const { isDesktop } = useDetectScreen();
  useEffect(() => {
    if (!selectedFilters.brands) {
      dispatch(getFilters());
    }
  }, []);

  return (
    <Center
      mt={['-69px', '-60px', '-45px', '-58px']}
      mb={{ base: '16', md: '20' }}
      position="relative"
      zIndex="1"
    >
      <Card
        maxW={{ sm: '550px', md: '700px', lg: '844px', xl: '82%' }}
        bg="autoBlue.400"
        p={{ base: '4', lg: '16px' }}
        mb="0"
        w={['100%', '800px', '900px']}
        minH="auto"
      >
        <Flex
          padding={['1', '1.5', null, '8px']}
          bg="#fff"
          borderRadius="lg"
          alignItems="center"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent="space-between"
        >
          {/* Brand select  */}
          {!isDesktop ? (
            <MobileBrandSelect
              w={['100%', '30%', '23%']}
              searchOnClear={false}
              onClick={() => {
                if (!brands.length) {
                  dispatch(getFilters());
                }
              }}
            />
          ) : (
            <BrandSelect
              w={['100%', '100%', '100%']}
              searchOnClear={false}
              onClick={() => {
                if (!brands.length) {
                  dispatch(getFilters());
                }
              }}
            />
          )}
          <DividerVertical
            height="30px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, '1']}
          />
          <Divider display={['block', 'none', 'none']} borderColor="gray.300" />

          {/* Model Selects  */}
          {!isDesktop ? (
            <MobileModelSelect w={['100%', '30%', '23%']} />
          ) : (
            <ModelSelect w="full" searchOnClear={false} />
          )}
          <DividerVertical
            height="30px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, '1']}
          />
          <Divider display={['block', 'none']} borderColor="gray.300" />

          {/* Year Select  */}
          {!isDesktop ? (
            <MobileYearSelect w={['100%', '30%', '23%']} />
          ) : (
            <YearSelect w={['100%', '100%', '100%']} searchOnClear={false} />
          )}
          <SearchButton
            display={['none', 'none', 'block']}
            minW="144px"
            onClick={() => {
              // since we have onSubmit function when catalog page loads
              // it is enough to just redirect
              history.push({ pathname: DEALER_CARS_CATALOG_URL });
            }}
          />
        </Flex>
        <SearchButton
          display={['block', 'block', 'none']}
          w="full"
          h={['44px', null, null, '50px', '62px']}
          mt={['4', '3']}
          onClick={() => {
            // since we have onSubmit function when catalog page loads
            // it is enough to just redirect
            history.push({ pathname: DEALER_CARS_CATALOG_URL });
          }}
        />
        <TextButton
          w="full"
          textAlign="center"
          color="white"
          pt="4"
          display={[null, null, 'none', 'none']}
          onClick={() => {
            history.push(DEALER_CARS_CATALOG_URL)
            dispatch(openAdvancedFilters());
          }}
        >
          See advanced filter
        </TextButton>
      </Card>
    </Center>
  );
};
