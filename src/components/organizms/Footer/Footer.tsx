import { Box, Flex, Heading, VStack } from '@chakra-ui/layout';
import { Text } from 'src/components/atoms/Text';
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box as="footer" p={12} pb="40" minH="100px" bg="#e8e8e8" mt="auto">
      <Flex justifyContent="space-between" maxW="6xl" direction={['column', 'column', 'row']}>
        <VStack>
          <Heading>Logo</Heading>
          <Box>Icons</Box>
        </VStack>
        <VStack alignItems="flex-start" spacing={0} mb="6">
          <Text fontWeight="bold" mb="4">
            Services
          </Text>
          <Text>
            <Link to="/services">Services</Link>
          </Text>
          <Text>info@example.com</Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={0} mb="6">
          <Text fontWeight="bold" mb="4">
            Contact
          </Text>
          <Text>Address</Text>
          <Text>+995 12123123</Text>
          <Text>info@example.com</Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={0} mb="6">
          <Text fontWeight="bold" mb="4">
            Legal
          </Text>
          <Text>
            <Link to="/privacy">Privacy Policy</Link>
          </Text>
          <Text>
            <Link to="/terms">Terms & conditions</Link>
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};
