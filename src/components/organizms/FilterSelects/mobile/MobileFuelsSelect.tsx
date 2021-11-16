import { useDisclosure } from '@chakra-ui/react';
import { MobileFuelsPopup } from 'src/components/molecules/MobileSelectPopups/MobileFuelPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectFuels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface MobileFuelsSelectProps {}

export const MobileFuelsSelect: React.FC<MobileFuelsSelectProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const { fuels: selection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  return (
    <>
      <MobileSelect
        onClick={onOpen}
        label={
          selection.length
            ? `Fuel: ${capitalizeEach(selection.join(', '))}`
            : 'Fuel Types'
        }
        hasValue={!!selection.length}
        onClear={() => dispatch(selectFuels([]))}
      />
      <MobileFuelsPopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};
