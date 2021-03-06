import {
  Box,
  Button,
  Center,
  CloseButton,
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { EditButton } from 'src/components/molecules/Buttons/EditButton';
import { Card } from 'src/components/molecules/Cards/Card';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useTransportationDrawer } from 'src/components/organizms/Drawers/useTransportationDrawer';
import transportaionService from 'src/services/transportation.service';
import { searchStringIn } from 'src/utils/functions/searchStringIn';
import { ITransportDataObject } from '../../../../../../server/shared_with_front/types/types-shared';

interface ChangeTransportationProps {}

interface ListProps {
  rawTransportationData: ITransportDataObject[];
}

const TransportationList: React.FC<ListProps> = ({ rawTransportationData }) => {
  const [page, setPage] = useState(1);
  const [transportationData, setTransportationData] = useState(
    rawTransportationData
  );

  const [perPage, setPerPage] = useState(10);
  const [searchWord, setSearchWord] = useState('');
  const { toggleTransportationDrawer, TransportationEditDrawer } =
    useTransportationDrawer();
  const [selectedTransportation, setSelectedTransportation] =
    useState<ITransportDataObject>();
  const toast = useToast();

  function changeHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    setSearchWord((e.target as HTMLInputElement).value);
    setPage(1);
  }

  function handlePerPageSelect(e: React.SyntheticEvent<HTMLSelectElement>) {
    setPerPage(+e.currentTarget.value);
  }

  function hanleOpenTransportationDrawer(trans: ITransportDataObject) {
    toggleTransportationDrawer();
    setSelectedTransportation(trans);
  }

  function handleDeleteTransportation(trans: ITransportDataObject) {
    const confirmation = confirm('Do you really want to delete?');
    confirmation &&
      transportaionService
        .deleteById(trans.id)
        .then(() => {
          handleRemoveTranpsportationByIdLocal(trans.id);
          toast({
            title: 'Transportation deleted successfully',
            position: 'top',
            status: 'success',
          });
        })
        .catch(() =>
          toast({
            title: 'Could not delete Transportation',
            position: 'top',
            status: 'error',
          })
        );
  }

  function handleOpenAddTransportationDrawer() {
    toggleTransportationDrawer();
    setSelectedTransportation(undefined);
  }

  function handleAddTransportationLocal(transportation: ITransportDataObject) {
    setTransportationData(transportationData.concat(transportation));
  }

  function handleUpdateTransportationByIdLocal(
    transportation: ITransportDataObject
  ) {
    setTransportationData(
      transportationData.map((trans) =>
        trans.id === transportation.id ? transportation : trans
      )
    );
  }

  function handleRemoveTranpsportationByIdLocal(id: string) {
    setTransportationData(
      transportationData.filter((trans) => trans.id !== id)
    );
  }

  function onSuccessCbAddUpdate(trans: ITransportDataObject) {
    selectedTransportation
      ? handleUpdateTransportationByIdLocal(trans)
      : handleAddTransportationLocal(trans);
  }

  const dataToShow = useMemo(() => {
    if (searchWord && transportationData.length) {
      const filteredResult = transportationData.filter(
        (data) =>
          searchStringIn(data.auction, searchWord) ||
          searchStringIn(data.city, searchWord) ||
          searchStringIn(data.zip, searchWord) ||
          searchStringIn(data.state, searchWord) ||
          searchStringIn(data.price.toString(), searchWord)
      );

      return filteredResult;
    } else {
      return transportationData;
    }
  }, [searchWord, transportationData]);

  const totalPages = Math.ceil(dataToShow.length / 10);

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  return (
    <Box minW="1000px">
      <VStack p="4" align="start">
        <HStack justify={'space-between'} w="full">
          <HStack>
            <select onChange={handlePerPageSelect}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show: {pageSize}
                </option>
              ))}
            </select>

            <TextRegular>Page: {page}</TextRegular>
          </HStack>
          <Button onClick={handleOpenAddTransportationDrawer}>
            {' '}
            + Add new Transportation
          </Button>
        </HStack>
        <HStack justify={'space-between'} w="full">
          <InputGrey
            onChange={debouncedChangeHandler}
            placeholder="Search"
            maxW="400px"
          />
          <Center>
            <Pagination
              totalPages={totalPages}
              activePage={page}
              onPageChange={(num: number) => setPage(num)}
            />
          </Center>
        </HStack>
      </VStack>
      <Table size="lg" minW={[null, null, null, '1000px']}>
        <Thead>
          <Tr>
            <Th>Auction</Th>
            <Th>City</Th>
            <Th>State</Th>
            <Th>Zip</Th>
            <Th isNumeric>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataToShow.slice(page - 1, page - 1 + perPage).map((trans) => (
            <Tr key={trans.id}>
              <Td>{trans.auction}</Td>
              <Td>{trans.city}</Td>
              <Td>{trans.state}</Td>
              <Td>{trans.zip}</Td>
              <Td isNumeric>{trans.price} $</Td>
              <Td>
                <HStack>
                  <EditButton
                    boxSize={6}
                    onClick={() => hanleOpenTransportationDrawer(trans)}
                  />
                  <CloseButton
                    onClick={() => handleDeleteTransportation(trans)}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <TransportationEditDrawer
        initTransportation={selectedTransportation}
        successCb={onSuccessCbAddUpdate}
      />
    </Box>
  );
};

const ChangeTransportation: React.FC<ChangeTransportationProps> = ({}) => {
  const [transportationData, setTransportationData] = useState<
    ITransportDataObject[]
  >([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    transportaionService
      .getTransportationData()
      .then(({ results }) => setTransportationData(results))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <ContainerOuter mt={['32px']}>
      <Center>
        <Card width="full">
          {isFetching ? (
            <p>...fetching</p>
          ) : (
            <Box overflow={'auto'} w="full">
              <TransportationList rawTransportationData={transportationData} />
            </Box>
          )}
        </Card>
      </Center>
    </ContainerOuter>
  );
};
export default ChangeTransportation;
