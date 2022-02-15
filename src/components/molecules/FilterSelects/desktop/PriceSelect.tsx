import { HStack, VStack } from '@chakra-ui/layout';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { usePriceSelect } from 'src/utils/hooks/usePriceSelet';
import { CurrencySwitcherButtons } from '../../CurrencySwitcherButtons';
import { InputGrey } from '../../Inputs/InputGrey';

interface PriceSelectProps {}

export const PriceSelect: React.FC<PriceSelectProps> = ({}) => {
  const {
    placeholder,
    clearCb,
    handleClose,
    areOptionsOpen,
    setAreOptionsOpen,
    priceFrom,
    priceTo,
    areOptionsSelected,
    setPriceFrom,
    setPriceTo,
    isBlack,
  } = usePriceSelect();

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <CustomOverlay isActive={areOptionsOpen} onClick={handleClose} />
      <SelectContent>
        <SelectTrigger
          size="md"
          areOptionsOpen={areOptionsOpen}
          clearCb={clearCb}
          areOptionsSelected={areOptionsSelected}
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
            <TextRegular opacity={isBlack ? '1' : '0.5'}>
              {placeholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen} w="full" top="35px">
          <VStack p="0px 16px 16px" align="flex-start">
            <CurrencySwitcherButtons />
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
