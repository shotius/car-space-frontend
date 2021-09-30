import { Center, Divider, DividerProps } from '@chakra-ui/layout';
import React from 'react';

interface Props {
  height: string;
}

const CustomDivider: React.FC<Props & DividerProps> = ({ height, ...rest }) => {
  return (
    <Center height={height}>
      <Divider orientation="vertical" {...rest} />
    </Center>
  );
};
export default CustomDivider;
