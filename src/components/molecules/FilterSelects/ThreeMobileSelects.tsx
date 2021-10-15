import { useDisclosure } from '@chakra-ui/hooks';
import { InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Flex, HStack, SimpleGrid, Stack, VStack } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { CurentyType } from 'src/constants';
import { useAppSelector } from 'src/redux/app/hook';
import { CurrencyButton } from '../Buttons/CurrencyButton';
import { Card } from '../Card';
import { InputRegular } from '../Inputs/InputRegular';
import { MobileSelect } from '../MobileSelect';
import { ScrollableDiv } from '../ScrollableDiv';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { TextRegular } from '../Texts/TextRegular';
import { TopBrandCard } from '../TopBrandCard';

interface ThreeMobileSelectsProps {
  setIsInputFocused: (a: boolean) => void;
}

export const ThreeMobileSelects: React.FC<ThreeMobileSelectsProps> = ({
  setIsInputFocused: setKeyboardActive,
}) => {
  const [chosenCurrency, setChosenCurrency] = useState<CurentyType>('LARI');
  const [brandBoxVisible, setBrandBoxVisible] = useState<boolean>(false);
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  const { brands } = useAppSelector((state) => state.carsReducer);

  return (
    <Stack display={['flex', 'none']}>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent h="80%" borderTopRadius="15px" overflow="hidden">
          <DrawerBody p="48px" pt="32px" >
              <VStack
                spacing="4"
                // position="fixed"
                // top="0"
                // pt="32px"
                pb="4"
                bg="white"
                zIndex="10"
                // w="70%"
                overflow="auto"
              >
                <InputGroup w="full">
                  <InputLeftElement
                    children={<SearchIcon fill="autoGrey.400" />}
                  />
                  <InputRegular
                    placeholder="Search"
                    borderRadius="8px"
                    variant="filled"
                    pl="40px"
                  />
                </InputGroup>
                <SectionHeader mainText="Top Brands" mainFontSize="16px" />

                <SimpleGrid
                  templateColumns="repeat(6, 1fr)"
                  w="full"
                  gap="10px"
                  // p="2"
                  overflowX="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  {/* <ScrollableDiv cardCount={6} bg="blue"> */}
                  <TopBrandCard
                    image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png"
                    minW="38px"
                    minH="38px"
                    imageWidth="20px"
                  />
                  <TopBrandCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                    minW="38px"
                    minH="38px"
                    imageWidth="20px"
                  />
                  <TopBrandCard
                    image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png"
                    minW="38px"
                    minH="38px"
                    imageWidth="20px"
                  />
                  <TopBrandCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                    minW="38px"
                    minH="38px"
                    imageWidth="20px"
                  />
                  <TopBrandCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                    minW="38px"
                    minH="38px"
                    imageWidth="20px"
                  />
                  <TopBrandCard
                    image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png"
                    minW="38px"
                    minH="38px"
                    imageWidth="20px"
                  />
                  {/* </ScrollableDiv> */}
                </SimpleGrid>
              </VStack>
              <VStack
                alignItems="flex-start"
                w="full"
                flex="1"
                h="200px"
                // pt="150px"
                overflowY="scroll"
              >
                {brands.map((brand) => (
                  <TextRegular>{brand}</TextRegular>
                ))}
              </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <MobileSelect onClick={onOpen} label="Brand" />
      <MobileSelect onClick={() => setBrandBoxVisible(true)} label="Models" />
      {/* year */}
      <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
        <InputRegular
          pr="2"
          placeholder="Year from"
          type="number"
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => setKeyboardActive(false)}
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
        <HStack
          borderRadius="8px"
          bg="white"
          spacing="2px"
          flexBasis="30%"
          justify="space-between"
          p="7px"
        >
          <CurrencyButton
            onClick={() => setChosenCurrency('LARI')}
            active={chosenCurrency === 'LARI'}
          >
            ლ
          </CurrencyButton>
          <CurrencyButton
            onClick={() => setChosenCurrency('USD')}
            active={chosenCurrency === 'USD'}
          >
            $
          </CurrencyButton>
          <CurrencyButton
            onClick={() => setChosenCurrency('EUR')}
            active={chosenCurrency === 'EUR'}
          >
            €
          </CurrencyButton>
        </HStack>
      </HStack>
    </Stack>
  );
};
