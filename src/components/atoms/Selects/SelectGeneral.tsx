import { HStack, StackProps } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { SelectTrigger } from 'src/components/molecules/triggerers/SelectTrigger';
import { SelectContent } from 'src/components/molecules/Wrappers/SelectContent';
import { SelectOptions } from 'src/components/molecules/Wrappers/SelectOptions';
import { SelectWrapper } from 'src/components/molecules/Wrappers/SelectWrapper';

interface TransmissionSelectProps {
  selected: any[];
  label: string;
  clearSelected: () => void;
  onApply: () => void;
  size?: "lg" | "md"
}

export const SelectGeneral: React.FC<TransmissionSelectProps & StackProps> = ({
  selected,
  label,
  children,
  clearSelected,
  onApply,
  size, 
  ...rest
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>('');

  useEffect(() => {
    if (selected.length) {
      setPlaceholder(`${label}: ${selected.join(', ')}`);
    } else {
      setPlaceholder(label);
    }
  }, [selected]);

  const closeOptions = () => setAreOptionsOpen(false);

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <SelectOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          closeOptions();
          onApply();
        }}
      />
      <SelectContent>
        <SelectTrigger
          size={size}
          areOptionsOpen={areOptionsOpen}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            clearSelected();
            setAreOptionsOpen(false);
          }}
          areOptionsSelected={!!selected.length}
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
            <TextRegular opacity={areOptionsOpen ? '1' : '0.5'} noOfLines={1}>
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
