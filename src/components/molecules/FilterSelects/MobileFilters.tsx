import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, Stack } from '@chakra-ui/layout';
import { Button, Collapse, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CurentyType } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { ButtonRound } from '../Buttons/ButtonRound';
import { InputRegular } from '../Inputs/InputRegular';
import { MobileSelect } from '../Selects/MobileSelect';
import { MobileBrandPopup } from '../MobileSelectPopups/MobileBrandSelect';
import { MobileTransmissionPopup } from '../MobileSelectPopups/MobileTransmissionPopup';
import { MobileEnginePopup } from '../MobileSelectPopups/MobileEnginePopup';
import { SearchButton } from '../Buttons/SearchButton';
import { TextRegular } from '../Texts/TextRegular';
import { WithMobileKeyboard } from '../Wrappers/WithMobileKeyboard';
import { selectYearFrom } from 'src/redux/features/auth/carFilterSlice';

interface ThreeMobileSelectsProps {}

export const MobileFilters: React.FC<ThreeMobileSelectsProps> = () => {
  const { brand } = useAppSelector((state) => state.carFilterReducer);
  const [chosenCurrency, setChosenCurrency] = useState<CurentyType>('LARI');
  const dispatch = useAppDispatch();

  // brand drawer
  const {
    isOpen: isBrandOpen,
    onClose: closeBrand,
    onOpen: openBrand,
  } = useDisclosure();

  // engine
  const {
    isOpen: isEngineOpen,
    onClose: closeEngine,
    onOpen: openEngine,
  } = useDisclosure();

  // // cylinders
  // const {
  //   isOpen: isCylindersOpen,
  //   onClose: closeCylinders,
  //   onOpen: openCylinders,
  // } = useDisclosure();

  const {
    isOpen: isTransmOpen,
    onClose: closeTransm,
    onOpen: openTransm,
  } = useDisclosure();

  // additial filters
  const { isOpen: isFiltersOpen, onToggle: toggleFilters } = useDisclosure();
  const { models } = useAppSelector((state) => state.carsReducer);

  const { brands } = useAppSelector((state) => state.carsReducer);

  const [keyboardActive, setKeyboardActive] = useState<boolean>(false);
  const [yearFrom, setYearFrom] = useState('');

  const handleModelSelect = () => {
    if (models.length !== 0) {
      openBrand();
    }
  };

  return (
    <Stack>
      {/* mobile select **fake** and its drawer */}
      <MobileSelect onClick={openBrand} label={brand || 'Brand'} />
      <MobileBrandPopup
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
            onClick={() => setChosenCurrency('LARI')}
            active={chosenCurrency === 'LARI'}
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
      <Collapse in={isFiltersOpen}>
        <VStack>
          <MobileSelect onClick={openEngine} label="Engine"></MobileSelect>
          <MobileEnginePopup onClose={closeEngine} isOpen={isEngineOpen} />

          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Mileage"
          ></MobileSelect>
          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Condition"
          ></MobileSelect>
          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Type"
          ></MobileSelect>
          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Location"
          ></MobileSelect>
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
          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Drive"
          ></MobileSelect>
          <MobileSelect
            onClick={() => console.log('cliecked')}
            label="Fuel"
          ></MobileSelect>

          {/* <MobileSelect onClick={openCylinders} label="Cylinder"></MobileSelect> */}
        </VStack>
      </Collapse>
      {/* apply button */}
      <VStack pt="2" spacing="3">
        {/* this mobile input sticks button to the keyboard */}
        <WithMobileKeyboard isKeyboardActive={keyboardActive}>
          <SearchButton w="full" />
        </WithMobileKeyboard>
        <Button variant="link" onClick={toggleFilters} bg="transparent">
          <TextRegular
            color={'#000'}
            display={keyboardActive ? 'none' : 'block'}
            lineHeight="19px"
          >
            {isFiltersOpen ? 'See less filter' : 'See more filter'}
          </TextRegular>
        </Button>
      </VStack>
    </Stack>
  );
};
