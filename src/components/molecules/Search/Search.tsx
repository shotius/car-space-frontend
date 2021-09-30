import {
  Center,
  Container, Divider, Flex, Select
} from '@chakra-ui/react';
import { DividerVertical } from 'components/atoms/Divider';
import React from 'react';
import { SearchButton } from '../SearchButton';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Center mt="-60px" position="relative">
      <Container
        maxW="2xl"
        bg="blue.800"
        px="8"
        py="6"
        mb="4"
        borderRadius="15px"
      >
        <Flex size="lg" bg="white" borderRadius="md" p="2" flexWrap="wrap">
          <Select placeholder="Brand"  border="none" flexBasis={{base: "100%", md: "25%"}}>
            <option value="value">brand</option>
            <option value="value">brand</option>
            <option value="value">brand</option>
          </Select>
          <DividerVertical height="40px" display={["none", "none", "block"]} borderColor="gray.300" />
          <Divider display={['block', "block", 'none']} borderColor="gray.300"/>
          <Select placeholder="Model"  border="none" flexBasis={{ base: "100%", md: "25%"}}>
            <option value="value">model</option>
            <option value="value">model</option>
            <option value="value">model</option>
          </Select>
          <DividerVertical height="40px" display={["none", "none", "block"]} borderColor="gray.300" />
          <Divider display={['block', "block", 'none']} borderColor="gray.300"/>
          <Select placeholder="Year" border="none" flexBasis={{md: "25%"}}>
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton display={['none', 'none', 'block']}/>
        </Flex>
        <SearchButton display={['block', 'block', "none"]} w="full"         mt="2"/>
      </Container>
    </Center>
  );
};
