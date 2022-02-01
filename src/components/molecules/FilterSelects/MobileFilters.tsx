import { HStack, Stack } from '@chakra-ui/layout';
import { Button, Collapse, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  resetFilters, selectPriseFrom,
  selectPriseTo,
  toggleAdvancedFilters
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import useOnSubmit from 'src/utils/hooks/useOnSubmit';
import { SearchButton } from '../Buttons/SearchButton';
import { TextButton } from '../Buttons/TextButton';
import { CurrencySwitcherButtons } from '../CurrencySwitcherButtons';
import { InputRegular } from '../Inputs/InputRegular';
import { TextRegular } from '../Texts/TextRegular';
import { WithMobileKeyboard } from '../Wrappers/WithMobileKeyboard';
import { MobileBrandSelect } from './mobile/MobileBrandSelect';
import { MobileCarKeysSelect } from './mobile/MobileCarKeySelect';
import { MobileConditionSelect } from './mobile/MobileConditionSelect';
import { MobileCylindersSelect } from './mobile/MobileCylindersSelect';
import { MobileDriveSelect } from './mobile/MobileDriveSelect';
import { MobileEngineSelect } from './mobile/MobileEngineSelect';
import { MobileFuelsSelect } from './mobile/MobileFuelsSelect';
import { MobileLocationSelect } from './mobile/MobileLocationSelect';
import { MobileModelSelect } from './mobile/MobileModelSelect';
import { MobileTransmissionSelect } from './mobile/MobileTransmissionSelect';
import { MobileTypesSelect } from './mobile/MobileTypesSelect';
import { MobileYearInput } from './mobile/MobileYearInput';

interface ThreeMobileSelectsProps {}

export const MobileFiltersOnCatalogPage: React.FC<ThreeMobileSelectsProps> =
  ({}) => {
    const [keyboardActive, setKeyboardActive] = useState<boolean>(false);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    // redux variables
    const filters = useAppSelector((state) => state.selectedCarFilters);
    const isAdvancedFiltersOpen = useAppSelector(
      (state) => state.selectedCarFilters.isAdvancedFiltersOpen
    );

    const dispatch = useAppDispatch();
    const onSubmit = useOnSubmit();

    return (
      <Stack>
        <TextButton
          _hover={{ textDecoration: 'underline' }}
          pr="4"
          alignSelf="flex-end"
          onClick={() => {
            dispatch(resetFilters());
            dispatch(setCatalogQuery(''));
          }}
        >
          reset all filters
        </TextButton>
        {/* mobile select opens drawer */}
        <MobileBrandSelect />

        {/* mobile model select and its drawer */}
        <MobileModelSelect />

        {/* year */}
        <MobileYearInput setKeyboardActive={setKeyboardActive} />

        {/* price */}
        <HStack justify="space-between">
          <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
            <InputRegular
              pr="2"
              placeholder="Price from"
              type="number"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.currentTarget.value)}
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => {
                setKeyboardActive(false);
                dispatch(selectPriseFrom(priceFrom));
              }}
            />
            <DividerVertical height="30px" />
            <InputRegular
              placeholder="Price to"
              type="number"
              value={priceTo}
              onChange={(e) => setPriceTo(e.currentTarget.value)}
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => {
                setKeyboardActive(false);
                dispatch(selectPriseTo(priceTo));
              }}
            />
          </HStack>
          {/* currency */}
          <CurrencySwitcherButtons />
        </HStack>

        {/* colapsable selects */}
        <Collapse in={isAdvancedFiltersOpen}>
          <VStack>
            {/* Engine  */}
            <MobileEngineSelect />

            {/* Conditions */}
            <MobileConditionSelect />

            {/* Types */}
            <MobileTypesSelect />

            {/* Locations */}
            <MobileLocationSelect />

            {/* transmission */}
            <MobileTransmissionSelect />

            {/* Keys */}
            <MobileCarKeysSelect />

            {/* drive */}
            <MobileDriveSelect />

            {/* Fuels */}
            <MobileFuelsSelect />

            {/* Cylinders */}
            <MobileCylindersSelect />
          </VStack>
        </Collapse>
        {/* apply button */}
        <VStack pt="2" spacing="3">
          {/* this mobile input sticks button to the keyboard */}
          <WithMobileKeyboard isKeyboardActive={keyboardActive}>
            <SearchButton
              w="full"
              isKeyboardActive={keyboardActive}
              onClick={() => onSubmit(filters)}
            />
          </WithMobileKeyboard>
          <Button
            variant="link"
            onClick={() => dispatch(toggleAdvancedFilters())}
            bg="transparent"
          >
            <TextRegular
              color={'#000'}
              display={keyboardActive ? 'none' : 'block'}
              lineHeight="19px"
              fontWeight="400"
            >
              {isAdvancedFiltersOpen ? 'See less filter' : 'See more filter'}
            </TextRegular>
          </Button>
        </VStack>
      </Stack>
    );
  };
