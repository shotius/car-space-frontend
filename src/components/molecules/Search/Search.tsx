import { Center, Container, Divider, Flex, Select } from '@chakra-ui/react';
import { DividerVertical } from 'components/atoms/Divider';
import React from 'react';
import { SearchButton } from '../SearchButton';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Center
      mt={['-69px', '-80px', '-65px', '-80px']}
      mb={{base: "16", md: "20"}}
      position="relative"
      zIndex="1"
      
    >
      <Container
        maxW={{ sm: '550px', md: '600px', lg: '1361px' }}
        bg="autoBlue.400"
        p={['4', '6', '7', '10']}
        mb="4"
        borderRadius="lg"
        w={['100%', '90%', "100%"]}
      >
        <Flex
          padding={['1', '1.5', null, '2']}
          bg="#fff"
          borderRadius="lg"
          alignItems="center"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent="space-between"
        >
          <Select placeholder="Brand" border="none" color="autoGrey.900" w={["100%", "30%", "100%"]}>
            <option value="value">brand</option>
            <option value="value">brand</option>
            <option value="value">brand</option>
          </Select>
          <DividerVertical
            height="40px"
            display={['none', 'block']}
            borderColor="gray.300"
          />
          <Divider display={['block', 'none', 'none']} borderColor="gray.300" />

          <Select placeholder="Model" border="none" color="autoGrey.900" w={["100%", "30%", "100%"]}>
            <option value="value">model</option>
            <option value="value">model</option>
            <option value="value">model</option>
          </Select>
          <DividerVertical
            height="40px"
            display={['none', 'block']}
            borderColor="gray.300"
          />
          <Divider display={['block', 'none']} borderColor="gray.300" />

          <Select placeholder="Year" border="none" color="autoGrey.900" w={["100%", "30%", "100%"]}>
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton
            display={['none', 'none', 'block']}
            flexBasis={['100%']}
            ml="2"
          />
        </Flex>
        <SearchButton
          display={['block', 'block', 'none']}
          w="full"
          mt={['2', '3']}
        />
      </Container>
    </Center>
  );
};
