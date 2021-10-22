import { Checkbox } from '@chakra-ui/checkbox';
import { VStack } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay
} from '@chakra-ui/modal';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTranssmision } from 'src/redux/features/auth/carFilterSlice';
import { Transmission } from 'src/redux/features/auth/types';
import { ButtonRegular } from '../Buttons/ButtonRegular';

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
    const [selectedTransmissions, setSelectedTransmissions] = useState<
      Transmission[]
    >(initialSelection);
    
    console.log('initialSelection:', initialSelection, 'selected', selectedTransmissions)

    useEffect(() => {
      setSelectedTransmissions(initialSelection)
    }, [])

    const dispatch = useAppDispatch();

    // list of all gategories
    const transmissions = ['Manual', 'Automatic', 'CVT'] as const;

    // checkbox change handler
    const onChangeHandler = (tr: Transmission) => {
      if (!selectedTransmissions.includes(tr)) {
        setSelectedTransmissions([...selectedTransmissions, tr]);
      } else {
        const arr = selectedTransmissions.filter((item) => item != tr);
        setSelectedTransmissions(arr);
      }
    };

    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent p="32px 48px 16px 48px" borderTopRadius="16px">
          <DrawerBody pl="0" overflow="visible">
            <VStack w="full" alignItems="flex-start">
              {transmissions.map((tr) => (
                <Checkbox
                  colorScheme="autoOrange"
                  defaultChecked={initialSelection?.includes(tr)}
                  onChange={(e) => {
                    e.preventDefault()
                    onChangeHandler(tr)
                  }}
                  key={tr}
                >
                  {tr}
                </Checkbox>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter p="16px 0">
            <ButtonRegular
              onClick={() => {
                console.log('selected', selectedTransmissions)
                dispatch(selectTranssmision(selectedTransmissions));
                onClose();
              }}
            >
              Apply
            </ButtonRegular>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };
