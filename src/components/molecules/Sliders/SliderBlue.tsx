import { Box, Tooltip } from '@chakra-ui/react';
import {
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import { useState } from 'react';
import { TextRegular } from '../Texts/TextRegular';

interface SliderBlueProps {
  sliderValue?: number;
}

export const SliderBlue: React.FC<SliderBlueProps & SliderProps> = ({
  sliderValue,
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      {...rest}
    >
      <SliderTrack bg="autoBlue.400" h="2px">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="autoBlue.400" />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="autoBlue.400"
        color="white"
        placement="top"
        isOpen={showTooltip}
        opacity={showTooltip ? '1' : '0'}
        transition="opacity 0.1s"
        label={
          <TextRegular pt="1" px="1">
            {sliderValue}
          </TextRegular>
        }
      >
        <SliderThumb boxSize={4} bg="autoBlue.400" zIndex={'0'} />
      </Tooltip>
    </Slider>
  );
};
