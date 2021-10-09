import { Center, Container, Divider, Flex } from '@chakra-ui/react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { Select } from 'src/components/atoms/Select';
import React from 'react';
import { SearchButton } from '../SearchButton';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Center
      mt={['-69px', '-80px', '-65px', '-80px']}
      mb={{ base: '16', md: '20' }}
      position="relative"
      zIndex="1"
    >
      <Container
        maxW={{ sm: '550px', md: '600px', lg: '844px', xl: '82%' }}
        bg="autoBlue.400"
        p={['4', '6', '7', '32px', '48px']}
        mb="0"
        borderRadius="lg"
        w={['100%', '90%', '100%']}
      >
        <Flex
          padding={['1', '1.5', null, '16px']}
          bg="#fff"
          borderRadius="lg"
          alignItems="center"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent="space-between"
        >
          <Select placeholder="Brand" w={['100%', '30%', '100%']}>
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

          <Select placeholder="Model" w={['100%', '30%', '100%']}>
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

          <Select placeholder="Year" w={['100%', '30%', '100%']}>
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton
            display={['none', 'none', 'block']}
            flexBasis={['100%', null, null, '70%', '80%']}
            ml="2"
            
          />
        </Flex>
          <SearchButton
            display={['block', 'block', 'none']}
            w="full"
            h={["44px",null, null,"50px",  "62px"]}
            mt={['2', '3']}
          />
      </Container>
    </Center>
  );
};
