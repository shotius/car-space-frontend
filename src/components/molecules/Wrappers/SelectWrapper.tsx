import { Box, BoxProps } from '@chakra-ui/layout';

interface Props {
  areOptionsOpen: boolean
}

export const SelectWrapper: React.FC<BoxProps & Props> = ({
  children,
  w ="full",
  areOptionsOpen, 
  ...rest
}) => {
  return (
    <Box w={w} {...rest} zIndex={ areOptionsOpen ? "1" : "0"}>
      {children}
    </Box>
  );
};
