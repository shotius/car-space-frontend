import { Checkbox } from '@chakra-ui/checkbox';
import { VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectModels } from 'src/redux/features/auth/carFilterSlice';
import { SearchInput } from '../Inputs/SearchInput';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileModelsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileModelsPopup: React.FC<MobileModelsPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchWord, setSearchWord] = useState('');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const { models: allModels } = useAppSelector((state) => state.carsReducer);
  const { models: initialySelectedModels } = useAppSelector(
    (state) => state.carFilterReducer
  );
  const dispatch = useAppDispatch();

  // asign initial selected models to the state
  useEffect(() => {
    if (initialySelectedModels.length) {
      setSelectedModels(initialySelectedModels);
    }
  }, [initialySelectedModels]);

  // checkbox change handler
  const onChangeHandler = (model: string) => {
    if (!selectedModels.includes(model)) {
      setSelectedModels(selectedModels.concat(model));
    } else {
      setSelectedModels(selectedModels.filter((m) => m !== model));
    }
  };

  // filter based on search word
  const modelsToShow = () =>
    allModels.filter((model) =>
      model.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
    );

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectModels(selectedModels));
        onClose();
      }}
      header={
        <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} />
      }
    >
      <VStack w="full" alignItems="flex-start" minH="300px" spacing="16px">
        {modelsToShow().map((model) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initialySelectedModels?.includes(model)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(model);
            }}
            key={model}
          >
            {model}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
