import { useDisclosure } from '@chakra-ui/react';
import { MobileCarKyesPopup } from 'src/components/molecules/MobileSelectPopups/MobileCarKeysPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectCarKeys } from 'src/redux/features/auth/selectedCarFilterSlice';
import { HasKeys } from '../../../../../../server/shared_with_front/contants';

interface MobileCarKeysSelectProps {}

export const MobileCarKeysSelect: React.FC<MobileCarKeysSelectProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const { keys: selection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  return (
    <>
      <MobileSelect
        onClick={onOpen}
        label={selection ? `Keys: ${selection}` : 'Keys'}
        hasValue={!!selection}
        onClear={() => dispatch(selectCarKeys(HasKeys.NO))}
      />
      <MobileCarKyesPopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};
