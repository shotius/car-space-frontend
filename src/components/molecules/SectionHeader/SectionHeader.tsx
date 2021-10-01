import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  mainText: string;
  secondaryText?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  mainText,
  secondaryText,
}) => {
  return (
    <Flex justifyContent="space-between" mb="24px">
      <Heading fontSize="20px" lineHeight="26px" fontWeight="400">
        {mainText}
      </Heading>
      <Text color="autoGrey.900">
        <Link to="#">{secondaryText}</Link>
      </Text>
    </Flex>
  );
};
