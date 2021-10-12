import { BoxProps, Center, Divider, DividerProps } from '@chakra-ui/layout';
 ;

interface Props {
  height: BoxProps['h'];
}

const CustomDivider: React.FC<Props & DividerProps> = ({ height, ...rest }) => {
  return (
    <Center height={height}>
      <Divider orientation="vertical" {...rest} />
    </Center>
  );
};
export default CustomDivider;
