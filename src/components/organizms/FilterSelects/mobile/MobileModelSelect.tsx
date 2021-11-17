import { useDisclosure } from '@chakra-ui/react';
import { MobileModelsPopup } from 'src/components/molecules/MobileSelectPopups/MobileModelsPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectModels } from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileModelSelectProps {}

export const MobileModelSelect: React.FC<MobileModelSelectProps> = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useAppDispatch();
  const { models: ModelFilters } = useAppSelector((state) => state.carsReducer);
  const { models: selection } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // if models are not fetched make it desabled
  const handleModelSelect = () => {
    if (ModelFilters.length !== 0) {
      onOpen();
    }
  };

  return (
    <>
      <MobileSelect
        onClick={handleModelSelect}
        label={selection.length ? `Model: ${selection.join('; ')}` : 'Models'}
        isDisabled={!!!ModelFilters.length}
        hasValue={!!selection.length}
        onClear={() => dispatch(selectModels([]))}
      />
      <MobileModelsPopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};