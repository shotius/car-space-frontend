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
import { selectBrand } from 'src/redux/features/auth/carFilterSlice';
import { getModels } from 'src/redux/features/auth/carsSlice';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { TextButton } from '../Buttons/TextButton';
import { TopBrandCard } from '../Cards/TopBrandCard';
import { InputRegular } from '../Inputs/InputRegular';
import { ScrollableDiv } from '../Wrappers/ScrollableDiv';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { ButtonWithIcon } from '../Buttons/IconWithButton';

interface BrandSelectProps {
  brands: string[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileBrandPopup: React.FC<BrandSelectProps> = ({
  brands,
  isOpen,
  onClose,
}) => {
  const initialRef = useRef<HTMLButtonElement | null>(null);
  const [topBrandsVisible, setTopBrandsVisible] = useState(true);
  const [searchWord, setSearchWord] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (brands) {
      setSelectedBrand(brands[0]);
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

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      placement="bottom"
    >
      <DrawerOverlay />
          
      <DrawerContent h="80%" borderTopRadius="16px" p="32px 48px 16px 48px">
        {/* drawer header */}
        <DrawerHeader
          {...swipeHandlers}
          borderTopRadius="16px"
          p="0"
        >
          {' '}
          <VStack
            spacing="4"
            pb="4"
            bg="white"
            zIndex="10"
            w="full"
          >
            {/* search input */}
            <InputGroup w="full">
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
            </InputGroup>

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
              display={topBrandsVisible ? 'grid' : 'none'}
            >
              <TopBrandCard
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                maxW="50px"
                maxH="50px"
                imageWidth="20px"
              />
              <TopBrandCard
                image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png"
                maxW="50px"
                maxH="50px"
                imageWidth="20px"
              />
              <TopBrandCard
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                maxW="50px"
                maxH="50px"
                imageWidth="20px"
              />
              <TopBrandCard
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                maxW="50px"
                maxH="50px"
                imageWidth="20px"
              />
              <TopBrandCard
                image="https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png"
                maxW="50px"
                maxH="50px"
                imageWidth="20px"
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
                    onClick={() => setSelectedBrand(brand)}
                    color={selectedBrand === brand ? 'autoOrange.500' : '#000'}
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
          {' '}
          <ButtonRegular
            ref={initialRef}
            p="0.5"
            onClick={() => {
              dispatch(selectBrand(selectedBrand));
              dispatch(getModels(selectedBrand));
              onClose();
            }}
          >
            Apply
          </ButtonRegular>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
