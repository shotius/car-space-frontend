import { Checkbox } from '@chakra-ui/checkbox';
import { VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTranssmision } from 'src/redux/features/auth/carFilterSlice';
import { Transmission } from 'src/redux/features/auth/types';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileTransmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileTransmissionPopup: React.FC<MobileTransmissionPopupProps> =
  ({ isOpen, onClose }) => {
    // if user opens filter second types last selection will be saved
    const { transsmision: initialSelection } = useAppSelector(
      (state) => state.carFilterReducer
    );
    // state
    const [selectedTransmissions, setSelectedTransmissions] =
      useState<Transmission[]>(initialSelection);

    const dispatch = useAppDispatch();
    
    // list of all gategories
    const transmissions = ['Manual', 'Automatic', 'CVT'] as const;

    useEffect(() => {
      setSelectedTransmissions(initialSelection);
    }, []);

    // checkbox change handler
    const onChangeHandler = (tr: Transmission) => {
      if (!selectedTransmissions.includes(tr)) {
        setSelectedTransmissions([...selectedTransmissions, tr]);
      } else {
        const arr = selectedTransmissions.filter((item) => item != tr);
        setSelectedTransmissions(arr);
      }
    };

    const submit = () => {
      dispatch(selectTranssmision(selectedTransmissions));
      onClose();
    };
    return (
      <MobileFilterPopup isOpen={isOpen} onClose={onClose} submit={submit}>
        <VStack w="full" alignItems="flex-start">
          {transmissions.map((tr) => (
            <Checkbox
              colorScheme="autoOrange"
              defaultChecked={initialSelection?.includes(tr)}
              onChange={(e) => {
                e.preventDefault();
                onChangeHandler(tr);
              }}
              key={tr}
            >
              {tr}
            </Checkbox>
          ))}
        </VStack>
      </MobileFilterPopup>
    );
  };
