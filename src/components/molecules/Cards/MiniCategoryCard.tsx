import { Center, Heading, Image, VStack } from '@chakra-ui/react';
import CarSmall from 'src/assets/png/car with bg-1.png';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { Card } from './Card';

interface MiniCategoryCardProps {}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = () => {
  return (
    <Card
      className="hoverable"
      w={['137px', null, null, '143px']}
      h={['130px', null, null, '132px']}
    >
      <Center h="full">
        <VStack spacing='0'>
          <Image
          cursor="pointer"
            src={CarSmall}
            w={['55px', null, null, '52px']}
            h={['55px', null, null, '52px']}
          />
          <VStack spacing="0" pt="2">
            <Heading fontSize="16px" fontWeight="400" cursor="pointer">
              Sertified Car
            </Heading>
            <TextSecondary opacity="50%">500 cars</TextSecondary>
          </VStack>
        </VStack>
      </Center>
    </Card>
  );
};
