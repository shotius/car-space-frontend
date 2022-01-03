import { Box, BoxProps, useDisclosure } from '@chakra-ui/react';
import { MobileModelsPopup } from 'src/components/molecules/MobileSelectPopups/MobileModelsPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectModels } from 'src/redux/features/auth/selectedCarFilterSlice';
import useOnSubmit from 'src/utils/hooks/useOnSubmit';

interface MobileModelSelectProps {
  saerchOnClear?: boolean;
}

export const MobileModelSelect: React.FC<MobileModelSelectProps & BoxProps> = ({
  saerchOnClear = true,
  w = 'full',
  ...rest
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useAppDispatch();
  const { models: ModelFilters } = useAppSelector((state) => state.carsReducer);
  const { models: selection } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  const filters = useAppSelector((state) => state.selectedCarFilters);
  const onSubmit = useOnSubmit();

  // if models are not fetched make it desabled
  const handleModelSelect = () => {
    if (ModelFilters.length !== 0) {
      onOpen();
    }
  };

  const allSelectedModels = selection.reduce<string[]>((acc, curr) => {
    const arr = curr.models;
    return acc.concat(arr);
  }, []);

  return (
    <Box minW={w} maxW={w} {...rest}>
      <MobileSelect
        onClick={handleModelSelect}
        label={
          allSelectedModels.length ? allSelectedModels.join(', ') : 'Models'
        }
        isDisabled={!!!ModelFilters.length}
        hasValue={!!selection.length}
        onClear={() => {
          dispatch(selectModels([]));
          saerchOnClear && onSubmit({ ...filters, models: [] });
        }}
      />
      <MobileModelsPopup
        isOpen={isOpen}
        onClose={onClose}
        allSelectedModels={allSelectedModels}
      />
    </Box>
  );
};
