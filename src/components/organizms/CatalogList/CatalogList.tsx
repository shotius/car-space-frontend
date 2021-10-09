import { SimpleGrid, VStack } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { CarCard } from 'components/molecules/CarCard';
import { Card } from 'components/molecules/Card';
import React, { useEffect, useState } from 'react';
import { ICar } from 'redux/features/auth/types';
import { axios } from 'utils/axios';
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
        <Card bg="autoBlue.400" p={['4', '6', '6', "8", '12']} w="full" minH="auto">
          <CatalogFilter isOpen={isFilterOpen} onToggle={toggleFilters} />
        </Card>
        {/* <SimpleGrid
          gridTemplateColumns={[
            '1fr',
            '1fr 1fr',
            null,
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
          ]}
          spacing="4"
        >
          {cars.map((car: ICar, i) => (
            <CarCard car={car} key={i} />
          ))}
        </SimpleGrid> */}
      </VStack>
    </ContainerOuter>
  );
};
