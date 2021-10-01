import { Box, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'assets/png/car with bg-1.png';
import { Text } from 'components/atoms/Text';
import React from 'react';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    <Box w={["140px","166px"]} h={["115px", "130px"]} bg="white" p="2.5" borderRadius="md">
      <VStack spacing="0">
        <Image src={CarSmall} w="55px" h="55px" />
        <Heading fontSize="16px" fontWeight="400">
          Sertified Car
        </Heading>
        <Text color="autoGrey.900">500 cars</Text>
      </VStack>
    </Box>
  );
};
