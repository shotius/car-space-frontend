import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { Transmission } from 'src/redux/features/auth/types';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface TransmissionSelectProps {}

export const TransmissionSelect: React.FC<TransmissionSelectProps> = ({}) => {
  const [selected, setSelected] = useState<Transmission[]>([]);

  const transmissions = ['Manual', 'Automatic', 'CVT'] as const;

  const handleSelect = (transmission: Transmission) => {
    if (selected.includes(transmission)) {
      setSelected(selected.filter((trans) => trans !== transmission));
    } else {
      setSelected([transmission].concat(selected));
    }
  };

  return (
    <SelectGeneral
      selected={selected}
      label="Transmission"
      clearSelected={() => setSelected([])}
    >
      <SelectContent>
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
      </SelectContent>
    </SelectGeneral>
  );
};
