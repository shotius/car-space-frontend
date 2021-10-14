import { Flex, SimpleGrid, VStack } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarCard } from 'src/components/molecules/CarCard';
import { Card } from 'src/components/molecules/Card';
import { ICar } from 'src/redux/features/auth/types';
import { axios } from 'src/utils/axios';
import { CatalogFilter } from '../CatalogFilter';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
  const { isOpen: isFilterOpen, onToggle: toggleFilters } = useDisclosure();
  const [cars, setCars] = useState<ICar[] | []>([]);

  useEffect(() => {
    axios.get('/api/cars').then(({ data }) => {
      setCars(data.cars);
    });
    return () => {
      setCars([]);
    };
  }, []);

  return (
    <ContainerOuter pt={['4', '6', null, '8', '16']}>
      <VStack w="full" spacing={['66px']}>
        <Card
          bg={{base: "transparent", md: "autoBlue.400"}}
          p={{md: "4", xl: "16px", "2xl": "24px"}}
          w="full"
          minH="auto"
        >
          <CatalogFilter isOpen={isFilterOpen} onToggle={toggleFilters} />
        </Card>
        <SimpleGrid
          gridTemplateColumns={[
            '1fr',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            null, 
            'repeat(4, 1fr)',
          ]}
          spacing="4"
          w="full"
        >
          {cars.map((car: ICar, i) => (
            <Flex justify="center">
              <CarCard car={car} key={i} />
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </ContainerOuter>
  );
};
