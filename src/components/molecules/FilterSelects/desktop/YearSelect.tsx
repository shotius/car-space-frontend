import { HStack, StackDivider, StackProps, VStack } from '@chakra-ui/layout';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { VerticalScrollable } from 'src/components/molecules/Wrappers/VerticalScrollable';
import { range } from 'src/utils/functions/range';
import { useYearSelect } from 'src/utils/hooks/useYearSelect';

interface YearSelectProps {
  searchOnClear?: boolean;
}

export const YearSelect: React.FC<YearSelectProps & StackProps> = ({
  searchOnClear = true,
  ...rest
}) => {
  const {
    areOptionsOpen,
    setAreOptionsOpen,
    yearFrom,
    yearTo,
    handleClose,
    placeholder,
    handleSelectYearFrom,
    handleSelectYearTo,
    isBlack,
    clearCb,
  } = useYearSelect({
    searchOnClear,
  });

  return (
    <SelectWrapper {...rest} areOptionsOpen={areOptionsOpen}>
      <CustomOverlay isActive={areOptionsOpen} onClick={handleClose} />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={clearCb}
          areOptionsSelected={!!(yearFrom || yearTo)}
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
            <TextRegular
              opacity={isBlack ? '1' : '0.5'}
              _placeholder={{ color: 'red' }}
            >
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
              <VerticalScrollable
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {range(1960, 2021)
                  .reverse()
                  .map((num) => (
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
              <VerticalScrollable
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {range(1960, 2021)
                  .reverse()
                  .map((num) => (
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
