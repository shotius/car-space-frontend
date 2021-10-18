import {
  Box,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { useAppDispatch } from 'src/redux/app/hook';
import { selectBrand } from 'src/redux/features/auth/carFilterSlice';
import { getModels } from 'src/redux/features/auth/carsSlice';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { TextButton } from '../Buttons/TextButton';
import { DrawerBottom } from '../DrawerBottom';
import { IconWithButton } from '../IconWithButton';
import { InputRegular } from '../Inputs/InputRegular';
import { ScrollableDiv } from '../ScrollableDiv';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { TopBrandCard } from '../TopBrandCard';

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
  const [selectedBrand, setSelectedBrand] = useState<string>(brands[0]);
  const dispatch = useAppDispatch();

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

  return (
    <DrawerBottom
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      footer={
          <ButtonRegular
            ref={initialRef}
            onClick={() => {
              dispatch(selectBrand(selectedBrand));
              dispatch(getModels(selectedBrand));
              onClose();
            }}
          >
            Apply
          </ButtonRegular>
      }
    >
      <VStack w="full" h="full" spacing="4" direction="column">
        <VStack spacing="4" pb="4" bg="white" zIndex="10" w="full">
          {/* search input */}
          <InputGroup w="full">
            <InputLeftElement children={<SearchIcon fill="autoGrey.400" />} />
            <InputRightElement
              children={
                <Center w="full" h="full">
                  <IconWithButton
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
          </ScrollableDiv>
        </VStack>

        {/* list of car brands */}
        <VStack alignItems="flex-start" w="full" overflowY="scroll" spacing="2">
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

        {/* submit button */}
      </VStack>
    </DrawerBottom>
  );
};