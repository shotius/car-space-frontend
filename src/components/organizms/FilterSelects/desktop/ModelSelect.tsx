import { VStack } from '@chakra-ui/layout';
import { Button, Checkbox } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SelectSearch } from 'src/components/molecules/Inputs/SelectSearch';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { useAppSelector } from 'src/redux/app/hook';
import { addLettersToSortedArray } from 'src/utils/functions/addLettersToSortedArray';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface ModelSelectProps {}

// In the compont I have 4 different variables
//1. Value: is used to display selected option
//2. Placeholder: is displayed when not searching
//3. searchWord: when user writing in search box, search word is changing
//4. selected: are Selected options, used to keep track of other three variables
export const ModelSelect: React.FC<ModelSelectProps> = () => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');

  const [isDisabled, setIsDisabled] = useState(true);

  const { models: options } = useAppSelector((state) => state.carsReducer);

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
          setValue('');
        }}
      />
      {/*  Input */}
      <SelectContent>
        <SelectTrigger
          isDisabled={isDisabled}
          areOptionsOpen={areOptionsOpen}
          selectedValues={selected}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            setSelected([]);
            setValue('');
            setPlaceholder('');
            setAreOptionsOpen(false);
          }}
        >
          <SelectSearch
            label="Model"
            isDisabled={isDisabled}
            placeholder={placeholder}
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
            value={value ? capitalizeEach(value) : searchWord}
            onChange={(e) => setSearchWord(e.currentTarget.value)}
          />
        </SelectTrigger>

        {/* Options  */}
        <SelectOptions isOpen={areOptionsOpen}>
          {optionsToShow.map((opt) => (
            <Button
              w="full"
              p="4"
              borderRadius="none"
              display="flex"
              justifyContent="flex-start"
              variant="ghost"
              _hover={{
                bg: 'autoGrey.100',
              }}
            >
              <Checkbox
                colorScheme="autoOrange"
                defaultChecked={selected?.includes(opt)}
                onChange={(e) => {
                  e.preventDefault();
                  handleSelect(opt);
                }}
                key={opt}
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
