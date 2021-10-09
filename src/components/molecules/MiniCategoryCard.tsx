import { Center, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'src/assets/png/car with bg-1.png';
import React from 'react';
import { TextMain } from '../atoms/Texts/TextMain';
import { Card } from './Card';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    // w={["55px", null, null, '154px', '260px']}
    <Card>
      <Center h="100%">
        <VStack spacing="0">
          <Image src={CarSmall} w="55px" h="55px" />
          <Heading fontSize="16px" fontWeight="400">
            Sertified Car
          </Heading>
          <TextMain opacity="50%">500 cars</TextMain>
        </VStack>
      </Center>
    </Card>
  );
};
