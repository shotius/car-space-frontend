import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { TextButton } from '../Buttons/TextButton';
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
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brands[0]);

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
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      initialFocusRef={initialRef}
    >
      <DrawerOverlay />
      <DrawerContent h="80%" borderTopRadius="16px">
        <DrawerBody p="32px 48px 10px">
          <VStack w="full" h="full" spacing="4" direction="column">
            <VStack spacing="4" pb="4" bg="white" zIndex="10" w="full">
              {/* search input */}
              <InputGroup w="full">
                <InputLeftElement
                  children={<SearchIcon fill="autoGrey.400" />}
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
            <VStack
              alignItems="flex-start"
              w="full"
              overflowY="scroll"
              spacing="2"
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
                      color={
                        selectedBrand === brand ? 'autoOrange.500' : '#000'
                      }
                      fontSize="16px"
                    >
                      {brand}
                    </TextButton>
                  )}
                </Box>
              ))}
            </VStack>

            {/* submit button */}
            <VStack w="full" flex="1" justify="flex-end">
              <ButtonRegular ref={initialRef} onClick={onClose}>
                Apply
              </ButtonRegular>
            </VStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
