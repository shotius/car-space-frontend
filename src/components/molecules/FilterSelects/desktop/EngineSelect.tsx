import { VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { Transmission } from 'src/redux/features/auth/types';
import { HeadingSecondary } from '../../Headings/HeadingSecondary';

interface EngineSelectProps {}

export const EngineSelect: React.FC<EngineSelectProps> = ({}) => {
  const [selected, setSelected] = useState<Transmission[]>([]);

  return (
    <SelectGeneral
      selected={selected}
      label="Engine"
      clearSelected={() => setSelected([])}
      onApply={() => {}}
      top="35px"
      bg="red"
    >
      <VStack p="14px">
        <HeadingSecondary>Needs Content</HeadingSecondary>
      </VStack>
    </SelectGeneral>
  );
};
