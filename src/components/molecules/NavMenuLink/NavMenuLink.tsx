import { Divider, Flex } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowIcon } from 'src/components/atoms/Icons/ArrowIcon';
import { Text } from 'src/components/atoms/Text';

interface NavMenuLinkProps {
  heading: string;
  to: string;
  onClick?: () => void;
}

export const NavMenuLink: React.FC<NavMenuLinkProps> = ({
  heading,
  to,
  onClick,
}) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="35px"
        py="2"
        onClick={onClick}
      >
        <Text fontSize="16px" m="0">
          <Link to={to}>{heading}</Link>
        </Text>
        <ArrowIcon />
      </Flex>
      <Divider />
    </>
  );
};
