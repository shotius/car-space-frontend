import { useDisclosure } from '@chakra-ui/react';
import { MobileSalesStatusPopup } from 'src/components/molecules/MobileSelectPopups/MobileSalesStatusPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectSalesStatus
} from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileSalesStatusSelectProps {}

export const MobileSalesStatusSelect: React.FC<MobileSalesStatusSelectProps> =
  ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useAppDispatch();
    const { salesStatus: selection } = useAppSelector(
      (state) => state.selectedCarFilters
    );
    return (
      <>
        <MobileSelect
          onClick={onOpen}
          label={selection.length ? `Sales Status: ${selection.join(', ')}` : 'Sales Status'}
          hasValue={!!selection.length}
          onClear={() => dispatch(selectSalesStatus([]))}
        />
        <MobileSalesStatusPopup isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
