import { HStack, StackDivider, StackProps, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { VerticalScrollable } from 'src/components/molecules/Wrappers/VerticalScrollable';
import { useAppDispatch } from 'src/redux/app/hook';
import {
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';

interface YearSelectProps {}

export const YearSelect: React.FC<YearSelectProps & StackProps> = ({
  ...rest
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [yearFrom, setYearFrom] = useState(0);
  const [yearTo, setYearTo] = useState(0);
  const [placeholder, setPlaceholder] = useState<string>('');
  const dispatch = useAppDispatch();

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (yearFrom || yearTo) {
      setPlaceholder(`Year:  ${yearFrom} - ${yearTo}`);
    } else {
      setPlaceholder(`Year`);
    }
  }, [yearFrom, yearTo]);

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

  // create range or nummbers
  const range = (from: number, to: number): number[] => {
    const arr = Array(to - from + 1).fill(0);
    const first = from;
    return arr.map((_, i) => i + first);
  };

  return (
    <SelectWrapper {...rest} areOptionsOpen={areOptionsOpen}>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
          dispatch(selectYearFrom(yearFrom));
          dispatch(selectYearTo(yearTo));
        }}
      />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            setYearTo(0);
            setYearFrom(0);
            dispatch(selectYearFrom(0));
            dispatch(selectYearTo(0));
            setPlaceholder('');
            setAreOptionsOpen(false);
          }}
          areOptionsSelected={!!(yearFrom && yearTo)}
          onClick={() => setAreOptionsOpen((open) => !open)}
        >
          <HStack
            pl="4"
            h="40px"
            w="full"
            _hover={{
              bg: 'autoGrey.200',
            }}
            borderRadius="8px"
          >
            <TextRegular opacity={areOptionsOpen ? '1' : '0.5'}>
              {placeholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
      <SelectOptions isOpen={areOptionsOpen} w="full">
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
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
