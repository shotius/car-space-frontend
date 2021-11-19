import { Box, BoxProps } from '@chakra-ui/layout';

export const SelectWrapper: React.FC<BoxProps> = ({
  children,
  w = ['100%', '30%', '100%'],
  ...rest
}) => {
  return (
    <Box w={w} {...rest}>
      {children}
    </Box>
  );
};
