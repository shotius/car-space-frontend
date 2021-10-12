import { Flex, FlexProps, Heading } from '@chakra-ui/react';
 ;
import { Link } from 'react-router-dom';
import { TextMain } from 'src/components/atoms/Texts/TextMain';

interface SectionHeaderProps {
  mainText: string;
  secondaryText?: string;
  mainFontSize?: string[] | string;
  mainlineHeight?: string[] | string;
  secondaryFontSize?: string;
  secondaryTextOpacity?: string;
  mb?: string[] | string;
}

export const SectionHeader: React.FC<SectionHeaderProps & FlexProps> = ({
  mainText,
  mainFontSize = {base: "20px",  lg: '18px', xl: '20px' },
  mainlineHeight = { lg: '24px', xl: '26px' },
  secondaryText,
  secondaryFontSize = '16px',
  secondaryTextOpacity = '50%',
  mb = '24px',
  ...rest
}) => {
  return (
    <Flex justifyContent="space-between" mb={mb} {...rest} w="full">
      <Heading
        fontSize={mainFontSize}
        lineHeight={mainlineHeight}
        fontWeight="400"
      >
        {mainText}
      </Heading>
      <TextMain
        opacity={secondaryTextOpacity}
        fontSize={secondaryFontSize}
        color="#000"
      >
        <Link to="#">{secondaryText}</Link>
      </TextMain>
    </Flex>
  );
};
