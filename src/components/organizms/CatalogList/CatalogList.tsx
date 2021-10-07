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
    if (cars.length === 0) {
        console.log('axios')
        axios.get('/api/cars').then(({ data }) => {
          setCars(data.cars);
          console.log('data, in effect');
        });
    }
    return () => {
      setCars([]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search />
      {cars.map((car: ICar, i) => (
        <Box key={car._id}>
          <Text>{i}.{car.m}</Text>
          <Text>{car.lN}</Text>
          <img src={`https://${car.imgT}`} alt="car" />
        </Box>
      ))}
    </>
  );
};
