import {
  Box,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { useAppDispatch } from 'src/redux/app/hook';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { TextButton } from '../Buttons/TextButton';
import { TopBrandCard } from '../Cards/TopBrandCard';
import { InputRegular } from '../Inputs/InputRegular';
import { ScrollableDiv } from '../Wrappers/ScrollableDiv';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { selectBrand } from 'src/redux/features/auth/carFilterSlice';
import { getModels } from 'src/redux/features/auth/carsSlice';
import { SearchInput } from '../Inputs/SearchInput';

interface BrandSelectProps {
  brands: string[];
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.RefObject<HTMLButtonElement>;
}

export const MobileBrandPopup: React.FC<BrandSelectProps> = ({
  brands,
  isOpen,
  onClose,
  finalFocusRef,
}) => {
  const initialRef = useRef<HTMLButtonElement | null>(null);
  const [topBrandsVisible, setTopBrandsVisible] = useState(true);
  const [searchWord, setSearchWord] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (brands.length) {
      setSelectedBrands(selectedBrands.concat(brands[0]));
    }
  }, [brands]);

  // brands already is sorted, Here I add first letter of alphabet
  const brandsWithAlphabet = brands.reduce<string[]>((prev, curr) => {
    // on first iteration, prev is empty
    if (prev.length === 0) {
      return prev.concat(curr[0]).concat(curr);
    }
    // first letter of the next word has changed
    if (prev[prev.length - 1][0] !== curr[0]) {
      return prev.concat(curr[0]).concat(curr);
    } else {
      // else append word
      return prev.concat(curr);
    }
  }, []);

  // filter brands when searchWord is specified
  const brandsToShow = brandsWithAlphabet.filter((brand) => {
    return brand.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  const swipeHandlers = useSwipeable({
    onSwipedDown: () => {
      onClose();
    },
  });

  // if user clicks second time on the  brand
  // it will be removed from the selected brads list
  // else brand will be added in the list
  const toggleSelcetion = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((el) => el !== brand));
    } else {
      const brands = [...new Set(selectedBrands.concat(brand))];
      setSelectedBrands(brands);
    }
  };

  const onSubmit = () => {
    dispatch(selectBrand(selectedBrands));
    dispatch(getModels(selectedBrands));
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      placement="bottom"
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />

      <DrawerContent h="80%" borderTopRadius="16px" p="32px 48px 16px 48px">
        {/* drawer header */}
        <DrawerHeader {...swipeHandlers} borderTopRadius="16px" p="0">
          {' '}
          <VStack spacing="4" pb="4" bg="white" zIndex="10" w="full">
            {/* search input */}
            {/* <InputGroup w="full">
              <InputLeftElement children={<SearchIcon fill="autoGrey.400" />} />
              <InputRightElement
                children={
                  <Center w="full" h="full">
                    <ButtonWithIcon
                      icon={CloseIcon}
                      onClick={() => {
                        setSearchWord('');
                      }}
                      bg="transparent"
                    />
                  </Center>
                }
                display={!!searchWord ? 'block' : 'none'}
              />
              <InputRegular
                placeholder="Search"
                borderRadius="8px"
                variant="filled"
                pl="40px"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                onFocus={() => {
                  setTopBrandsVisible(false);
                }}
                onBlur={() => {
                  setTopBrandsVisible(true);
                }}
              />
            </InputGroup> */}
            <SearchInput
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              onFocus={() => {
                setTopBrandsVisible(false);
              }}
              onBlur={() => {
                setTopBrandsVisible(true);
              }}
            />

            {/* top brands */}
            <SectionHeader
              mainText="Top Brands"
              mainFontSize="16px"
              display={topBrandsVisible ? 'block' : 'none'}
            />

            {/* top brand icons */}
            <ScrollableDiv
              cardCount={5}
              w="full"
              pl="0"
              pr="0"
              display={topBrandsVisible ? 'grid' : 'none'}
            >
              <TopBrandCard
                icon={MercedesIcon}
                maxW="43px"
                maxH="45px"
                boxSize={5}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="43px"
                maxH="45px"
                boxSize={5}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="43px"
                maxH="45px"
                boxSize={5}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="43px"
                maxH="45px"
                boxSize={5}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="43px"
                maxH="45px"
                boxSize={5}
              />
            </ScrollableDiv>
          </VStack>
        </DrawerHeader>
        {/* drawer body */}
        <DrawerBody p="0">
          {/* list of car brands */}
          <VStack
            alignItems="flex-start"
            w="full"
            overflowY="scroll"
            spacing="2"
            pt="4"
          >
            {brandsToShow.map((brand) => (
              <Box key={brand} p="0">
                {brand.length === 1 ? (
                  <Heading fontSize="16px" fontWeight="light">
                    {brand}
                    <Divider w="40px" mt="6px" borderColor="autoGrey.400" />
                  </Heading>
                ) : (
                  <TextButton
                    onClick={() => toggleSelcetion(brand)}
                    color={
                      selectedBrands.includes(brand) ? 'autoOrange.500' : '#000'
                    }
                    fontSize="16px"
                  >
                    {brand}
                  </TextButton>
                )}
              </Box>
            ))}
          </VStack>
        </DrawerBody>
        {/* footer */}
        <DrawerFooter p="16px 0">
          <ButtonRegular ref={initialRef} p="0.5" onClick={onSubmit}>
            Apply
          </ButtonRegular>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
