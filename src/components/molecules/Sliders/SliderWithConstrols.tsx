import { HStack } from '@chakra-ui/react';
import { safeSubtraction, safeSum } from 'src/utils/functions/safeOperations';
import { ButtonRound } from '../Buttons/ButtonRound';
import { SliderBlue } from './SliderBlue';

interface SliderWithConstrolsProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
}

export const SliderWithConstrols: React.FC<SliderWithConstrolsProps> = ({
  onChange,
  value,
  min,
  max,
  step,
}) => {
  return (
    <HStack w="full" justify="center">
      <ButtonRound
        fontSize="30px"
        _active={{ bg: 'autoGrey.200' }}
        onClick={() => {
          if (value > min) {
            onChange(safeSubtraction(value, 0.1));
          }
        }}
      >
        -
      </ButtonRound>
      <SliderBlue
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(val) => onChange(val)}
        w="50%"
      />
      <ButtonRound
        fontSize="20px"
        _active={{ bg: 'autoGrey.200' }}
        onClick={() => {
          if (value < max) {
            onChange(safeSum(value, 0.1));
          }
        }}
      >
        +
      </ButtonRound>
    </HStack>
  );
};
