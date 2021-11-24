import {
  Box,
  BoxProps,
  Divider,
  Flex,
  StackProps,
  VStack
} from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { BmwIcon } from 'src/components/atoms/Icons/BmwIcon';
import { MercedesIcon } from 'src/components/atoms/Icons/MercedesIcon';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { TopBrandCard } from 'src/components/molecules/Cards/TopBrandCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { SelectSearch } from 'src/components/molecules/Inputs/SelectSearch';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getModels, setModels } from 'src/redux/features/auth/carsSlice';
import { selectBrand } from 'src/redux/features/auth/selectedCarFilterSlice';
import { addLettersToSortedArray } from 'src/utils/functions/addLettersToSortedArray';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface BrandSelectProps {
  labelPadding?: BoxProps['p'];
}

// In the compont I have 4 different variables
//1. Value: is used to display selected option
//2. Placeholder: is displayed when not searching
//3. searchWord: when user writing in search box, search word is changing
//4. selected: are Selected options, used to keep track of other three variables
export const BrandSelect: React.FC<BrandSelectProps & StackProps> = ({
  labelPadding,
  ...rest
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const dispatch = useAppDispatch();

  const { brands: options } = useAppSelector((state) => state.carsReducer);
  const { brands: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // whenever selected values change change value and placeholder
  useEffect(() => {
    if (areOptionsOpen) {
      setValue(selected.join(', '));
    }
    console.log('selected: ', selected)

    updatePlaceholder();
  }, [selected.length]);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
    } else {
      setSelected([]);
    }
  }, [initSelection]);

  // handle option select
  const handleSelect = (opt: string) => {
    // search keyword will be cleared
    // if option is in selected values remove, else include
    if (selected.includes(opt)) {
      setSelected(selected.filter((o) => o !== opt));
      setValue(selected.join(', '));
    } else {
      setSelected([opt].concat(selected));
    }
  };

  const updatePlaceholder = () => {
    if (selected.length) {
      setPlaceholder(() => `Brands: ${selected.join(', ')}`);
    } else {
      setPlaceholder(() => `Brands`);
    }
  };

  // filter options when searchWord is specified
  const optionsToShow = addLettersToSortedArray(options).filter((option) => {
    return option.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  return (
    <SelectWrapper {...rest}>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
          updatePlaceholder();
          dispatch(selectBrand(selected));
          dispatch(getModels(selected));
          setValue('');
          setSearchWord('');
        }}
      />
      {/* Content  */}
      <SelectContent>
        {/*  Input */}
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          areOptionsSelected={!!selected.length}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            setSelected([]);
            setValue('');
            setPlaceholder('');
            setAreOptionsOpen(false);
            dispatch(selectBrand([]));
            dispatch(setModels([]));
          }}
        >
          <SelectSearch
            labelPadding={labelPadding}
            label="Brands"
            placeholder={placeholder}
            value={value ? capitalizeEach(value) : searchWord}
            onChange={(e) => setSearchWord(e.currentTarget.value)}
            onFocus={() => {
              // onFocus open Options
              setAreOptionsOpen(true);
              // if something is selected, display in placeholder
              updatePlaceholder();
              // clear value in the search field
              setValue('');
            }}
          />
        </SelectTrigger>

        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen} maxH="380px">
          <VStack
            h="full"
            w="full"
            overflowY={areOptionsOpen ? 'auto' : 'hidden'}
            // display="none"
            // maxH="0px"
            align="flex-start"
            p="4"
            pt="2"
            spacing="2"
            css={{
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
                overflow: 'hidden',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#DEDEE0',
                borderRadius: '100px',
              },
              '::-webkit-scrollbar-button': {
                backgroundColor: 'white',
                display: 'block',
                visibility: 'hidden',
                borderStyle: 'solid',
                height: '3px',
                width: '6px',
              },
            }}
          >
            <Flex
              w="full"
              flexWrap="wrap"
              css={{
                gap: '8px',
              }}
            >
              <TopBrandCard
                icon={MercedesIcon}
                maxW="37px"
                maxH="40px"
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
                maxW="37px"
                maxH="40px"
                boxSize={4}
                onClick={() => handleSelect('Mercedes')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="37px"
                maxH="40px"
                bg={
                  selected.includes('BMW') ? 'autoOrange.100' : 'autoGrey.600'
                }
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="37px"
                maxH="40px"
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="37px"
                maxH="40px"
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
              <TopBrandCard
                icon={BmwIcon}
                maxW="37px"
                maxH="40px"
                boxSize={5}
                onClick={() => handleSelect('BMW')}
              />
            </Flex>
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
                    {capitalizeEach(opt)}
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
