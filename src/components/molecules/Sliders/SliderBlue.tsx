import { Box, Flex, shouldForwardProp, Tooltip } from '@chakra-ui/react';
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import { useMemo, useState } from 'react';
import { range } from 'src/utils/functions/range';
import { TextRegular } from '../Texts/TextRegular';
import { CustomSliderMark } from './SliderMark';

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

  const thumbPosition = Math.round(((sliderValue! - 1) / (rest.max! - 1)) * 94);
  console.log('showTooltip', showTooltip);

  return (
    <Slider
      shouldWrapChildren={true}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      {...rest}
    >
      {/* Marks  */}
      {/* {showMarks
        ? range(1, numberForMarks).map((value) => (
            <CustomSliderMark
              className="loanSliderMark"
              value={(value * 96) / 100}
              key={value}
            />
          ))
        : null} */}
      {/* Track  */}
      <SliderTrack bg="#77798c" className="LoanSliderTrack_" h="3px">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="#77798c" />
      </SliderTrack>

      {/* <SliderToolptip
        isOpen={showTooltip}
        label={
          <TextRegular pt="1" px="1">
            {sliderValue}
          </TextRegular>
        }
      >
      </SliderToolptip> */}
      <Tooltip
        hasArrow
        bg="autoBlue.400"
        color="white"
        placement="top"
        label={
          <TextRegular pt="1" px="1">
            {sliderValue}
          </TextRegular>
        }
        // opacity={showTooltip ? '1' : '0'}
        // transition="opacity 0.1s"
        isOpen={showTooltip}
      >
        <SliderThumb
          // left={`${thumbPosition}% !important`}
          boxSize={4}
          bg="autoBlue.400"
          zIndex={'0'}
        />
      </Tooltip>
    </Slider>
  );
};
export function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={5}
      min={0}
      max={100}
      colorScheme="teal"
      //@ts-ignore
      shouldWrapChildren={true}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
        25%
      </SliderMark>
      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
        50%
      </SliderMark>
      <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
        75%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>

      <Flex>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Flex>
    </Slider>
  );
}
