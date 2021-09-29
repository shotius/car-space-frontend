import { Divider, Flex } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import React from 'react';

interface NavMenuLinkProps {
  heading: string;
  to: string;
  onClick?: () => void;
}

export const NavMenuLink: React.FC<NavMenuLinkProps> = ({ heading, to, onClick }) => {
  return (
    <>
      <Flex justifyContent="space-between" alignContent="center" px="4" onClick={onClick}>
        <Link to={to}>{heading}</Link>
        &gt;
      </Flex>
      <Divider />
    </>
  );
};
