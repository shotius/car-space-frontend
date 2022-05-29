import {
  Center,
  CloseButton,
  HStack,
  InputGroup,
  InputProps,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { EditButton } from 'src/components/molecules/Buttons/EditButton';
import { Card } from 'src/components/molecules/Cards/Card';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import transportaionService from 'src/services/transportation.service';
import { ITransportDataObject } from '../../../../../../server/shared_with_front/types/types-shared';

interface ChangeTransportationProps {}

interface InputInterface {
  onSubmit?: any;
}

const SearchComponent: React.FC<InputProps & InputInterface> = ({
  onSubmit = (e: React.SyntheticEvent) => {},
  ...rest
}) => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <InputGroup>
      <InputGrey
        value={searchWord}
        onChange={(e) => setSearchWord(e.currentTarget.value)}
        placeholder="Search"
        {...rest}
      />
      <InputRightElement
        children={<SearchIcon color="gray.300" />}
        cursor="pointer"
        onClick={onSubmit}
      />
    </InputGroup>
  );
};

const ChangeTransportation: React.FC<ChangeTransportationProps> = ({}) => {
  const [transportationData, setTransportationData] = useState<
    ITransportDataObject[]
  >([]);

  useEffect(() => {
    transportaionService
      .getTransportationData()
      .then(({ results }) => setTransportationData(results));
  }, []);

  return (
    <ContainerOuter>
      <Center>
        <Card>
          <SearchComponent onSubmit={() => console.log('clicked and filter')}/>
          <VStack w="full" spacing="0">
            {transportationData.map((data) => (
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
          </VStack>
        </Card>
      </Center>
    </ContainerOuter>
  );
};
export default ChangeTransportation;
