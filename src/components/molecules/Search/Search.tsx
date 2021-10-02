import {
  Center,
  Container, Select,
  Stack,
  StackDivider
} from '@chakra-ui/react';
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
        mb="4"
        bg="autoBlue.400"
        p={['4', '6', '7', '10']}
        borderRadius="lg"
        w={['100%', '90%', '100%']}
        maxW={{ sm: '550px', md: '600px', lg: '1361px' }}
      >
        <Stack
          bg="#fff"
          borderRadius="lg"
          p={['1', '1.5', null, '2']}
          direction={['column', 'row']}
          divider={<StackDivider />}
        >
          <Select placeholder="Brand" border="none" color="autoGrey.900">
            <option value="value">brand</option>
            <option value="value">brand</option>
            <option value="value">brand</option>
          </Select>

          <Select placeholder="Model" border="none" color="autoGrey.900">
            <option value="value">model</option>
            <option value="value">model</option>
            <option value="value">model</option>
          </Select>

          <Select placeholder="Year" border="none" color="autoGrey.900">
            <option value="value">year</option>
            <option value="value">year</option>
            <option value="value">year</option>
          </Select>
          <SearchButton display={['none', 'block']} />
        </Stack>
        <SearchButton
          display={['block', 'none']}
          w="full"
          mt={['2', '3']}
        />
      </Container>
    </Center>
  );
};
