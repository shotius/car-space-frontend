import { Box } from '@chakra-ui/layout';
import { Text } from 'src/components/atoms/Text';
import { Search } from 'src/components/molecules/Search/Search';
import React, { useEffect, useState } from 'react';
import { ICar } from 'src/redux/features/auth/types';
import { axios } from 'src/utils/axios';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
  const [cars, setCars] = useState<ICar[] | []>([]);

  useEffect(() => {
    axios.get('/api/cars').then(({ data }) => {
      setCars(data);
    });
    return () => {
      setCars([]);
    };
  }, []);

  return (
    <>
      <Search />
      {cars.map((car: ICar) => (
        <Box key={car._id}>
          <Text>{car.m}</Text>
          <img src={`https://${car.imgT}`} alt="car" />
          <Text>{}</Text>
        </Box>
      ))}
    </>
  );
};
