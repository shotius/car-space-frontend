import { Box, Center, Divider, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { DividerVertical } from 'src/components/atoms/Divider';
import { Select } from 'src/components/atoms/Selects';
import { ReactSelect } from 'src/components/atoms/Selects/ReactSelect';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import { openAdvancedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { getAlphabeticalGroups } from 'src/utils/functions/getAlphabeticalGroups';
import { SearchButton } from '../../../molecules/Buttons/SearchButton';
import { Card } from '../../../molecules/Cards/Card';

interface SearchProps {}

export const HomeFilters: React.FC<SearchProps> = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { brands } = useAppSelector((state) => state.carsReducer);

  // interface GroupedOption {
  //   readonly label: string;
  //   readonly options: string[];
  // }

  useEffect(() => {
    dispatch(getFilters());
  }, []);

  //   interface Groups {
  //     label: string;
  //     options: {
  //         value: string;
  //         label: string;
  //     }[];
  // }[]
  const groupedBrands = getAlphabeticalGroups(brands);

  // const formatGroupLabel = (data: Groups) => (
  //   <div style={{color: "#000"}}>
  //     <span style={{color: "red"}}>{data.label}</span>
  //   </div>
  // );
  return (
    <Center
      mt={['-69px', '-60px', '-45px', '-45px']}
      mb={{ base: '16', md: '20' }}
      position="relative"
      zIndex="1"
    >
      <Card
        maxW={{ sm: '550px', md: '600px', lg: '844px', xl: '82%' }}
        bg="autoBlue.400"
        p={{ base: '4', lg: '16px' }}
        mb="0"
        minH="auto"
        w={['100%', '90%', '100%']}
      >
        <Flex
          padding={['1', '1.5', null, '8px']}
          bg="#fff"
          borderRadius="lg"
          alignItems="center"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent="space-between"
        >
          <Box w="full">
            <ReactSelect placeholder="Brands" options={groupedBrands} isMulti />
          </Box>
          <DividerVertical
            height="30px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, '4']}
          />
          <Divider display={['block', 'none', 'none']} borderColor="gray.300" />

          <Select
            placeholder="Model"
            w={['100%', '30%', '100%']}
            arrowColor="#848484"
          >
            <option value="value">model</option>
            <option value="value">model</option>
            <option value="value">model</option>
          </Select>
          <DividerVertical
            height="30px"
            display={['none', 'block']}
            borderColor="gray.300"
            margin={[null, null, '4']}
          />
          <Divider display={['block', 'none']} borderColor="gray.300" />

          <Select
            placeholder="Year"
            w={['100%', '30%', '100%']}
            arrowColor="#848484"
          >
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton
            display={['none', 'none', 'block']}
            flexBasis={['100%', null, null, '70%', '80%']}
            ml={[null, null, '8px', '24px']}
            w={{ xl: '144px', '2xl': '55px' }}
            // h="60px"
          />
        </Flex>
        <SearchButton
          display={['block', 'block', 'none']}
          w="full"
          h={['44px', null, null, '50px', '62px']}
          mt={['4', '3']}
          // pl={[null, null, '4']}
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
