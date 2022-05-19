import { Box } from '@chakra-ui/react';
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
  const numberForMarks = useMemo(() => (rest.max ? rest.max : 1), [rest.max]);

  const thumbPosition = useMemo(
    () => ((sliderValue! - 1) / (rest.max! - 1)) * 100,
    [sliderValue]
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
            <CustomSliderMark
              className="loanSliderMark"
              value={value}
              key={value}
            />
          ))
        : null}
      {/* Track  */}
      <SliderTrack bg="#77798c" className="LoanSliderTrack" h="3px">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="#77798c" w="10px" />
      </SliderTrack>

      <SliderToolptip
        isOpen={showTooltip}
        label={
          <TextRegular pt="1" px="1">
            {sliderValue}
          </TextRegular>
        }
      >
        <SliderThumb
          left={`${thumbPosition}% !important`}
          boxSize={4}
          bg="autoBlue.400"
          zIndex={'0'}
        />
      </SliderToolptip>
    </Slider>
  );
};
