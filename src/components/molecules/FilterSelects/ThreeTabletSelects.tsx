import { Stack, StackDivider, StackProps } from '@chakra-ui/react';
import { Select } from 'src/components/atoms/Selects';
 ;

interface ThreeTabletSelectsProps {}

export const ThreeTabletSelects: React.FC<
  ThreeTabletSelectsProps & StackProps
> = ({  
  p = '1',
  bg = 'white',
  direction = 'row',
  borderRadius = 'md',
  display=['none', 'flex',  'none'],
  ...rest
}) => {
  return (
    <Stack
      p={p}
      bg={bg}
      display={display}
      direction={direction}
      borderRadius={borderRadius}
      divider={<StackDivider />}
      {...rest}
    >
      <Select placeholder="Brand"></Select>
      <Select placeholder="Model"></Select>
      <Select placeholder="Year"></Select>
    </Stack>
  );
};
