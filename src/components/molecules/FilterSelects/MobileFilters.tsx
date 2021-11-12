import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, Stack } from '@chakra-ui/layout';
import { Button, Collapse, VStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CurrencyType } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectYearFrom,
  toggleAdvancedFilters,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { ButtonRound } from '../Buttons/ButtonRound';
import { SearchButton } from '../Buttons/SearchButton';
import { InputRegular } from '../Inputs/InputRegular';
import { MobileBrandPopup } from '../MobileSelectPopups/MobileBrandSelect';
import { MobileConditionPopup } from '../MobileSelectPopups/MobileConditionPopup';
import { MobileCylinderPopup } from '../MobileSelectPopups/MobileCylinderPopup';
import { MobileDrivesPopup } from '../MobileSelectPopups/MobileDrivePopup';
import { MobileEnginePopup } from '../MobileSelectPopups/MobileEnginePopup';
import { MobileFuelsPopup } from '../MobileSelectPopups/MobileFuelPopup';
import { MobileLocationPopup } from '../MobileSelectPopups/MobileLocationPopup';
import { MobileModelsPopup } from '../MobileSelectPopups/MobileModelsPopup';
import { MobileTransmissionPopup } from '../MobileSelectPopups/MobileTransmissionPopup';
import { MobileTypePopup } from '../MobileSelectPopups/MobileTypePopup';
import { MobileSelect } from '../Selects/MobileSelect';
import { TextRegular } from '../Texts/TextRegular';
import { WithMobileKeyboard } from '../Wrappers/WithMobileKeyboard';

interface ThreeMobileSelectsProps {}

export const MobileFilters: React.FC<ThreeMobileSelectsProps> = () => {
  const { brands: selectedBrands, isAdvancedFiltersOpen } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const [chosenCurrency, setChosenCurrency] = useState<CurrencyType>('GEL');
  const dispatch = useAppDispatch();
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  // brand drawer
  const {
    isOpen: isBrandOpen,
    onClose: closeBrand,
    onOpen: openBrand,
  } = useDisclosure();

  const {
    isOpen: isModelsOpen,
    onClose: closeModels,
    onOpen: openModels,
  } = useDisclosure();

  // engine
  const {
    isOpen: isEngineOpen,
    onClose: closeEngine,
    onOpen: openEngine,
  } = useDisclosure();

  // Transmissions
  const {
    isOpen: isTransmOpen,
    onClose: closeTransm,
    onOpen: openTransm,
  } = useDisclosure();

  // Conditions
  const {
    isOpen: isConditionsOpen,
    onOpen: openConditions,
    onClose: closeConditions,
  } = useDisclosure();

  // Types
  const {
    isOpen: isTypesOpen,
    onOpen: openTypes,
    onClose: closeTypes,
  } = useDisclosure();

  // Locations
  const {
    isOpen: isLocatinsOpen,
    onOpen: openLocations,
    onClose: closeLocations,
  } = useDisclosure();

  // Drives
  const {
    isOpen: isDrivesOpen,
    onOpen: openDrives,
    onClose: closeDrives,
  } = useDisclosure();

  // Fuels
  const {
    isOpen: isFuelsOpen,
    onOpen: openFuels,
    onClose: closeFuels,
  } = useDisclosure();

  // cylinders
  const {
    isOpen: isCylindersOpen,
    onClose: closeCylinders,
    onOpen: openCylinders,
  } = useDisclosure();

  // advanced filters
  const { brands, models } = useAppSelector((state) => state.carsReducer);

  const [keyboardActive, setKeyboardActive] = useState<boolean>(false);
  const [yearFrom, setYearFrom] = useState('');

  const handleModelSelect = () => {
    if (models.length !== 0) {
      openModels();
    }
  };

  return (
    <Stack>
      {/* mobile select opens drawer */}
      <MobileSelect
        onClick={openBrand}
        label={selectedBrands.join(' ') || 'Brand'}
      />
      <MobileBrandPopup
        finalFocusRef={searchButtonRef}
        brands={brands}
        isOpen={isBrandOpen}
        onClose={closeBrand}
      />

      {/* mobile model select and its drawer */}
      <MobileSelect
        onClick={handleModelSelect}
        label="Models"
        textOpacity={models.length !== 0 ? '0.5' : '0.2'}
      />
      <MobileModelsPopup isOpen={isModelsOpen} onClose={closeModels} />

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
            ლ
          </ButtonRound>
          <ButtonRound
            onClick={() => setChosenCurrency('USD')}
            active={chosenCurrency === 'USD'}
          >
            $
          </ButtonRound>
          <ButtonRound
            onClick={() => setChosenCurrency('EUR')}
            active={chosenCurrency === 'EUR'}
          >
            €
          </ButtonRound>
        </HStack>
      </HStack>
      {/* colapsable selects */}
      <Collapse in={isAdvancedFiltersOpen}>
        <VStack>
          <MobileSelect onClick={openEngine} label="Engine"></MobileSelect>
          <MobileEnginePopup onClose={closeEngine} isOpen={isEngineOpen} />

          {/* Mileage */}
          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Mileage"
          ></MobileSelect>

          {/* Conditions */}
          <MobileSelect
            onClick={openConditions}
            label="Condition"
          ></MobileSelect>
          <MobileConditionPopup
            isOpen={isConditionsOpen}
            onClose={closeConditions}
          />

          {/* Types */}
          <MobileSelect onClick={openTypes} label="Type"></MobileSelect>
          <MobileTypePopup isOpen={isTypesOpen} onClose={closeTypes} />

          {/* Locations */}
          <MobileSelect onClick={openLocations} label="Location"></MobileSelect>
          <MobileLocationPopup
            isOpen={isLocatinsOpen}
            onClose={closeLocations}
          />

          {/* transmission */}
          <MobileSelect
            onClick={openTransm}
            label="Transmission"
          ></MobileSelect>
          <MobileTransmissionPopup
            isOpen={isTransmOpen}
            onClose={closeTransm}
          />
          {/* drive */}
          <MobileSelect onClick={openDrives} label="Drive"></MobileSelect>
          <MobileDrivesPopup isOpen={isDrivesOpen} onClose={closeDrives} />

          {/* Fuels */}
          <MobileSelect onClick={openFuels} label="Fuel"></MobileSelect>
          <MobileFuelsPopup isOpen={isFuelsOpen} onClose={closeFuels} />

          {/* Cylinders */}
          <MobileSelect onClick={openCylinders} label="Cylinder"></MobileSelect>
          <MobileCylinderPopup
            isOpen={isCylindersOpen}
            onClose={closeCylinders}
          />
        </VStack>
      </Collapse>
      {/* apply button */}
      <VStack pt="2" spacing="3">
        {/* this mobile input sticks button to the keyboard */}
        <WithMobileKeyboard isKeyboardActive={keyboardActive}>
          <SearchButton w="full" ref={searchButtonRef} />
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
          >
            {isAdvancedFiltersOpen ? 'See less filter' : 'See more filter'}
          </TextRegular>
        </Button>
      </VStack>
    </Stack>
  );
};
