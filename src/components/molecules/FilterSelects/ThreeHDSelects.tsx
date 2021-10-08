import {
  HStack, Stack,
  StackProps
} from '@chakra-ui/react';
import { DividerVertical } from 'components/atoms/Divider';
import { FiltersIcon } from 'components/atoms/Icons/FiltersIcon';
import { Select } from 'components/atoms/Select';
import React from 'react';
import { IconWithButton } from '../IconWithButton';
import { SearchButton } from '../SearchButton';

interface ThreeHDSelectsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ThreeHDSelects: React.FC<ThreeHDSelectsProps & StackProps> = ({
  isOpen,
  onToggle,
  p = { md: "2", lg: '2', xl: '4' },
  bg = 'white',
  direction = 'row',
  borderRadius = 'md',
  display = { base: 'none', md: 'flex' },
  ...rest
}) => {
  return (
    <Stack
      p={p}
      bg={bg}
      display={display}
      direction={direction}
      borderRadius={borderRadius}
      alignItems="center"
      h={{lg: "82px", xl: "90px"}}
      {...rest}
    >
      <Select placeholder="Brand"></Select>
      <DividerVertical
        height={['40px', null, null, '50px']}
        borderColor="gray.300"
      />
      <Select placeholder="Model"></Select>
      <DividerVertical
        height={['40px', null, null, '50px']}
        borderColor="gray.300"
      />
      <Select placeholder="Year"></Select>
      <HStack spacing={{ md: '0', xl: "2"}} pr="0">
        <SearchButton h={{ md: '40px', lg: '50px', xl: '62px' }} w={{lg: '148px', xl: "211px"}} />
        <IconWithButton icon={FiltersIcon} boxSize={[null, null,'10', '12', '16']} onClick={onToggle}/>
      </HStack>
    </Stack>
  );
};
