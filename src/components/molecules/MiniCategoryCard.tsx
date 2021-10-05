import { Box, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'assets/png/car with bg-1.png';
import React from 'react';
import { TextMain } from '../atoms/Texts/TextMain';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    <Box
      minW={['140px', '166px']}
      h={['115px', '130px']}
      bg="white"
      p="2.5"
      borderRadius="md"
      // cursor="pointer"
      cursor="grabbing"
      _active={{
        bg: "autoGrey.500"
      }}
    >
      <VStack spacing="0">
        <Image src={CarSmall} w="55px" h="55px" />
        <Heading fontSize="16px" fontWeight="400">
          Sertified Car
        </Heading>
        <TextMain opacity="50%">500 cars</TextMain>
      </VStack>
    </Box>
  );
};
