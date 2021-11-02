import { Center, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'src/assets/png/car with bg-1.png';
import { TextMain } from 'src/components/atoms/Texts/TextMain';
import { Card } from './Card';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    <Card
      w={['137px', null, null, '140px']}
      h={['130px', null, null, '132px']}
    >
      <Center h="full">
        <VStack spacing='0'>
          <Image
            src={CarSmall}
            w={['55px', null, null, '52px']}
            h={['55px', null, null, '52px']}
          />
          <VStack spacing="0" pt="2">
            <Heading fontSize="16px" fontWeight="400">
              Sertified Car
            </Heading>
            <TextMain opacity="50%">500 cars</TextMain>
          </VStack>
        </VStack>
      </Center>
    </Card>
  );
};
