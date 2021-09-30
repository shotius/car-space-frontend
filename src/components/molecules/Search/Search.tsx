import {
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Select,
} from '@chakra-ui/react';
// import { Container } from 'components/atoms/Container';
import { DividerVertical } from 'components/atoms/Divider';
import React from 'react';
import { SearchButton } from '../SearchButton';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Center mt={['-35px', '-50px', '-90px']} position="relative">
      <Container
        // maxW={{sm: "600px", md: "700px"}}
        maxW={{sm: "550px", md: "1361px"}}
        bg="autoBlue.400"
        p={['16px', '30px', '35px','48px']}
        mb="4"
        borderRadius='18px'
      >
        <HStack
          size="lg"
          bg="white"
          borderRadius="8px"
          flexWrap={['wrap', 'wrap', "nowrap"]}
          p={['1', '3']}
          spacing={['0']}
        >
          <Select
            placeholder="Brand"
            border="none"
            flex="1"
          >
            <option value="value">brand</option>
            <option value="value">brand</option>
            <option value="value">brand</option>
          </Select>
          <DividerVertical
            height="40px"
            display={['none', 'none', 'block']}
            borderColor="gray.300"
          />
          {/* <Divider
            display={['block', 'block', 'none']}
            borderColor="gray.300"
          /> */}
          <Select
            placeholder="Model"
            border="none"
            flex="1"
          >
            <option value="value">model</option>
            <option value="value">model</option>
            <option value="value">model</option>
          </Select>
          <DividerVertical
            height="40px"
            display={['none', 'none', 'block']}
            borderColor="gray.300"
          />
          {/* <Divider
            display={['block', 'block', 'none']}
            borderColor="gray.300"
          /> */}
          <Select placeholder="Year" border="none" flexBasis={{ sm: '26%' }}>
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton display={['none', 'none', 'block']} />
        </HStack>
        <SearchButton
          display={['block', 'block', 'none']}
          w="full"
          mt={['2', '3']}
        />
      </Container>
    </Center>
  );
};
