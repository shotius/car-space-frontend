import { Button } from '@chakra-ui/button';
import { HStack, SimpleGrid, Stack, VStack } from '@chakra-ui/layout';
import { Collapse, useDisclosure } from '@chakra-ui/react';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { Select } from 'components/atoms/Select';
import { CarCard } from 'components/molecules/CarCard';
import { Card } from 'components/molecules/Card';
import { SearchButton } from 'components/molecules/SearchButton';
import React, { useEffect, useState } from 'react';
import { ICar } from 'redux/features/auth/types';
import { axios } from 'utils/axios';

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
        <Card bg="autoBlue.400" p="4" w="full">
          <Stack>
            <Select placeholder="Brand"></Select>
            <Select placeholder="Model"></Select>
            <Select placeholder="Year"></Select>
            <Select placeholder="Condition"></Select>
            <Collapse in={isFilterOpen}>
              <VStack>
                <Select placeholder="Type"></Select>
                <Select placeholder="Mileage"></Select>
                <Select placeholder="Engine"></Select>
                <Select placeholder="Location"></Select>
                <Select placeholder="Transmission"></Select>
                <Select placeholder="Drive"></Select>
                <Select placeholder="Fuel"></Select>
                <Select placeholder="Cylinder"></Select>
              </VStack>
            </Collapse>
            <HStack w="full" justify="space-between" alignItems="stretch">
              <SearchButton flexBasis="50%" />
              <Button flexBasis="50%" onClick={toggleFilters} display={['block', null , "none"]}>
                See more filter
              </Button>
            </HStack>
          </Stack>
        </Card>
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
      </VStack>
    </ContainerOuter>
  );
};
