import { useDisclosure } from '@chakra-ui/react';
import { MobileCylinderPopup } from 'src/components/molecules/MobileSelectPopups/MobileCylinderPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectCylinders
} from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileCylindersSelectProps {}

export const MobileCylindersSelect: React.FC<MobileCylindersSelectProps> =
  ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useAppDispatch();
    const { cylinders: selection } = useAppSelector(
      (state) => state.selectedCarFilters
    );
    return (
      <>
        <MobileSelect
          onClick={onOpen}
          label={selection.length ? `Cylinders: ${selection.join(', ')}` :  'Cylinders'}
          hasValue={!!selection.length}
          onClear={() => dispatch(selectCylinders([]))}
        />
        <MobileCylinderPopup isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
