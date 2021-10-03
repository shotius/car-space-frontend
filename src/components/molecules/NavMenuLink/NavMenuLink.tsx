import { Flex } from '@chakra-ui/layout';
import { GTArrow } from 'components/atoms/Icons/GTArrow';
import { TextMain } from 'components/atoms/Texts/TextMain';
import React from 'react';
import { Link } from 'react-router-dom';

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
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px="35px"
      py="2"
      onClick={onClick}
      w="full"
    >
      <TextMain opacity="100%" color="black">
        <Link to={to}>{heading}</Link>
      </TextMain>
      <GTArrow />
    </Flex>
  );
};
