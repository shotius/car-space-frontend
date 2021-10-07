import { SimpleGrid } from '@chakra-ui/layout';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { CarCard } from 'components/molecules/CarCard';
import { Search } from 'components/molecules/Search/Search';
import React, { useEffect, useState } from 'react';
import { ICar } from 'redux/features/auth/types';
import { axios } from 'utils/axios';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
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
    <ContainerOuter>
      <Search />
      <SimpleGrid
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
      </SimpleGrid>
    </ContainerOuter>
  );
};
