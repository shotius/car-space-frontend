import { Box } from '@chakra-ui/react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps,
} from '@chakra-ui/slider';

interface SliderBlueProps {}

export const SliderBlue: React.FC<SliderBlueProps & SliderProps> = ({
  ...rest
}) => {
  return (
    <Slider {...rest}>
      <SliderTrack bg="autoBlue.400" h="2px">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="autoBlue.400" />
      </SliderTrack>
      <SliderThumb boxSize={4} bg="autoBlue.400" />
    </Slider>
  );
};
