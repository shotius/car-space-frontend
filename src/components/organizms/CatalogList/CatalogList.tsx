import { Box } from '@chakra-ui/layout';
import { Text } from 'components/atoms/Text';
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
      console.log(data.cars)
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
