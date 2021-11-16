import { HStack, IconButton, Stack, StackProps } from '@chakra-ui/react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CloseOutlineIcon } from 'src/components/atoms/Icons/CloseOutline';
import { FiltersIcon } from 'src/components/atoms/Icons/FiltersIcon';
import { Select } from 'src/components/atoms/Selects';
import { SearchButton } from '../../molecules/Buttons/SearchButton';
interface ThreeHDSelectsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ThreeHDSelects: React.FC<ThreeHDSelectsProps & StackProps> = ({
  isOpen,
  onToggle,
  p = '2',
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
          mr="2"
        />
        {!isOpen ? (
          <IconButton
            onClick={onToggle}
            icon={<FiltersIcon />}
            aria-label="open advanced filters"
            bg="white"
            _hover={{
              bg: "white"
            }}
            _active={{
              bg: "white"
            }}
          />
        ) : (
          <IconButton
            icon={<CloseOutlineIcon />}
            onClick={onToggle}
            aria-label ="close advanced filters"
            bg="white"
            _hover={{
              bg: "white"
            }}
            _active={{
              bg: "white"
            }}
          />
        )}
      </HStack>
    </Stack>
  );
};
