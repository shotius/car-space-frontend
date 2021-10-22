import { Heading, HStack, StackDivider, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectEngineFrom,
  selectEnginTo
} from 'src/redux/features/auth/carFilterSlice';
import { TextButton } from '../Buttons/TextButton';
import { MobileFilterPopup } from '../MobileFIlterPopup';

interface MobileEnginePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileEnginePopup: React.FC<MobileEnginePopupProps> = ({
  isOpen,
  onClose,
}) => {
  // on the second visit user fill see last selections
  const { engineFrom: initEnginFrom, engineTo: initEnginTo } = useAppSelector(
    (state) => state.carFilterReducer
  );
  const [engineFrom, setEngineFrom] = useState(initEnginFrom || 0.5);
  const [engineTo, setEngineTo] = useState(initEnginTo || 0.5);
  const dispatch = useAppDispatch();

  // generate list of engine capacities
  const generatedEngines = (a: number, b: number) => {
    const list: number[] = [];
    for (let i = a; i <= b; i = parseFloat(((i * 100 + 10) / 100).toFixed(1))) {
      list.push(i);
    }
    return list;
  };

  // on fulter submit
  const submit = () => {
    dispatch(selectEngineFrom(engineFrom));
    dispatch(selectEnginTo(engineTo));
    onClose();
  };

  return (
    <MobileFilterPopup isOpen={isOpen} onClose={onClose} submit={submit}>
      <HStack h="full" divider={<StackDivider borderColor="autoGrey.400" />}>
        <VStack h="full" w="full" spacing="4">
          <Heading fontSize="16px" fontWeight="600">
            From
          </Heading>
          <VStack overflowY="scroll" h="full" w="full" spacing="4">
            {generatedEngines(0.5, 6).map((num) => (
              <TextButton
                fontSize="16px"
                key={num}
                lineHeight="21px"
                w="full"
                color={engineFrom === num ? 'autoOrange.400' : '#000'}
                onClick={() => {
                  setEngineFrom(num);
                  if (num >= engineTo) {
                    setEngineTo(num);
                  }
                }}
              >
                {num.toFixed(1)}
              </TextButton>
            ))}
          </VStack>
        </VStack>
        <VStack h="full" w="full" spacing="4">
          <Heading fontSize="16px" fontWeight="600">
            To
          </Heading>
          <VStack overflowY="scroll" h="full" w="full" spacing="4">
            {generatedEngines(0.5, 6).map((num) => (
              <TextButton
                fontSize="16px"
                key={num}
                lineHeight="21px"
                w="full"
                color={engineTo === num ? 'autoOrange.400' : '#000'}
                onClick={() => {
                  setEngineTo(num);
                  if (num <= engineFrom) {
                    setEngineFrom(num);
                  }
                }}
              >
                {num.toFixed(1)}
              </TextButton>
            ))}
          </VStack>
        </VStack>
      </HStack>
    </MobileFilterPopup>
  );
};
