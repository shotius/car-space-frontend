import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { range } from 'src/utils/functions/range';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { TextButton } from '../Buttons/TextButton';
import { TextRegular } from '../Texts/TextRegular';
import { VerticalScrollable } from '../Wrappers/VerticalScrollable';

interface SelectProps {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.RefObject<HTMLButtonElement>;
}

export const MobileYearPopup: React.FC<SelectProps> = ({
  isOpen,
  onClose,
  finalFocusRef,
}) => {
  const initialRef = useRef<HTMLButtonElement | null>(null);
  const [yearFrom, setYearFrom] = useState<number>(0);
  const [yearTo, setYearTo] = useState<number>(0);
  const { yearFrom: initYearFrom, yearTo: initYearTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if we have filters saved in redux assign them to components state
    if (initYearFrom) {
      setYearFrom(initYearFrom);
    } else {
      setYearFrom(0);
    }
    if (initYearTo) {
      setYearTo(initYearTo);
    } else {
      setYearTo(0);
    }
  }, [initYearFrom, initYearTo]);

  // handler year from select
  const handleSelectYearFrom = (num: number) => {
    if (yearFrom === num) {
      setYearFrom(0);
    } else if (num >= yearTo) {
      setYearFrom(num);
      setYearTo(num);
    } else {
      setYearFrom(num);
    }
  };

  // hander year to select
  const handleSelectYearTo = (num: number) => {
    if (yearTo === num) {
      setYearTo(0);
      setYearFrom(0);
    } else if (num <= yearFrom) {
      setYearFrom(num);
      setYearTo(num);
    } else {
      setYearTo(num);
    }
  };

  const onSubmit = () => {
    if (yearFrom || yearTo) {
      dispatch(selectYearFrom(yearFrom));
      dispatch(selectYearTo(yearTo));
    }
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      placement="bottom"
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />

      <DrawerContent maxH="80%" borderTopRadius="16px" p="32px 48px 16px 48px">
        {/* drawer body */}
        <DrawerBody p="0">
          {/* list of car brands */}
          <HStack
            h="290px"
            w="full"
            divider={<StackDivider borderColor="autoGrey.400" />}
            pr="2px"
          >
            <VStack h="full" w="full" spacing="2">
              <TextRegular fontSize="16px" pr="4px">
                From
              </TextRegular>
              <VerticalScrollable>
                {range(2000, 2020).map((num) => (
                  <TextButton
                    fontSize="14px"
                    key={num}
                    p="2"
                    lineHeight="21px"
                    w="full"
                    color={yearFrom === num ? 'autoOrange.400' : '#000'}
                    onClick={() => handleSelectYearFrom(num)}
                    _hover={{
                      bg: 'autoGrey.100',
                    }}
                  >
                    {num}
                  </TextButton>
                ))}
              </VerticalScrollable>
            </VStack>
            <VStack h="full" w="full" spacing="2">
              <TextRegular fontSize="16px" pr="8px">
                To
              </TextRegular>
              <VerticalScrollable>
                {range(2000, 2020).map((num) => (
                  <TextButton
                    fontSize="14px"
                    p="2"
                    key={num}
                    lineHeight="21px"
                    w="full"
                    color={yearTo === num ? 'autoOrange.400' : '#000'}
                    onClick={() => handleSelectYearTo(num)}
                    _hover={{
                      bg: 'autoGrey.100',
                    }}
                  >
                    {num}
                  </TextButton>
                ))}
              </VerticalScrollable>
            </VStack>
          </HStack>
        </DrawerBody>
        {/* footer */}
        <DrawerFooter p="16px 0">
          <ButtonRegular ref={initialRef} p="0.5" onClick={onSubmit}>
            Apply
          </ButtonRegular>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
