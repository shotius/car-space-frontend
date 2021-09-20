import {
  Button,
  Center,
  Container,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import React from 'react';


interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Center>
      <Container maxW="2xl" bg="white" px="8" py="6" mb="4">
        <InputGroup size="lg">
          <Input placeholder="Search..." />
          <InputRightElement width="6rem">
            <Button
              variant="solid"
              h="2.5rem"
              size="lg"
              colorScheme="blue"
              p="3"
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Container>
    </Center>
  );
};
