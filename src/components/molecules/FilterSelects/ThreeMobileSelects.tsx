import { Stack } from '@chakra-ui/layout';
import { Select } from 'src/components/atoms/Select';
 ;

interface ThreeMobileSelectsProps {}

export const ThreeMobileSelects: React.FC<ThreeMobileSelectsProps> = () => {
  return (
    <Stack display={['flex', 'none']}>
      <Select placeholder="Brand"></Select>
      <Select placeholder="Model"></Select>
      <Select placeholder="Year"></Select>
      <Select placeholder="Condition"></Select>
    </Stack>
  );
};
