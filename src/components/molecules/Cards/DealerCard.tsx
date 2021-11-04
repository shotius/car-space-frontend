import { Image } from '@chakra-ui/image';
import { AspectRatio, Box, Flex, VStack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface DealerCardProps {}

export const DealerCard: React.FC<DealerCardProps> = () => {
  return (
    <Card
      w="full"
      p="4"
      h="auto"
      cursor="pointer"
      _hover={{
        boxShadow: '0 0.7rem 1.5rem rgba(0, 0, 0, 0.082)',
        transform: 'translateY(-2px)',
        transition: 'all .2s',
      }}
    >
      <VStack w="full" spacing={{ base: '14px', 'lg': '16px' }}>
        <HStack w="full" justify="space-between">
          <TextRegular>Shop's name</TextRegular>
          <TextRegular opacity=".5">125 vehicles</TextRegular>
        </HStack>
        <Flex w="full">
          <AspectRatio
            ratio={198 / 118}
            w="70%"
            mr={['8px', '4px', null, null, '6px', '8px']}
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
              mb={['8px', '4px', null, null, '6px', '8px']}
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
