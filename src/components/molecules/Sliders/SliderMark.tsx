import { SliderMark, Box, SliderMarkProps } from '@chakra-ui/react';
import { TextRegular } from '../Texts/TextRegular';

interface CustomProps {
  isEnumerated?: boolean;
}

export const CustomSliderMark: React.FC<
  CustomProps & SliderMarkProps & SliderMarkProps
> = ({ value, isEnumerated, ...rest }) => {
  return (
    <SliderMark value={value} {...rest}>
      <Box
        w="10px"
        h="10px"
        bg="#77798c"
        borderRadius={'100%'}
        position="relative"
        mt="70%"
        mr="50%"
      ></Box>

      {isEnumerated && (
        <TextRegular position="absolute" ml="1px" mt="4px">
          {value}
        </TextRegular>
      )}
    </SliderMark>
  );
};
