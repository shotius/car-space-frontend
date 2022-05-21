import { HStack, StackDivider, StackProps } from '@chakra-ui/layout';
import { ButtonProps } from '@chakra-ui/react';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { range } from 'src/utils/functions/range';
import { useYearSelect } from 'src/utils/hooks/useYearSelect';
import { ScrollableList } from '../../ScrollableList';
import { YearSelectScrollable } from '../../YearSelectScrollable';

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
            <YearSelectScrollable
              label="From"
              yearFrom={1960}
              yearTo={new Date().getFullYear()}
              handleYearSelect={handleSelectYearFrom}
            />
            <ScrollableList label="To">
              {range(1960, 2021)
                .reverse()
                .map((num) => (
                  <YearSelectButton
                    num={num}
                    key={num}
                    onClick={() => handleSelectYearTo(num)}
                    color={yearTo === num ? 'autoOrange.400' : '#000'}
                  />
                ))}
            </ScrollableList>
          </HStack>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};

type YearSelectButtonProps = {
  num: number;
  onClick: () => void;
};

export const YearSelectButton: React.FC<
  YearSelectButtonProps & ButtonProps
> = ({ num, onClick, color }) => {
  return (
    <TextButton
      fontSize="14px"
      p="2"
      key={num}
      lineHeight="21px"
      w="full"
      color={color}
      onClick={onClick}
      _hover={{
        bg: 'autoGrey.100',
      }}
    >
      {num}
    </TextButton>
  );
};
