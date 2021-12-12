import {
  Button,
  Flex,
  FlexProps,
  Heading,
  HeadingProps
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';


interface SectionHeaderProps {
  mainText: string;
  secondaryText?: string;
  mainFontSize?: HeadingProps['fontSize'];
  mainlineHeight?: HeadingProps['lineHeight'];
  secondaryFontSize?: HeadingProps['fontSize'];
  secondaryTextOpacity?: string;
  mb?: string[] | string;
  to?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps & FlexProps> = ({
  mainText,
  mainFontSize = ['20px', null, '18px'],
  mainlineHeight = { lg: '24px', xl: '26px' },
  secondaryText,
  secondaryFontSize = ['16px', null, null, "18px"],
  secondaryTextOpacity = '40%',
  mb = '8px',
  to = "",
  ...rest
}) => {
  const history = useHistory()

  return (
    <Flex
      justifyContent="space-between"
      mb={mb}
      {...rest}
      w="full"
      alignItems="baseline"
    >
      <Heading
        fontSize={mainFontSize}
        lineHeight={mainlineHeight}
        fontWeight="400"
      >
        {mainText}
      </Heading>
      <Button
        variant="link"
        opacity={secondaryTextOpacity}
        fontSize={secondaryFontSize}
        color="#000"
        fontWeight="light"
        onClick={() => history.push(to)}
      >
        <Link to="#">{secondaryText}</Link>
      </Button>
    </Flex>
  );
};
