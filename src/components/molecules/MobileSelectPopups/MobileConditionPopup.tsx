import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectConditions } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileConditionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileConditionPopup: React.FC<MobileConditionPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { conditions: allConditions } = useAppSelector(
    (state) => state.carsReducer
  );
  // already selected conditions
  const { conditions: initSelectedConditions } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedConditions.length) {
      setSelectedConditions(initSelectedConditions);
    }
  }, [initSelectedConditions]);

  // conditions filtered base on search word
  // if condition is empty it means it is not demaged so "New"
  const conditionsToShow = () => allConditions.filter((condition) => condition);

  // checkbox change handler
  const onChangeHandler = (condition: string) => {
    if (!selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.concat(condition));
    } else {
      setSelectedConditions(selectedConditions.filter((c) => c !== condition));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectConditions(selectedConditions));
        onClose();
      }}
    >
      <VStack w="full" alignItems="flex-start" minH="80vh" spacing="16px">
        {conditionsToShow().map((condition) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedConditions?.includes(condition)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(condition);
            }}
            key={condition}
          >
            {capitalizeEach(condition)}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
