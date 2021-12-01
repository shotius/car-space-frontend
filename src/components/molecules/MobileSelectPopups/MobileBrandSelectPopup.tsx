import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectBrand } from 'src/redux/features/auth/selectedCarFilterSlice';
import { getModels } from 'src/redux/features/auth/carsSlice';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { TextButton } from '../Buttons/TextButton';
import { TopBrandCard } from '../Cards/TopBrandCard';
import { SearchInput } from '../Inputs/SearchInput';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { ScrollableDiv } from '../Wrappers/ScrollableDiv';
import { addLettersToSortedArray } from 'src/utils/functions/addLettersToSortedArray';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface BrandSelectProps {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.RefObject<HTMLButtonElement>;
}

export const MobileBrandPopup: React.FC<BrandSelectProps> = ({
  isOpen,
  onClose,
  finalFocusRef,
}) => {
  const initialRef = useRef<HTMLButtonElement | null>(null);
  const [topBrandsVisible, setTopBrandsVisible] = useState(true);
  const [searchWord, setSearchWord] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const { brands: allBrands } = useAppSelector((state) => state.carsReducer);
  const { brands: initSelectedBrands } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  const { isMobile } = useDetectScreen();

  useEffect(() => {
    // if we have filters saved in redux assign them to components state
    if (initSelectedBrands.length) {
      setSelectedBrands(initSelectedBrands);
    } else {
      // else empy array
      setSelectedBrands([]);
    }
  }, [initSelectedBrands]);

  // filter brands when searchWord is specified
  const brandsToShow = addLettersToSortedArray(allBrands).filter((brand) => {
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
  const handleSelect = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((el) => el !== brand));
    } else {
      const brands = [...new Set(selectedBrands.concat(brand))];
      setSelectedBrands(brands);
    }
  };
  console.log('select', selectedBrands)


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
              display={isMobile && topBrandsVisible ? 'block' : 'none'}
            />

            {/* top brand icons */}
            <ScrollableDiv
              cardCount={6}
              w="full"
              display={isMobile && topBrandsVisible ? 'grid' : 'none'}
              p="0"
              gap="10px"
            >
              <TopBrandCard
                icon={MercedesIcon}
                maxW={["38px", '50px']}
                maxH={["38px", '50px']}
                boxSize={5}
              />
              <TopBrandCard
                icon={MercedesIcon}
                maxW={['38px', '50px']}
                maxH={['38px', '50px']}
                boxSize={5}
                bg={
                  selectedBrands.includes('MERCEDES') ? 'autoOrange.100' : 'autoGrey.600'
                }
                onClick={() => handleSelect('MERCEDES')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW={['38px', '50px']}
                maxH={['38px', '50px']}
                boxSize={5}bg={
                  selectedBrands.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW={['38px', '50px']}
                maxH={['38px', '50px']}
                boxSize={5}
                bg={
                  selectedBrands.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW={['38px', '50px']}
                maxH={['38px', '50px']}
                boxSize={5}
                bg={
                  selectedBrands.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW={['38px', '50px']}
                maxH={['38px', '50px']}
                boxSize={5}
                bg={
                  selectedBrands.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
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
                    onClick={() => handleSelect(brand)}
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
