import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectCylinders } from 'src/redux/features/auth/selectedCarFilterSlice';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileCylinderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileCylinderPopup: React.FC<MobileCylinderPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCylinders, setSelectedCylinders] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { cylinders: allCylinders } = useAppSelector(
    (state) => state.carsReducer
  );
  // already selected conditions
  const { cylinders: initSelectedCylinders } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedCylinders.length) {
      setSelectedCylinders(initSelectedCylinders);
    }
  }, [initSelectedCylinders]);

  // conditions filtered base on search word
  // if condition is empty it means it is not demaged so "New"
  const cylindersToShow = () => allCylinders.filter((cylinder) => cylinder);

  // checkbox change handler
  const onChangeHandler = (cylinder: string) => {
    if (!selectedCylinders.includes(cylinder)) {
      setSelectedCylinders(selectedCylinders.concat(cylinder));
    } else {
      setSelectedCylinders(selectedCylinders.filter((c) => c !== cylinder));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectCylinders(selectedCylinders));
        onClose();
      }}
    >
      <VStack w="full" alignItems="flex-start" maxH="80vh" spacing="16px">
        {cylindersToShow().map((cylinder) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedCylinders?.includes(cylinder)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(cylinder);
            }}
            key={cylinder}
          >
            {cylinder}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
