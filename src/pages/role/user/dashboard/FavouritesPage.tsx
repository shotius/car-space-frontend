import { SimpleGrid, VStack } from '@chakra-ui/layout';
import { Card } from 'src/components/molecules/Cards/Card';
import { CarCardHeading } from 'src/components/molecules/Headings/CarCardHeading';
import { DamCar } from 'src/DamnCard';

interface FavouritesPageProps {}

export const FavouritesPage: React.FC<FavouritesPageProps> = ({}) => {
  return (
    <VStack pt="48px">
      <Card w="full">
        <CarCardHeading car={DamCar} />
        <SimpleGrid templateAreas="one one"></SimpleGrid>
      </Card>
    </VStack>
  );
};
