import { Center, CloseButton, HStack, VStack } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { EditButton } from 'src/components/molecules/Buttons/EditButton';
import { Card } from 'src/components/molecules/Cards/Card';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import transportaionService from 'src/services/transportation.service';
import { ITransportDataObject } from '../../../../../../server/shared_with_front/types/types-shared';

interface ChangeTransportationProps {}

const ChangeTransportation: React.FC<ChangeTransportationProps> = ({}) => {
  const [transportationData, setTransportationData] = useState<
    ITransportDataObject[]
  >([]);

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const [searchWord, setSearchWord] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  function changeHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    setSearchWord((e.target as HTMLInputElement).value);
  }

  function handlePerPageSelect(e: React.SyntheticEvent<HTMLSelectElement>) {
    setPerPage(+e.currentTarget.value);
  }

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  const debouncePerPageSelect = useMemo(
    () => debounce(handlePerPageSelect, 300),
    []
  );

  useEffect(() => {
    transportaionService
      .getTransportationData()
      .then(({ results }) => setTransportationData(results))
      .finally(() => setIsFetching(false));
  }, []);

  const dataToShow = useMemo(() => {
    if (searchWord && transportationData.length) {
      const filteredResult = transportationData.filter(
        (data) =>
          data.auction.toLowerCase().includes(searchWord.toLowerCase()) ||
          data.city.toLowerCase().includes(searchWord.toLowerCase())
      );
      return filteredResult;
    } else {
      return transportationData;
    }
  }, [searchWord, transportationData]);

  return (
    <ContainerOuter>
      <Center>
        <Card>
          <HStack>
            <select onChange={debouncePerPageSelect}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show: {pageSize}
                </option>
              ))}
            </select>
            <TextRegular>Page: 1</TextRegular>
          </HStack>
          <InputGrey onChange={debouncedChangeHandler} placeholder="Search" />
          <VStack w="full" spacing="0">
            {isFetching ? (
              <p>...fetching</p>
            ) : (
              <>
                {dataToShow.slice(0, 10).map((data) => (
                  <VStack
                    cursor="pointer"
                    p="4"
                    borderBottom={'1px solid #00000029'}
                    className="hoverable"
                    w="full"
                    align={'start'}
                    position="relative"
                  >
                    <HStack pos="absolute" right="14px">
                      <EditButton boxSize={6} />
                      <CloseButton />
                    </HStack>
                    <TextRegular>
                      <b>Auction:</b> {data.auction}
                    </TextRegular>

                    <TextRegular>
                      <b>Citi:</b> {data.city}
                    </TextRegular>

                    <TextRegular>
                      <b>State:</b> {data.state}
                    </TextRegular>

                    <TextRegular>
                      <b>Price:</b> {data.price}
                    </TextRegular>

                    <TextRegular>
                      <b>Zip:</b> {data.zip}
                    </TextRegular>
                  </VStack>
                ))}
              </>
            )}
          </VStack>
        </Card>
      </Center>
    </ContainerOuter>
  );
};
export default ChangeTransportation;
