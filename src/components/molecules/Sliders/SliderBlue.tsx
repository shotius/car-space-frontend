import { Box, SliderMark, Tooltip } from '@chakra-ui/react';
import {
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import { useMemo, useState } from 'react';
import { range } from 'src/utils/functions/range';
import { TextRegular } from '../Texts/TextRegular';
import { CustomSliderMark } from './SliderMark';
import { SliderToolptip } from './SliderToolptip';

interface SliderBlueProps {
  sliderValue?: number;
  showMarks?: boolean;
}

export const SliderBlue: React.FC<SliderBlueProps & SliderProps> = ({
  sliderValue,
  showMarks = false,
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const numberForMarks = useMemo(
    () => (rest.max ? rest.max - 1 : 1),
    [rest.max]
  );

  return (
    <Slider
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      {...rest}
    >
      {/* Marks  */}
      {showMarks
        ? range(1, numberForMarks).map((value) => (
            <CustomSliderMark value={value} key={value} />
          ))
        : null}
      {/* Track  */}
      <SliderTrack bg="#77798c" h="2px">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="#77798c" />
      </SliderTrack>

      <SliderToolptip
        isOpen={showTooltip}
        label={
          <TextRegular pt="1" px="1">
            {sliderValue}
          </TextRegular>
        }
      >
        <SliderThumb boxSize={4} bg="autoBlue.400" zIndex={'0'} />
      </SliderToolptip>
    </Slider>
  );
};
