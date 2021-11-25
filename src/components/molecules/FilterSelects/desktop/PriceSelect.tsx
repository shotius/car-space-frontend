import { HStack, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { CurrencyType } from 'src/constants';
import { useAppDispatch } from 'src/redux/app/hook';
import { selectCurrency, selectPriseFrom, selectPriseTo } from 'src/redux/features/auth/selectedCarFilterSlice';
import { CurrencySwitcherButtons } from '../../CurrencySwitcherButtons';
import { InputGrey } from '../../Inputs/InputGrey';

interface PriceSelectProps {}

export const PriceSelect: React.FC<PriceSelectProps> = ({}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<CurrencyType>('GEL');
  const [placeholder, setPlaceholder] = useState<string>('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const dispatch = useAppDispatch();

  const detectIcon = () => {
    switch(currency) {
      case "GEL": return "₾";
      case "EUR": return "€";
      case "USD": return "$";
    }
  }


  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (priceTo && priceFrom) {
      setPlaceholder(`Price: ${detectIcon()} ${priceFrom} - ${priceTo} `);
    } else {
      setPlaceholder(`Price`);
    }
  }, [priceFrom, priceTo, currency]);

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
          dispatch(selectPriseFrom(priceFrom))
          dispatch(selectPriseTo(priceTo))
          dispatch(selectCurrency(currency))
        }}
      />
      <SelectContent>
        <SelectTrigger
          size="md"
          areOptionsOpen={areOptionsOpen}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            dispatch(selectPriseFrom(null));
            dispatch(selectPriseTo(null));
            setPlaceholder('');
            setAreOptionsOpen(false);
          }}
          areOptionsSelected={!!(priceFrom && priceTo)}
          onClick={() => setAreOptionsOpen((open) => !open)}
        >
          <HStack
            pl="4"
            h="40px"
            w="full"
            bg="white"
            _hover={{
              bg: 'autoGrey.200',
            }}
            borderRadius="8px"
          >
            <TextRegular opacity={areOptionsOpen ? '1' : '0.5'}>
              {placeholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen} w="full" top="35px">
          <VStack p="0px 16px 16px" align="flex-start">
            <CurrencySwitcherButtons
              currency={currency}
              setCurrency={setCurrency}
            />
            <VStack>
              <InputGrey
                placeholder="From"
                h="37px"
                type="number"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.currentTarget.value)}
              />
              <InputGrey
                placeholder="To"
                h="37px"
                type="number"
                value={priceTo}
                onChange={(e) => setPriceTo(e.currentTarget.value)}
              />
            </VStack>
          </VStack>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
