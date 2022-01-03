import { Button, Checkbox, StackProps, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SelectSearch } from 'src/components/molecules/Inputs/SelectSearch';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getModels, setModels } from 'src/redux/features/auth/carsSlice';
import { selectModels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import useOnSubmit from 'src/utils/hooks/useOnSubmit';
import { SelectedCarModel } from '../../../../../../server/shared_with_front/types/types-shared';

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
  const [selected, setSelected] = useState<SelectedCarModel[]>([]);
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

  const onSubmit = useOnSubmit()

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
      setValue(allSelectedModels.join(', '));
    }
    updatePlaceholder();
  }, [selected, areOptionsOpen]);

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
      // This call back will fire when field is cleared
      onSubmit()
    }
  }, [initSelection]);

  const allSelectedModels = selected.reduce<string[]>((acc, curr) => {
    const arr = curr.models;
    return acc.concat(arr);
  }, []);

  const updatePlaceholder = () => {
    if (selected.length) {
      setPlaceholder(`${allSelectedModels.join(', ')}`);
    } else {
      setPlaceholder(`Models`);
    }
  };

  // handle option select
  const handleSelect = ({ brand, model }: { brand: string; model: string }) => {
    let changeHappend = false; // this varible is for notifying us about change in the loop

    selected.forEach((item, i) => {
      // if there is another model selected for this brand
      if (item.brand === brand) {
        // if model already exists remove it
        if (item.models.includes(model)) {
          const modelsFiltered = item.models.filter((m) => m !== model);
          setSelected([
            ...selected.slice(0, i),
            { brand, models: modelsFiltered },
            ...selected.slice(i + 1),
          ]);
          changeHappend = true;
        } else {
          // else add model
          setSelected([
            ...selected.slice(0, i),
            { brand, models: [...item.models, model] },
            ...selected.slice(i + 1),
          ]);
          changeHappend = true;
        }
      }
    });
    // if there was not model selected from this brand add new object to the selected
    if (!changeHappend) {
      setSelected([...selected, { brand, models: [model] }]);
    }
  };

  // all selected models in an array
  const allModelsSelected = selected.reduce<string[]>(
    (acc, cur) => acc.concat(cur.models),
    []
  );

  // filter options when searchWord is specified
  const optionsToShow = options
    .map((option) => {
      return {
        brand: option.brand,
        models: option.models.filter((model) => model.toLowerCase().includes(searchWord.toLowerCase())),
      };
    })
    .filter((option) => option.models.length);

  return (
    <SelectWrapper
      title="Select Brand First"
      {...rest}
      areOptionsOpen={areOptionsOpen}
    >
      <CustomOverlay
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
          onClick={() => {
            if (!isDisabled) {
              setAreOptionsOpen(true);
            }
          }}
          areOptionsSelected={!!allModelsSelected.length}
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
          {optionsToShow.map((option) => (
            <VStack key={option.brand} align="flex-start" w="full">
              <TextRegular pl="4" fontSize="14px" opacity="0.5">
                {option.brand}
              </TextRegular>

              {option.models.map((model) => (
                <Button
                  key={model}
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
                    handleSelect({
                      brand: option.brand,
                      model,
                    });
                  }}
                >
                  <Checkbox
                    colorScheme="autoOrange"
                    isChecked={allSelectedModels.includes(model)}
                  >
                    <TextRegular>{model}</TextRegular>
                  </Checkbox>
                </Button>
              ))}
            </VStack>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
