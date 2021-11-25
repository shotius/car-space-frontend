import { Box, BoxProps } from '@chakra-ui/layout';

interface SelectOverlayProps {
  isActive: boolean;
  onClick: () => void;
}

export const SelectOverlay: React.FC<SelectOverlayProps & BoxProps> = ({
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
      bg="rgba(0, 0, 0, 0.4)"
      zIndex="0"
      display={isActive ? 'block' : 'none'}
      onClick={onClick}
      {...rest}
    />
  );
};
