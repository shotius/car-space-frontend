import { Box, BoxProps } from '@chakra-ui/layout';


interface CardProps {
  bgActive?: string;
}

export const Card: React.FC<CardProps & BoxProps> = ({
  minW, 
  minH, 
  bg = 'white',
  p = '2.5',
  borderRadius = '8px',
  bgActive,
  children,
  ...rest
}) => {
  return (
    <Box
      minW={minW}
      minH={minH}
      bg={bg}
      p={p}
      borderRadius={borderRadius}
      _active={{
        bg: `${bgActive}`,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
