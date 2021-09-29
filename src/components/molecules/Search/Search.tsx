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
    <Center mt="-50px" zIndex="modal" position="relative">
      <Container maxW="2xl" bg="blue.800" px="8" py="6" mb="4">
        <InputGroup size="lg">
          <Input placeholder="Search..." bg="white"/>
          <InputRightElement width="6rem">
            <Button
              variant="solid"
              h="2.5rem"
              size="lg"
              colorScheme="orange"
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
