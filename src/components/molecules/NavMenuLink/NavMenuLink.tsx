import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { GTArrow } from 'components/atoms/Icons/GTArrow';
import { TextMain } from 'components/atoms/Texts/TextMain';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface NavMenuLinkProps {
  heading: string;
  to: string;
  onClick: () => void;
}

export const NavMenuLink: React.FC<NavMenuLinkProps> = ({
  heading,
  to,
  onClick,
}) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(to)
    onClick()
  }
  return (
    <Button onClick={handleClick} w="full" bg="white" p='0'>
      <Flex justifyContent="space-between" alignItems="center" px="35px" py="2" w="full">
        <TextMain opacity="100%" color="black" fontWeight="light">
          {heading}
        </TextMain>
        <GTArrow />
      </Flex>
    </Button>
  );
};
