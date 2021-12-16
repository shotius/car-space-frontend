import { Box, BoxProps } from '@chakra-ui/layout';

interface CustomOverlayProps {
  isActive: boolean;
  onClick: () => void;
}

export const CustomOverlay: React.FC<CustomOverlayProps & BoxProps> = ({
  isActive,
  onClick, 
  ...rest
}) => {
  return (
    <Box
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0, 0, 0, 0)"
      zIndex={['1', null, null, "0"]}
      display={isActive ? 'block' : 'none'}
      onClick={onClick}
      {...rest}
    />
  );
};
