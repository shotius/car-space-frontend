import { Flex, FlexProps, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TextMain } from 'components/atoms/Texts/TextMain';

interface SectionHeaderProps {
  mainText: string;
  secondaryText?: string;
  mainFontSize?: string[] | string;
  secondaryFontSize?: string;
  secondaryTextOpacity?: string;
  mb?: string[] | string;
}

export const SectionHeader: React.FC<SectionHeaderProps & FlexProps> = ({
  mainText,
  secondaryText,
  mainFontSize = '20px',
  secondaryFontSize = '16px',
  secondaryTextOpacity = '50%',
  mb = "24px",
  ...rest
}) => {
  return (
    <Flex justifyContent="space-between" mb={mb} {...rest} w="full">
      <Heading fontSize={mainFontSize} lineHeight="26px" fontWeight="400">
        {mainText}
      </Heading>
      <TextMain opacity={secondaryTextOpacity} fontSize={secondaryFontSize} color="#000">
        <Link to="#">{secondaryText}</Link>
      </TextMain>
    </Flex>
  );
};
