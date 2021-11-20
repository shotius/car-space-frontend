import { useDisclosure } from '@chakra-ui/react';
import { MobileDrivesPopup } from 'src/components/molecules/MobileSelectPopups/MobileDrivePopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectDrives } from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileDriveSelectProps {}

export const MobileDriveSelect: React.FC<MobileDriveSelectProps> =
  ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useAppDispatch()
    const { drives: selectedLocations } = useAppSelector(
      (state) => state.selectedCarFilters
    );
    return (
      <>
        <MobileSelect
          onClick={onOpen}
          label={selectedLocations.join(', ') || "Drives"}
          hasValue={!!selectedLocations.length}
          onClear={() => dispatch(selectDrives([]))}
        />
        <MobileDrivesPopup isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
