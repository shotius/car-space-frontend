import { Button, Checkbox, StackProps } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SelectSearch } from 'src/components/molecules/Inputs/SelectSearch';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getModels, setModels } from 'src/redux/features/auth/carsSlice';
import { selectModels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { addLettersToSortedArray } from 'src/utils/functions/addLettersToSortedArray';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface ModelSelectProps {}

// In the compont I have 4 different variables
//1. Value: is used to display selected option
//2. Placeholder: is displayed when not searching
//3. searchWord: when user writing in search box, search word is changing
//4. selected: are Selected options, used to keep track of other three variables
export const ModelSelect: React.FC<ModelSelectProps & StackProps> = ({
  ...rest
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const dispatch = useAppDispatch();

  const [isDisabled, setIsDisabled] = useState(true);

  const { models: options } = useAppSelector((state) => state.carsReducer);
  const { models: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const { brands: selectedBrands } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // whenever models change in the redux store do this
  useEffect(() => {
    if (options.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      setAreOptionsOpen(false);
      setValue('');
      setPlaceholder('');
      setSelected([]);
    }
  }, [options]);

  // if we have already selected values in redux initialize component state with it
  // whenever selected values change change value as well
  useEffect(() => {
    if (areOptionsOpen) {
      setValue(selected.join(', '));
    }
    updatePlaceholder();
  }, [selected.length, areOptionsOpen]);

  // if brands are not selected remove models filters
  useEffect(() => {
    if (!selectedBrands.length) {
      dispatch(setModels([]));
    } else {
      dispatch(getModels(selectedBrands));
    }
  }, [selectedBrands]);

  // if we have already selected values in redux initialize component state with it
  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
      setIsDisabled(false);
    } else {
      setSelected([]);
    }
  }, [initSelection]);

  const updatePlaceholder = () => {
    if (selected.length) {
      setPlaceholder(`Models: ${selected.join(', ')}`);
    }
  };

  // handle option select
  const handleSelect = (opt: string) => {
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
    <SelectWrapper title="Select Brand First" {...rest}>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
          updatePlaceholder();
          dispatch(selectModels(selected));
          setValue('');
          setSearchWord('');
        }}
      />
      {/*  Input */}
      <SelectContent>
        <SelectTrigger
          areOptionsSelected={!!selected.length}
          isDisabled={isDisabled}
          areOptionsOpen={areOptionsOpen}
          onFocus={() => {
            // onFocus open Options
            setAreOptionsOpen(true);
            // if something is selected, display in placeholder
            updatePlaceholder();
            // clear value in the search field
            setValue('');
          }}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            setSelected([]);
            setValue('');
            setPlaceholder('');
            dispatch(selectModels([]));
            setAreOptionsOpen(false);
          }}
        >
          <SelectSearch
            label="Model"
            isDisabled={isDisabled}
            placeholder={placeholder}
            value={value ? capitalizeEach(value) : searchWord}
            onChange={(e) => setSearchWord(e.currentTarget.value)}
          />
        </SelectTrigger>

        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen}>
          {optionsToShow.map((opt) => (
            <Button
              key={opt}
              w="full"
              p="4"
              borderRadius="none"
              display="flex"
              justifyContent="flex-start"
              variant="ghost"
              _hover={{
                bg: 'autoGrey.100',
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(opt);
              }}
            >
              <Checkbox
                colorScheme="autoOrange"
                isChecked={selected?.includes(opt)}
              >
                <TextRegular>{opt}</TextRegular>
              </Checkbox>
            </Button>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
