import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTypes } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileTypePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileTypePopup: React.FC<MobileTypePopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedType, setSelectedTypes] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { types: allTypes } = useAppSelector((state) => state.carsReducer);
  // already selected conditions
  const { types: initSelectedTypes } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedTypes.length) {
      setSelectedTypes(initSelectedTypes);
    }
  }, [initSelectedTypes]);

  // conditions filtered base on search word
  // if condition is empty it means it is not demaged so "New"
  const TypesToShow = () => allTypes.filter((type) => type);

  // checkbox change handler
  const onChangeHandler = (type: string) => {
    if (!selectedType.includes(type)) {
      setSelectedTypes(selectedType.concat(type));
    } else {
      setSelectedTypes(selectedType.filter((c) => c !== type));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectTypes(selectedType));
        onClose();
      }}
    >
      <VStack w="full" alignItems="flex-start" minH="80vh" spacing="16px">
        {TypesToShow().map((type) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedTypes?.includes(type)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(type);
            }}
            key={type}
          >
            {capitalizeEach(type)}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
