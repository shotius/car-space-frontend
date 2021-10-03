import { Divider, Flex } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowIcon } from 'components/atoms/Icons/ArrowIcon';
import { Text } from 'components/atoms/Text';
import { TextMain } from 'components/atoms/Texts/TextMain';

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
      <ArrowIcon />
    </Flex>
  );
};
