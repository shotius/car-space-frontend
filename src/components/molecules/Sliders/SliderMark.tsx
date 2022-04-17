import { SliderMark, Box, SliderMarkProps } from '@chakra-ui/react';

export const CustomSliderMark: React.FC<SliderMarkProps & SliderMarkProps> = ({
  value,
  ...rest
}) => {
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
    </SliderMark>
  );
};
