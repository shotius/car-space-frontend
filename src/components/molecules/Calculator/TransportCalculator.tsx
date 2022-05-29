import { HStack, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from 'src/redux/app/hook';
import transportaionService from 'src/services/transportation.service';
import { roundFloatTo } from 'src/utils/functions/roundFloatTo';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import useCurrencyIcon from 'src/utils/hooks/useCurrencyIcon';
import { ITransportDataObject } from '../../../../../server/shared_with_front/types/types-shared';
import { SizeContext } from '../../organizms/Calculator/CalculatorDesktop';
import { Autocomplete } from '../Autocomplete';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface TransportCalculatorProps {}

export const TransportCalculator: React.FC<TransportCalculatorProps> = ({}) => {
  const size = useContext(SizeContext);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAuction, setSelectedAuction] = useState('');
  const [auctionDictionary, setAuctionDictionary] = useState<
    ITransportDataObject[]
  >([]);
  const [uniqueAuctions, setUniqueAuctions] = useState<string[]>([]);
  const [uniqueCities, setUniqueCities] = useState<string[]>([]);
  const icon = useCurrencyIcon();
  const currPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );

  function extractUniquAuctions(auctionDictionary: ITransportDataObject[]) {
    const allAuctions = auctionDictionary.map((obj) => obj.auction);
    setUniqueAuctions([...new Set(allAuctions)]);
  }

  function extractUniqueCities(auctionDictionary: ITransportDataObject[]) {
    const allCities = auctionDictionary.map((obj) => obj.city);
    setUniqueCities([...new Set(allCities)]);
  }

  useEffect(() => {
    transportaionService
      .getTransportationData()
      .then(({ results }) => {
        setAuctionDictionary(results);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (auctionDictionary.length) {
      extractUniquAuctions(auctionDictionary);
      extractUniqueCities(auctionDictionary);
    }
  }, [auctionDictionary]);

  // calculate state based on selected city
  const state =
    selectedCity && selectedAuction
      ? auctionDictionary.find(
          (dict) =>
            dict.city === selectedCity && dict.auction === selectedAuction
        )?.state
      : '';

  // calculate price
  const price =
    selectedCity && selectedAuction
      ? auctionDictionary.find(
          (dict) =>
            dict.city === selectedCity && dict.auction === selectedAuction
        )?.price
      : 0;

  // filter cities if auction is selected
  const citiesToShow = selectedAuction
    ? auctionDictionary
        .filter((auction) => auction.auction === selectedAuction)
        .map((auction) => {
          return auction.city;
        })
    : uniqueCities;

  // filter auctions if city is selected
  const auctionsToShow = selectedCity
    ? auctionDictionary
        .filter((auction) => auction.city === selectedCity)
        .map((auction) => auction.auction)
    : uniqueAuctions;

  const formatedPrice = useMemo(() => {
    return price
      ? toTrippleNumber(Math.ceil(roundFloatTo(price * currPrice, 4)))
      : 0;
  }, [price, currPrice]);

  return (
    <VStack h="full">
      <Autocomplete
        placeholder="City"
        options={citiesToShow}
        value={selectedCity}
        onChange={setSelectedCity}
        capitalize={true}
      />

      <Autocomplete
        placeholder="Auction"
        options={auctionsToShow}
        value={selectedAuction}
        onChange={setSelectedAuction}
      />
      <CalculatorFooter>
        <HStack w="full" justifyContent="space-between">
          <TextRegular>State</TextRegular>
          <TextRegular>{state || '_'}</TextRegular>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <TextRegular>Total</TextRegular>
          <HStack>
            <HeadingSecondary
              color="autoOrange.500"
              fontSize={size === 'regular' ? '16px' : '20px'}
              fontWeight={icon === '₾' ? '600' : '400'}
            >
              {icon}
            </HeadingSecondary>
            <HeadingSecondary
              color="autoOrange.500"
              fontSize={size === 'regular' ? '16px' : '20px'}
            >
              {formatedPrice}
            </HeadingSecondary>
          </HStack>
        </HStack>
      </CalculatorFooter>
    </VStack>
  );
};
