import { Box, BoxProps } from '@chakra-ui/layout';
 ;

interface CardProps {
  bgActive?: string;
}

export const Card: React.FC<CardProps & BoxProps> = ({
  minW = ['140px', '166px', '144px'],
  // minW, 
  // minH = ['115px', '130px', null, '132px', '189px'],
  minH, 
  bg = 'white',
  p = '2.5',
  borderRadius = 'md',
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
