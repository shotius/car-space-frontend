import { HStack, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectCarKeys
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { HasKeys } from '../../../../../server/shared_with_front/contants';
import { Keys } from '../../../../../server/shared_with_front/types/types-shared';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';
import { TextRegular } from '../Texts/TextRegular';

interface MobileCarKyesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileCarKyesPopup: React.FC<MobileCarKyesPopupProps> = ({
  isOpen,
  onClose,
}) => {
  // if user opens filter second types last selection will be saved
  const { keys: initialSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  // state
  const [selectedKeys, setSelectedKeys] = useState<Keys | null>(
    initialSelection
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedKeys(initialSelection);
  }, []);

  const submit = () => {
    if (selectedKeys) {
      dispatch(selectCarKeys(selectedKeys));
    }
    onClose();
  };
  return (
    <MobileFilterPopup isOpen={isOpen} onClose={onClose} onSubmit={submit}>
      <VStack w="full" alignItems="flex-start">
        <HStack>
          <input
            type="radio"
            name="has_keys"
            value="YES"
            checked={selectedKeys === 'YES'}
            onChange={() => setSelectedKeys(HasKeys.YES)}
          />
          <TextRegular>Yes</TextRegular>
        </HStack>
        <HStack>
          <input
            type="radio"
            name="has_keys"
            value="NO"
            checked={selectedKeys === 'NO'}
            onChange={() => setSelectedKeys(HasKeys.NO)}
          />
          <TextRegular>No</TextRegular>
        </HStack>
      </VStack>
    </MobileFilterPopup>
  );
};
