import { Flex, FlexProps,  Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TextMain } from 'components/atoms/Texts/TextMain';

interface SectionHeaderProps {
  mainText: string;
  secondaryText?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps & FlexProps> = ({
  mainText,
  secondaryText,
  ...rest
}) => {
  return (
    <Flex justifyContent="space-between" mb="24px" {...rest}>
      <Heading fontSize="20px" lineHeight="26px" fontWeight="400">
        {mainText}
      </Heading>
      <TextMain opacity="50%">
        <Link to="#">{secondaryText}</Link>
      </TextMain>
    </Flex>
  );
};
