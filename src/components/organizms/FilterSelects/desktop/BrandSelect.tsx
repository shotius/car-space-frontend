import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Divider, Grid, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { TopBrandCard } from 'src/components/molecules/Cards/TopBrandCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { useAppSelector } from 'src/redux/app/hook';
import { addLettersToSortedArray } from 'src/utils/functions/addLettersToSortedArray';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface BrandSelectProps {}

// In the compont I have 4 different variables
//1. Value: is used to display selected option 
//2. Placeholder: is displayed when not searching
//3. searchWord: when user writing in search box, search word is changing
//4. selected: are Selected options, used to keep track of other three variables 
export const BrandSelect: React.FC<BrandSelectProps> = () => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('')

  const { brands: options } = useAppSelector((state) => state.carsReducer);

  // whenever selected values change change value as well
  useEffect(() => {
    setValue(selected.join(', '));
  }, [selected.length]);

  // handle option select
  const handleSelect = (opt: string) => {
    // search keyword will be cleared
    setSearchWord('')
    // if option is in selected values remove, else include
    if (selected.includes(opt)) {
      setSelected(selected.filter((o) => o !== opt));
    } else {
      setSelected([opt].concat(selected));
    }
  };


   // filter options when searchWord is specified
   const optionsToShow = addLettersToSortedArray(options).filter((option) => {
    return option.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  return (
    <Box w={['100%', '30%', '100%']}>
      <Box
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bg="rgba(0, 0, 0, 0)"
        display={areOptionsOpen ? 'block' : 'none'}
        onClick={() => {
          setAreOptionsOpen(false);
          setPlaceholder(selected.join(', '));
          setValue('');
        }}
      />
      {/*  Input */}
      <VStack position="relative">
        <InputGroup
          onFocus={() => {
            // onFocus open Options
            setAreOptionsOpen(true);
            // if something is selected, display in placeholder
            if (selected.length) {
              setPlaceholder(selected.join(', '));
            }
            // clear value in the search field
            setValue('');
          }}
        >
          <InputGrey
            bg="transparent"
            border="none"
            placeholder={capitalizeEach(placeholder) || 'Brands'}
            value={value ? capitalizeEach(value) : searchWord}
            onChange={(e) => setSearchWord(e.currentTarget.value)}
            isTruncated
            _focus={{
              bg: 'white',
              opacity: '1',
            }}
            pr="32px"
          />
          {selected.length ? (
            <InputRightElement
              children={<CloseIcon />}
              cursor="pointer"
              opacity="0.6"
              onClick={(e) => {
                if (e.stopPropagation) e.stopPropagation();
                setSelected([]);
                setValue('');
                setPlaceholder('');
                setAreOptionsOpen(false);
              }}
            />
          ) : (
            <InputRightElement
              children={
                <DropdownIcon
                  opacity="0.5"
                  boxSize={5}
                  transform={areOptionsOpen ? 'rotate(180deg)' : ''}
                  transition="all .2s"
                />
              }
              pointerEvents="painted"
            />
          )}
        </InputGroup>

        {/* Options  */}
        <VStack
          w="full"
          position="absolute"
          top={!areOptionsOpen ? '41px' : '45px'}
          h={areOptionsOpen ? '300px' : '0px'}
          opacity={areOptionsOpen ? '1' : '0.7'}
          transition="all .25s"
          bg="white"
          boxShadow="0px 3px 10px #00000029"
          borderRadius="8px"
          p={areOptionsOpen ? '8px 0' : '0'}
          // overflow needs to be here, to totaly hide options
          overflowY={areOptionsOpen ? 'auto' : 'hidden'}
        >
          <VStack
            h="full"
            w="full"
            overflowY={areOptionsOpen ? 'auto' : 'hidden'}
            textOverflow="ellipsis"
            align="flex-start"
            p="4"
            pt="2"
            spacing="4"
          >
            <Grid
              w="full"
              flexWrap="wrap"
              gap="2"
              gridTemplateColumns="1fr 1fr 1fr"
            >
              <TopBrandCard
                icon={MercedesIcon}
                w="full"
                h="full"
                maxH="43px"
                bg={selected.includes('Mercedes') ? "autoOrange.100" : "autoGrey.600"}
                boxSize={4}
                onClick={() => handleSelect('Mercedes')}
              />
              <TopBrandCard
                icon={MercedesIcon}
                w="full"
                h="full"
                maxH="43px"
                boxSize={4}
                onClick={() => handleSelect('Mercedes')}
              />
              <TopBrandCard
                icon={BmwIcon}
                w="full"
                h="full"
                bg={selected.includes('BMW') ? "autoOrange.100" : "autoGrey.600"}
                boxSize={ 5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                w="full"
                h="full"
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                w="full"
                h="full"
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                w="full"
                h="full"
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
            </Grid>
            {optionsToShow.map((opt) => (
              <Box p="0" key={opt}>
                {opt.length === 1 ? (
                  <HeadingSecondary pt="4" fontSize="14px">
                    {opt}{' '}
                    <Divider w="40px" mt="6px" borderColor="autoGrey.400" />
                  </HeadingSecondary>
                ) : (
                  <TextButton
                    onClick={() => handleSelect(opt)}
                    isTruncated
                    fontFamily="Roboto Medium"
                    fontWeight="400"
                    maxW="full"
                    color={selected.includes(opt) ? 'autoOrange.500' : '#000'}
                  >
                    {capitalizeEach(opt)}
                  </TextButton>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};
