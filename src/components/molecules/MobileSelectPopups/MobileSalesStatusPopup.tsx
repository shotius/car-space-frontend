import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectSalesStatus } from 'src/redux/features/auth/selectedCarFilterSlice';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileSalesStatusPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSalesStatusPopup: React.FC<MobileSalesStatusPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSalesStatus, setSelectedSalesStatus] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { salesStatus: allSalesStatuses } = useAppSelector(
    (state) => state.carsReducer
  );
  // already selected conditions
  const { salesStatus: initSelectedStatuses } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedStatuses.length) {
      setSelectedSalesStatus(initSelectedStatuses);
    }
  }, [initSelectedStatuses]);

  // checkbox change handler
  const onChangeHandler = (status: string) => {
    if (!selectedSalesStatus.includes(status)) {
      setSelectedSalesStatus(selectedSalesStatus.concat(status));
    } else {
      setSelectedSalesStatus(selectedSalesStatus.filter((c) => c !== status));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectSalesStatus(selectedSalesStatus));
        onClose();
      }}
    >
      <VStack w="full" alignItems="flex-start" maxH="80vh" spacing="16px">
        {allSalesStatuses.map((status) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedStatuses?.includes(status)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(status);
            }}
            key={status}
          >
            {status}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
