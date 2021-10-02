import { Box, Stack, StackDivider } from '@chakra-ui/react';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';

interface CustomperReviewProps {}

export const CustomperReview: React.FC<CustomperReviewProps> = () => {
  return (
    <Box bg="yellow" w='full'>
      <SectionHeader mainText="Customer review"/>
      <Stack divider={<StackDivider />}>
          <Box>123</Box>
          <Box>123</Box>
          <Box>123</Box>
          <Box>123</Box>
      </Stack>
    </Box>
  );
};
