import { useDisclosure } from '@chakra-ui/react';
import { MobileTransmissionPopup } from 'src/components/molecules/MobileSelectPopups/MobileTransmissionPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTranssmision } from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileTransmissionSelectProps {}

export const MobileTransmissionSelect: React.FC<MobileTransmissionSelectProps> =
  ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useAppDispatch();
    const { transmission: selection } = useAppSelector(
      (state) => state.selectedCarFilters
    );
    return (
      <>
        <MobileSelect
          onClick={onOpen}
          label={
            selection.length
              ? `Transmission: ${selection.join(', ')}`
              : 'Transmission'
          }
          hasValue={!!selection.length}
          onClear={() => dispatch(selectTranssmision([]))}
        />
        <MobileTransmissionPopup isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
