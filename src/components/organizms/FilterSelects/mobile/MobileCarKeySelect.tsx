import { useDisclosure } from '@chakra-ui/react';
import { MobileCarKyesPopup } from 'src/components/molecules/MobileSelectPopups/MobileCarKeysPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectCarKeys } from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileCarKeysSelectProps {}

export const MobileCarKeysSelect: React.FC<MobileCarKeysSelectProps> =
  ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useAppDispatch();
    const { keys: selection } = useAppSelector(
      (state) => state.selectedCarFilters
    );
    return (
      <>
        <MobileSelect
          onClick={onOpen}
          label={selection || 'Has Keys'}
          hasValue={!!selection}
          onClear={() => dispatch(selectCarKeys(null))}
        />
        <MobileCarKyesPopup isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
