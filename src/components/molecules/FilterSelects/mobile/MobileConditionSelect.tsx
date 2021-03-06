import { useDisclosure } from '@chakra-ui/react';
import { MobileConditionPopup } from 'src/components/molecules/MobileSelectPopups/MobileConditionPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppSelector, useAppDispatch } from 'src/redux/app/hook';
import { selectConditions } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface MobileConditionSelectProps {}

export const MobileConditionSelect: React.FC<MobileConditionSelectProps> =
  ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useAppDispatch();
    const { conditions: selection } = useAppSelector(
      (state) => state.selectedCarFilters
    );

    return (
      <>
        <MobileSelect
          onClick={onOpen}
          label={
            selection.length
              ? `Condition: ${capitalizeEach(selection.join('; '))}`
              : 'Condition'
          }
          hasValue={!!selection.length}
          onClear={() => dispatch(selectConditions([]))}
        />
        <MobileConditionPopup isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
