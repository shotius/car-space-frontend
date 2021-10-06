import { Image } from '@chakra-ui/image';
import { AspectRatio, Box, Flex, VStack } from '@chakra-ui/layout';
import React from 'react';
import { Card } from './Card';
import { SectionHeader } from './SectionHeader/SectionHeader';

interface DealerCardProps {}

export const DealerCard: React.FC<DealerCardProps> = () => {
  return (
    <Card
      w="full"
      // maxW={[null, '305px', '139px', '139px']}
      p="4"
      h="auto"
      m="2"
    >
      <VStack w="full" spacing="14px">
        <SectionHeader
          mainText="Shop's name"
          secondaryText="125 vehicles"
          mainFontSize="14px"
          secondaryTextOpacity="63%"
          secondaryFontSize="14px"
          mb="0"
        />
        <Flex w="full">
          <AspectRatio
            ratio={198 / 118}
            w="70%"
            mr="8px"
          >
            <Image
              src="https://images.pexels.com/photos/3786092/pexels-photo-3786092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              borderRadius="3px"
            />
          </AspectRatio>
          <Box flexBasis="30%" display="flex" flexDirection="column">
            <Box
              flexBasis="50%"
              backgroundImage="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              borderRadius="3px"
              backgroundSize="cover"
              backgroundPosition="center"
              mb="2"
            />
            <Box
              flexBasis="50%"
              backgroundImage="https://wallpapercave.com/wp/tDYC1tp.jpg"
              borderRadius="3px"
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>
          </Box>
        </Flex>
      </VStack>
    </Card>
  );
};
