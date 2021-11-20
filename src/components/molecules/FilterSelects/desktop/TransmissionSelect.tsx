import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { HStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { Transmission } from 'src/redux/features/auth/types';
import { SelectOverlay } from '../../overlays/SelectOverlay';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectTrigger } from '../../triggerers/SelectTrigger';
import { SelectContent } from '../../Wrappers/SelectContent';
import { SelectOptions } from '../../Wrappers/SelectOptions';
import { SelectWrapper } from '../../Wrappers/SelectWrapper';

interface TransmissionSelectProps {}

export const TransmissionSelect: React.FC<TransmissionSelectProps> = ({}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Transmission[]>([]);
  const [placeholder, setPlaceholder] = useState('');

  const transmissions = ['Manual', 'Automatic', 'CVT'] as const;

  useEffect(() => {
    if (selected.length) {
      setPlaceholder(`${selected.join(', ')}`);
    } else {
      setPlaceholder(`Transmissions`);
    }
  }, [selected]);

  const handleSelect = (transmission: Transmission) => {
    if (selected.includes(transmission)) {
      setSelected(selected.filter((trans) => trans !== transmission));
    } else {
      setSelected([transmission].concat(selected));
    }
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
            if (e.stopPropagation) e.stopPropagation();
            setSelected([])
            setAreOptionsOpen(false);
          }}
          areOptionsSelected={!!selected.length}
          onClick={() => setAreOptionsOpen((open) => !open)}
        >
          <HStack
            pl="4"
            pr="4"
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
        <SelectOptions isOpen={areOptionsOpen} top="35px">
          {transmissions.map((trans) => (
            <Button
              w="full"
              p="4"
              borderRadius="none"
              display="flex"
              justifyContent="flex-start"
              variant="ghost"
              _hover={{
                bg: 'autoGrey.100',
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(trans);
              }}
            >
              <Checkbox
                colorScheme="autoOrange"
                isChecked={selected?.includes(trans)}
                key={trans}
              >
                <TextRegular>{trans}</TextRegular>
              </Checkbox>
            </Button>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
