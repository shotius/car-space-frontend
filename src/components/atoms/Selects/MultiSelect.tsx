import { HStack, StackProps } from '@chakra-ui/layout';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';
import { useMultiSelect } from 'src/utils/hooks/useMultiSelect';

interface SelectProps {
  selected: any[];
  label: string;
  clearSelected: () => void;
  onApply: () => void;
  size?: 'lg' | 'md';
}

export const MultiSelect: React.FC<SelectProps & StackProps> = ({
  selected,
  label,
  children,
  clearSelected,
  onApply,
  size,
  ...rest
}) => {
  const {
    areOptionsOpen,
    setAreOptionsOpen,
    placeholder,
    clearCb,
    handeClose,
    areOptionsSelected,
    isBlack,
  } = useMultiSelect({
    selected,
    label,
    onApply,
    clearSelected,
  });

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <CustomOverlay isActive={areOptionsOpen} onClick={handeClose} />
      <SelectContent>
        <SelectTrigger
          size={size}
          areOptionsOpen={areOptionsOpen}
          clearCb={clearCb}
          areOptionsSelected={areOptionsSelected}
          onClick={() => setAreOptionsOpen((open) => !open)}
        >
          <HStack
            pl="4"
            pr="28px"
            h="40px"
            w="full"
            bg="white"
            _hover={{
              bg: 'autoGrey.200',
            }}
            borderRadius="8px"
          >
            <TextRegular opacity={isBlack ? '1' : '0.5'} noOfLines={1}>
              {placeholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
        <SelectOptions isOpen={areOptionsOpen} {...rest}>
          {children}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
