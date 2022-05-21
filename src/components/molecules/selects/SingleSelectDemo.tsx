import { HStack } from '@chakra-ui/react';
import { SyntheticEvent, useEffect, useReducer, useState } from 'react';
import { TextButton } from '../Buttons/TextButton';
import { CustomOverlay } from '../overlays/CustomOverlay';
import { ScrollableList } from '../ScrollableList';
import { TextRegular } from '../Texts/TextRegular';
import { SelectTrigger } from '../triggerers/SelectTrigger';
import { SelectContent } from '../Wrappers/SelectContent';
import { SelectOptions } from '../Wrappers/SelectOptions';
import { SelectWrapper } from '../Wrappers/SelectWrapper';

type ValueType = string;
export interface SingleSelectProps {
  value: ValueType;
  onChange: (value: ValueType) => void;
  options: ValueType[];
  placeholder?: string;
}

export const SingleSelectDemo: React.FC<SingleSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [areOptionsOpen, toggleOptions] = useReducer(
    (isOpen) => !isOpen,
    false
  );
  const [defaultPlaceholder, setPlaceholder] = useState(placeholder || '');

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    +value ? setPlaceholder(value.toString()) : setPlaceholder(placeholder || '');
  }, [value]);

  const handleClose = () => {
    toggleOptions();
  };

  const clearCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    onChange('');
    setPlaceholder('');
  };

  const handleSelect = (value: string) => {
    handleClose();
    onChange(value);
  };

  const isBlack = +value || areOptionsOpen;

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <CustomOverlay isActive={areOptionsOpen} onClick={handleClose} />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={clearCb}
          areOptionsSelected={!!+value}
          onClick={toggleOptions}
        >
          <HStack
            pl="4"
            h="40px"
            w="full"
            bg="autoGrey.200"
            _hover={{
              bg: 'autoGrey.100',
            }}
            borderRadius="8px"
          >
            <TextRegular opacity={isBlack ? '1' : '0.5'}>
              {defaultPlaceholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
        <SelectOptions isOpen={areOptionsOpen} w="full">
          <ScrollableList label="">
            {options.map((value) => {
              return (
                <TextButton
                  fontSize="14px"
                  p="2"
                  key={value}
                  lineHeight="21px"
                  w="full"
                  onClick={() => handleSelect(value)}
                  _hover={{
                    bg: 'autoGrey.100',
                  }}
                >
                  {value}
                </TextButton>
              );
            })}
          </ScrollableList>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
