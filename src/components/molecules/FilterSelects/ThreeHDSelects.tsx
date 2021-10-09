import { HStack, Stack, StackProps } from '@chakra-ui/react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CloseOutlineIcon } from 'src/components/atoms/Icons/CloseOutline';
import { FiltersIcon } from 'src/components/atoms/Icons/FiltersIcon';
import { Select } from 'src/components/atoms/Select';
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
  p = { md: '2', lg: '4', xl: '4' },
  bg = '#fff',
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
      <HStack spacing={{ md: '0', xl: '2' }}>
        <SearchButton w={{ md: "140px", lg: '148px', xl: '211px' }} />
        {!isOpen ? (
          <IconWithButton
            icon={FiltersIcon}
            boxSize={[null, null, '12', '12', '16']}
            onClick={onToggle}
            pr={[null, null, '0', '-2', '-4']}
            pl={[null, null, '2', '4', '2']}
          />
        ) : (
          <IconWithButton
            icon={CloseOutlineIcon}
            boxSize={[null, null, '12', '12', '16']}
            onClick={onToggle}
            pr={[null, null, '0', '-2', '-4']}
            pl={[null, null, '2', '4', '2']}
          />
        )}
      </HStack>
    </Stack>
  );
};
