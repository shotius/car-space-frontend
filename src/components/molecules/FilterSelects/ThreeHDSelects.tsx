import { HStack, Stack, StackProps } from '@chakra-ui/react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CloseOutlineIcon } from 'src/components/atoms/Icons/CloseOutline';
import { FiltersIcon } from 'src/components/atoms/Icons/FiltersIcon';
import { Select } from 'src/components/atoms/Selects';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { SearchButton } from '../Buttons/SearchButton';
interface ThreeHDSelectsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ThreeHDSelects: React.FC<ThreeHDSelectsProps & StackProps> = ({
  isOpen,
  onToggle,
  p="8px 8px 8px 0px",
  bg = '#fff',
  direction = 'row',
  borderRadius = 'md',
  ...rest
}) => {
  return (
    <Stack
      p={p}
      bg={bg}
      direction={direction}
      borderRadius={borderRadius}
      alignItems="center"
      pl="0px"
      {...rest}
    >
      <Select placeholder="Brand"></Select>
      <DividerVertical
        height={['40px', null, null, '30px']}
        borderColor="gray.300"
        // margin="4"
      />
      <Select placeholder="Model"></Select>
      <DividerVertical
        height={['40px', null, null, '30px']}
        borderColor="gray.300"
        // margin="4"
      />
      <Select placeholder="Year"></Select>
      <HStack spacing={{ md: '0', xl: '2' }}>
        <SearchButton
          w={{ md: '140px', lg: '144px', '2xl': '211px' }}
          ml={[null, null, '0px', '16px']}
        />
        {!isOpen ? (
          <ButtonWithIcon
            icon={FiltersIcon}
            boxSize={[null, null, '10',null,  '10', '12']}
            onClick={onToggle}
            pr={[null, null, '0', '0', '-4']}
            pl={[null, null, '2', '12px', '0']}
          />
        ) : (
          <ButtonWithIcon
            icon={CloseOutlineIcon}
            boxSize={[null, null, '10',null,  '10', '12']}
            onClick={onToggle}
            p="0"
            pr={[null, null, '0', '0', '-4']}
            pl={[null, null, '2', '12px', '0']}
          />
        )}
      </HStack>
    </Stack>
  );
};
