import { HStack, Stack } from '@chakra-ui/layout';
import { Button, Collapse, Icon, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { EuroIcon } from 'src/components/atoms/Icons/EuroIcon';
import { GelIcon } from 'src/components/atoms/Icons/GelIcon';
import { UsdIcon } from 'src/components/atoms/Icons/UsdIcon';
import { CurrencyType } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectYearFrom,
  toggleAdvancedFilters
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { ButtonRound } from '../../molecules/Buttons/ButtonRound';
import { SearchButton } from '../../molecules/Buttons/SearchButton';
import { InputRegular } from '../../molecules/Inputs/InputRegular';
import { TextRegular } from '../../molecules/Texts/TextRegular';
import { WithMobileKeyboard } from '../../molecules/Wrappers/WithMobileKeyboard';
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

interface ThreeMobileSelectsProps {}

export const MobileFilters: React.FC<ThreeMobileSelectsProps> = () => {
  const [chosenCurrency, setChosenCurrency] = useState<CurrencyType>('GEL');

  // redux variables
  const { isAdvancedFiltersOpen } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  const [keyboardActive, setKeyboardActive] = useState<boolean>(false);
  const [yearFrom, setYearFrom] = useState('');

  return (
    <Stack>
      {/* mobile select opens drawer */}
      <MobileBrandSelect />

      {/* mobile model select and its drawer */}
      <MobileModelSelect />

      {/* year */}
      <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
        <InputRegular
          pr="2"
          placeholder="Year from"
          type="number"
          value={yearFrom}
          onChange={(e) => setYearFrom(e.currentTarget.value)}
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => {
            setKeyboardActive(false);
            yearFrom
              ? dispatch(selectYearFrom(yearFrom))
              : dispatch(selectYearFrom(null));
          }}
        />
        <DividerVertical height="30px" />
        <InputRegular
          placeholder="Year to"
          type="number"
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => setKeyboardActive(false)}
        />
      </HStack>
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
        <HStack
          borderRadius="8px"
          bg="white"
          spacing="2px"
          flexBasis="30%"
          justify="space-between"
          p="7px"
        >
          <ButtonRound
            onClick={() => setChosenCurrency('GEL')}
            active={chosenCurrency === 'GEL'}
          >
            <Icon as={GelIcon} boxSize={7} fontWeight="400" />
          </ButtonRound>
          <ButtonRound
            onClick={() => setChosenCurrency('USD')}
            active={chosenCurrency === 'USD'}
          >
            <Icon as={UsdIcon} boxSize={6} fontWeight="400" />
          </ButtonRound>
          <ButtonRound
            onClick={() => setChosenCurrency('EUR')}
            active={chosenCurrency === 'EUR'}
            fontSize="20px"
            fontWeight="400"
          >
            <Icon as={EuroIcon} boxSize={6} fontWeight="400" />
          </ButtonRound>
        </HStack>
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
          <SearchButton w="full" />
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
