import { Box } from '@chakra-ui/layout';
import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box as="footer" p={4} minH="100px" bg="teal" mt="auto">
      Footer Info
    </Box>
  );
};
