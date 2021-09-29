import { Divider, Flex } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import React from 'react';

interface NavMenuLinkProps {
  heading: string;
  to: string;
}

export const NavMenuLink: React.FC<NavMenuLinkProps> = ({ heading, to }) => {
  return (
    <>
      <Flex justifyContent="space-between" alignContent="center" px="4">
        <Link to={to}>{heading}</Link>
        &gt;
      </Flex>
      <Divider />
    </>
  );
};
