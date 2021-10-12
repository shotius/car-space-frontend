import { Center, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'src/assets/png/car with bg-1.png';
import { TextMain } from '../atoms/Texts/TextMain';
import { Card } from './Card';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    
    <Card w={["55px", null, null, '154px', '260px']}>
      <Center h="100%">
        <VStack spacing={['0', null, '4']}>
          <Image
            src={CarSmall}
            w={['55px', null, null, '52px', '82px']}
            h={['55px', null, null, '52px', '82px']}
          />
          <VStack spacing="0">
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
