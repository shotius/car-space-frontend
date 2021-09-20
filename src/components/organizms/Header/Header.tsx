import { Flex, HStack } from '@chakra-ui/layout';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex bg={'tan'} p={4}>
      Logo
      <HStack ml="auto">
        <Link to="/home">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/login">login</Link>
      </HStack>
    </Flex>
  );
};
