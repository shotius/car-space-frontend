import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { InputRegular } from '../Inputs/InputRegular';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { TextRegular } from '../Texts/TextRegular';
import { TopBrandCard } from '../TopBrandCard';

interface BrandSelectProps {
  brands: string[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileBrandSelect: React.FC<BrandSelectProps> = ({
  brands,
  isOpen,
  onClose,
}) => {
  return (
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          h="80%"
          borderTopRadius="15px"
          w="99%"
          ml="1%"
        >
          <DrawerBody p="32px 48px 10px">
            <VStack w="full" h="full" spacing="4">
              <VStack spacing="4" pb="4" bg="white" zIndex="10" w="full">
                <InputGroup w="full">
                  <InputLeftElement
                    children={<SearchIcon fill="autoGrey.400" />}
                  />
                  <Input
                    placeholder="Search"
                    borderRadius="8px"
                    variant="filled"
                    pl="40px"
                    autoFocus={false}
                  />
                </InputGroup>
                <SectionHeader mainText="Top Brands" mainFontSize="16px" />

                <SimpleGrid
                  templateColumns="repeat(5, 1fr)"
                  w="full"
                  gap="10px"
                  overflowX="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
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
                </SimpleGrid>
              </VStack>
              <VStack alignItems="flex-start" w="full" overflowY="scroll">
                {brands.map((brand) => (
                  <TextRegular key={brand}>{brand}</TextRegular>
                ))}
              </VStack>
              <VStack w="full">
                <Button
                  w="full"
                  h="44px"
                  bg="autoOrange.500"
                  color="white"
                  fontWeight="light"
                >
                  Apply
                </Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  );
};
