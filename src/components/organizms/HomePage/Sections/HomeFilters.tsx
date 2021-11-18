import { Center, Divider, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { DividerVertical } from 'src/components/atoms/Divider';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { useAppDispatch } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import { openAdvancedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { SearchButton } from '../../../molecules/Buttons/SearchButton';
import { Card } from '../../../molecules/Cards/Card';
import { BrandSelect } from '../../FilterSelects/desktop/BrandSelect';
import { MobileBrandSelect } from '../../FilterSelects/mobile/MobileBrandSelect';
import { MobileLocationSelect } from '../../FilterSelects/mobile/MobileLocationSelect';
import { MobileModelSelect } from '../../FilterSelects/mobile/MobileModelSelect';

interface SearchProps {}

export const HomeFilters: React.FC<SearchProps> = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { isDesktop } = useDetectScreen();
  useEffect(() => {
    dispatch(getFilters());
  }, []);

  return (
    <Center
      mt={['-69px', '-60px', '-45px', '-45px']}
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
          {!isDesktop ? <MobileBrandSelect /> : <BrandSelect />}
          <DividerVertical
            height="30px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, '4']}
          />
          <Divider display={['block', 'none', 'none']} borderColor="gray.300" />

          {!isDesktop ? <MobileModelSelect /> : <BrandSelect />}
          <DividerVertical
            height="30px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, '4']}
          />
          <Divider display={['block', 'none']} borderColor="gray.300" />

          {!isDesktop ? <MobileLocationSelect /> : <BrandSelect />}
          <SearchButton
            display={['none', 'none', 'block']}
            flexBasis={['100%', null, null, '70%', '80%']}
            ml={[null, null, '8px', '24px']}
            minW='144px'
          />
        </Flex>
        <SearchButton
          display={['block', 'block', 'none']}
          w="full"
          h={['44px', null, null, '50px', '62px']}
          mt={['4', '3']}
        />
        <TextButton
          w="full"
          textAlign="center"
          color="white"
          pt="4"
          display={[null, null, 'none', 'none']}
          onClick={() => {
            history.push('/catalog');
            dispatch(openAdvancedFilters());
          }}
        >
          See advanced filter
        </TextButton>
      </Card>
    </Center>
  );
};
