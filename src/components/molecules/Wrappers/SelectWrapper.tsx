import { Box, BoxProps } from '@chakra-ui/layout';

export const SelectWrapper: React.FC<BoxProps> = ({
  children,
  w,
  ...rest
}) => {
  return (
    <Box w={w} {...rest}>
      {children}
    </Box>
  );
};
