import { Center, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'src/assets/png/car with bg-1.png';
import { TextMain } from '../atoms/Texts/TextMain';
import { Card } from './Card';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    <Card
      w={['55px', null, null, '154px', "190px", '240px']}
      h={['130px', null, null, '132px', "152px", '189px']}
    >
      <Center h="100%">
        <VStack spacing='0'>
          <Image
            src={CarSmall}
            w={['55px', null, null, '52px', '75px', '82px']}
            h={['55px', null, null, '52px', '75px', '82px']}
          />
          <VStack spacing="0" pt="2">
            <Heading fontSize={{base: "16px", "4xl": "22px"}} fontWeight="400">
              Sertified Car
            </Heading>
            <TextMain opacity="50%">500 cars</TextMain>
          </VStack>
        </VStack>
      </Center>
    </Card>
  );
};
