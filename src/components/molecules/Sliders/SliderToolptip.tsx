import { TooltipProps, Tooltip } from '@chakra-ui/react';
import { TextRegular } from '../Texts/TextRegular';

interface SliderToolptipProps {}

export const SliderToolptip: React.FC<SliderToolptipProps & TooltipProps> = ({
  children,
  isOpen,
  ...rest
}) => {
  return (
    <Tooltip
      hasArrow
      bg="autoBlue.400"
      color="white"
      placement="top"
      opacity={isOpen ? '1' : '0'}
      transition="opacity 0.1s"
      {...rest}
    >
      {children}
    </Tooltip>
  );
};
