import { Box, Heading, HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';

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

  const handleSelectYearFrom = (num: number) => {
    setPlaceholder(`${selected.yearFrom} - ${selected.yearTo} (from - to)`);
    setSelected({ ...selected, yearFrom: num });
    if (selected.yearTo && num >= selected.yearTo) {
      setSelected({ ...selected, yearTo: num });
    }
  };
  const handleSelectYearTo = (num: number) => {
    setPlaceholder(`${selected.yearFrom} - ${selected.yearTo} (from - to)`);
    setSelected({ ...selected, yearTo: num });
    if (selected.yearFrom && num <= selected.yearFrom) {
      setSelected({ ...selected, yearFrom: num });
    }
  };

  const range = (from: number, to: number): number[] => {
    // const arr = Array(from - to).fill('_', from, to);
    const arr = [1,2,32,3,4,45,55,4]
    return arr;
    // const first = from
    // return arr.map((num, i) => num )
  };

  return (
    <SelectWrapper>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false)
          // if (selected.yearTo && selected.yearFrom) {
          //   setPlaceholder(
          //     `${selected.yearFrom} - ${selected.yearTo} (from - to)`
          //   );
          // }
        }}
      />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={() => {}}
          selectedValues={selected}
        >
          <Box
            h="44px"
            w="full"
            placeholder={placeholder}
            onClick={() => setAreOptionsOpen((open) => !open)}
          ></Box>
        </SelectTrigger>
        <SelectOptions isOpen={areOptionsOpen} w="full">
          <HStack
            h="full"
            w="full"
            divider={<StackDivider borderColor="autoGrey.400" />}
          >
            <VStack h="full" w="full" spacing="4">
              <Heading fontSize="16px" fontWeight="600">
                From
              </Heading>
              <VStack overflowY="scroll" h="full" w="full" spacing="4">
                {range(2000, 2020).map((num) => (
                  <TextButton
                    fontSize="16px"
                    key={num}
                    lineHeight="21px"
                    w="full"
                    color={
                      selected.yearFrom === num ? 'autoOrange.400' : '#000'
                    }
                    onClick={() => handleSelectYearFrom(num)}
                  >
                    {num}
                  </TextButton>
                ))}
              </VStack>
            </VStack>
            <VStack h="full" w="full" spacing="4">
              <Heading fontSize="16px" fontWeight="600">
                To
              </Heading>
              <VStack overflowY="scroll" h="full" w="full" spacing="4">
                {range(2000, 2020).map((num) => (
                  <TextButton
                    fontSize="16px"
                    key={num}
                    lineHeight="21px"
                    w="full"
                    color={selected.yearTo === num ? 'autoOrange.400' : '#000'}
                    onClick={() => handleSelectYearTo(num)}
                  >
                    {num}
                  </TextButton>
                ))}
              </VStack>
            </VStack>
          </HStack>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
