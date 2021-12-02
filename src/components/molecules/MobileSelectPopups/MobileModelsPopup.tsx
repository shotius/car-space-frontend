import { Checkbox } from '@chakra-ui/checkbox';
import { VStack } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectModels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectedCarModel } from '../../../../../server/shared_with_front/types/types-shared';
import { SearchInput } from '../Inputs/SearchInput';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileModelsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  allSelectedModels: string[];
}

export const MobileModelsPopup: React.FC<MobileModelsPopupProps> = ({
  isOpen,
  onClose,
  allSelectedModels,
}) => {
  const initialFocusRef = useRef<HTMLButtonElement | null>(null)
  const [searchWord, setSearchWord] = useState('');
  const [selected, setSelected] = useState<SelectedCarModel[]>([]);

  const { models: options } = useAppSelector((state) => state.carsReducer);
  const { models: initialySelectedModels } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  const dispatch = useAppDispatch();

  // asign initial selected models to the state
  useEffect(() => {
    if (initialySelectedModels.length) {
      setSelected(initialySelectedModels);
    } else {
      setSelected([]);
    }
  }, [initialySelectedModels]);

  // checkbox change handler
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

  // filter based on search word
  const optionsToShow = options
    .map((option) => {
      return {
        brand: option.brand,
        models: option.models.filter((model) => model.toLowerCase().includes(searchWord.toLowerCase())),
      };
    })
    .filter((option) => option.models.length);


  return (
    <MobileFilterPopup
      initialFocusRef={initialFocusRef}
      ref={initialFocusRef}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectModels(selected));
        onClose();
      }}
      header={
        <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} />
      }
    >
      <VStack w="full" alignItems="flex-start" h="300px"  spacing="16px">
        {optionsToShow.map((option) => (
          <VStack key={option.brand} align="flex-start">
            <TextSecondary opacity="0.5">{option.brand}</TextSecondary>
            {option.models.map((model) => (
              <Checkbox
                colorScheme="autoOrange"
                defaultChecked={allSelectedModels.includes(model)}
                onChange={(e) => {
                  e.preventDefault();
                  handleSelect({
                    brand: option.brand,
                    model,
                  });
                }}
                key={model}
              >
                {model}
              </Checkbox>
            ))}
          </VStack>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
