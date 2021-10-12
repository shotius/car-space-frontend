import { Text, TextProps } from '@chakra-ui/layout';
 ;

interface Props {}

const CustomText: React.FC<TextProps & Props> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

export default CustomText;
