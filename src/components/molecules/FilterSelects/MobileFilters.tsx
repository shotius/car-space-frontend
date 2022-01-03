import { HStack, Stack } from '@chakra-ui/layout';
import { Button, Collapse, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CurrencyType } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleAdvancedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import useOnSubmit from 'src/utils/hooks/useOnSubmit';
import { SearchButton } from '../Buttons/SearchButton';
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
import { MobileSalesStatusSelect } from './mobile/MobileSalesStatusSelect';
import { MobileTransmissionSelect } from './mobile/MobileTransmissionSelect';
import { MobileTypesSelect } from './mobile/MobileTypesSelect';
import { MobileYearInput } from './mobile/MobileYearInput';

interface ThreeMobileSelectsProps {}

export const MobileFiltersOnCatalogPage: React.FC<ThreeMobileSelectsProps> =
  ({}) => {
    const [chosenCurrency, setChosenCurrency] = useState<CurrencyType>('GEL');

    const onSubmit = useOnSubmit()

    // redux variables
    const { isAdvancedFiltersOpen } = useAppSelector(
      (state) => state.selectedCarFilters
    );
    const dispatch = useAppDispatch();

    const [keyboardActive, setKeyboardActive] = useState<boolean>(false);

    return (
      <Stack>
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
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => setKeyboardActive(false)}
            />
            <DividerVertical height="30px" />
            <InputRegular
              placeholder="Price to"
              type="number"
              onFocus={() => setKeyboardActive(true)}
              onBlur={() => setKeyboardActive(false)}
            />
          </HStack>
          {/* currency */}
          <CurrencySwitcherButtons
            currency={chosenCurrency}
            setCurrency={setChosenCurrency}
          />
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

            {/* Sales Status */}
            <MobileSalesStatusSelect />

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
              onClick={onSubmit}
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
