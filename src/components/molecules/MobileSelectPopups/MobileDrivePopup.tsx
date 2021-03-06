import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectDrives } from 'src/redux/features/auth/selectedCarFilterSlice';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileDrivesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrivesPopup: React.FC<MobileDrivesPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedDrives, setSelectedDrives] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { drives: allDrives } = useAppSelector((state) => state.carsReducer);
  // already selected conditions
  const { drives: initSelectedDrives } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedDrives.length) {
      setSelectedDrives(initSelectedDrives);
    }
  }, [initSelectedDrives]);

  // conditions filtered base on search word
  // if condition is empty it means it is not demaged so "New"
  const drivesToShow = () => allDrives.filter((drive) => drive);

  // checkbox change handler
  const onChangeHandler = (drive: string) => {
    if (!selectedDrives.includes(drive)) {
      setSelectedDrives(selectedDrives.concat(drive));
    } else {
      setSelectedDrives(selectedDrives.filter((c) => c !== drive));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectDrives(selectedDrives));
        onClose();
      }}
    >
      <VStack w="full" alignItems="flex-start" spacing="16px" maxH="80vh">
        {drivesToShow().map((drive) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedDrives?.includes(drive)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(drive);
            }}
            key={drive}
          >
            {drive}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
