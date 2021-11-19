import { Box, Heading, HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { VerticalScrollable } from 'src/components/molecules/Wrappers/VerticalScrollable';

interface YearSelectProps {}

export const YearSelect: React.FC<YearSelectProps> = ({}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<{
    yearFrom: number | null;
    yearTo: number | null;
  }>({ yearFrom: null, yearTo: null });
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  // const dispatch = useAppDispatch();

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (selected.yearFrom && selected.yearTo) {
      setPlaceholder(`Year:  ${selected.yearFrom} - ${selected.yearTo}`);
    } else {
      setPlaceholder(`Year`);
    }
  }, [selected]);

  // handler year from select
  const handleSelectYearFrom = (num: number) => {
    if (selected.yearTo && num >= selected.yearTo) {
      setSelected({ yearFrom: num, yearTo: num });
    } else {
      setSelected({ ...selected, yearFrom: num });
    }
  };

  // hander year to select
  const handleSelectYearTo = (num: number) => {
    if (selected.yearFrom && num <= selected.yearFrom) {
      setSelected({ yearTo: num, yearFrom: num });
    } else {
      setSelected({ ...selected, yearTo: num });
    }
  };

  // create range or nummbers
  const range = (from: number, to: number): number[] => {
    const arr = Array(to - from + 1).fill(0);
    const first = from;
    return arr.map((num, i) => (num = i + first));
  };

  return (
    <SelectWrapper>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
        }}
      />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation()
            setSelected({yearFrom: null, yearTo: null})
            setPlaceholder('')
            setAreOptionsOpen(false)
          }}
          areOptionsSelected={!!(selected.yearFrom && selected.yearTo)}
          onClick={() => setAreOptionsOpen((open) => !open)}
        >
          <HStack
            pl="2"
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
            h="full"
            w="full"
            divider={<StackDivider borderColor="autoGrey.400" />}
            pr="2px"
          >
            <VStack h="full" w="full" spacing="4">
              <TextRegular fontSize="16px">From</TextRegular>
              <VerticalScrollable>
                {range(2000, 2020).map((num) => (
                  <TextButton
                    fontSize="14px"
                    key={num}
                    p="2"
                    lineHeight="21px"
                    w="full"
                    color={
                      selected.yearFrom === num ? 'autoOrange.400' : '#000'
                    }
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
            <VStack h="full" w="full" spacing="4">
              <TextRegular fontSize="16px">To</TextRegular>
              <VerticalScrollable>
                {range(2000, 2020).map((num) => (
                  <TextButton
                    fontSize="14px"
                    p="2"
                    key={num}
                    lineHeight="21px"
                    w="full"
                    color={selected.yearTo === num ? 'autoOrange.400' : '#000'}
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
