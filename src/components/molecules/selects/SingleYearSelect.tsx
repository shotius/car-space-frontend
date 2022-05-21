import { HStack } from '@chakra-ui/react';
import { SyntheticEvent, useEffect, useReducer, useState } from 'react';
import { CustomOverlay } from '../overlays/CustomOverlay';
import { TextRegular } from '../Texts/TextRegular';
import { SelectTrigger } from '../triggerers/SelectTrigger';
import { SelectContent } from '../Wrappers/SelectContent';
import { SelectOptions } from '../Wrappers/SelectOptions';
import { SelectWrapper } from '../Wrappers/SelectWrapper';
import { YearSelectScrollable } from '../YearSelectScrollable';

interface SingleYearSelectProps {
  value: number;
  onChange: (num: number) => void;
}

export const SingleYearSelect: React.FC<SingleYearSelectProps> = ({
  value,
  onChange,
}) => {
  const [areOptionsOpen, toggleOptions] = useReducer(
    (isOpen) => !isOpen,
    false
  );
  const [placeholder, setPlaceholder] = useState<string>('');

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (value) {
      setPlaceholder(value.toString());
      console.log('[YES] value exists', value);
    } else {
      console.log('[NO] value not exists')
      setPlaceholder(`Year`);
    }
  }, [value]);

  // handler year from select
  const handleSelectYearFrom = (num: number) => {
    toggleOptions();
    onChange(num);
  };

  const handleClose = () => {
    toggleOptions();
  };

  const clearCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    onChange(0);
    setPlaceholder('');
  };

  const isBlack = value || areOptionsOpen;

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <CustomOverlay isActive={areOptionsOpen} onClick={handleClose} />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={clearCb}
          areOptionsSelected={!!value}
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
              {placeholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
        <SelectOptions isOpen={areOptionsOpen} w="full">
          <YearSelectScrollable
            label=""
            yearFrom={1960}
            yearTo={new Date().getFullYear()}
            handleYearSelect={handleSelectYearFrom}
          />
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
