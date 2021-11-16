import { useDisclosure } from '@chakra-ui/react';
import { MobileTypePopup } from 'src/components/molecules/MobileSelectPopups/MobileTypePopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTypes } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface MobileTypesSelectProps {}

export const MobileTypesSelect: React.FC<MobileTypesSelectProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const { types: selectedTypes } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  
  return (
    <>
      <MobileSelect
        onClick={onOpen}
        label={capitalizeEach(selectedTypes.join('; ')) || 'Type'}
        hasValue={!!selectedTypes.length}
        onClear={() => dispatch(selectTypes([]))}
      />
      <MobileTypePopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};
