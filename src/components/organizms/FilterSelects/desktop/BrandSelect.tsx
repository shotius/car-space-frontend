import { InputGroup } from '@chakra-ui/input';
import { Box, Divider, Grid, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { TopBrandCard } from 'src/components/molecules/Cards/TopBrandCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { CustomSelectArrow } from 'src/components/molecules/triggerers/CustomSelectArrow';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getModels, setModels } from 'src/redux/features/auth/carsSlice';
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
  const [searchWord, setSearchWord] = useState<string>('');
  const dispatch = useAppDispatch();

  const { brands: options } = useAppSelector((state) => state.carsReducer);

  // whenever selected values change change value as well
  useEffect(() => {
    setValue(selected.join(', '));
  }, [selected.length]);

  // handle option select
  const handleSelect = (opt: string) => {
    // search keyword will be cleared
    setSearchWord('');
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
    <SelectWrapper>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
          setPlaceholder(selected.join(', '));
          dispatch(getModels(selected));
          setValue('');
        }}
      />
       {/* Content  */}
      <SelectContent>
      {/*  Input */}
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
            }}
            pr="32px"
          />
          <CustomSelectArrow
            clearCb={(e) => {
              if (e.stopPropagation) e.stopPropagation();
              setSelected([]);
              setValue('');
              setPlaceholder('');
              setAreOptionsOpen(false);
              dispatch(setModels([]));
            }}
            areOptionsOpen={areOptionsOpen}
            areOptionsSelected={!!selected.length}
          />
        </InputGroup>

        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen}>
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
                bg={
                  selected.includes('Mercedes')
                    ? 'autoOrange.100'
                    : 'autoGrey.600'
                }
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
                bg={
                  selected.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
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
                    maxW="full"
                    color={selected.includes(opt) ? 'autoOrange.500' : '#000'}
                  >
                    <TextRegular>{capitalizeEach(opt)}</TextRegular>
                  </TextButton>
                )}
              </Box>
            ))}
          </VStack>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
