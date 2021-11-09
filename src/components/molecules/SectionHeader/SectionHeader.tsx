import { Flex, FlexProps, Heading, HeadingProps } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';

interface SectionHeaderProps {
  mainText: string;
  secondaryText?: string;
  mainFontSize?: HeadingProps['fontSize']
  mainlineHeight?: HeadingProps['lineHeight']
  secondaryFontSize?: HeadingProps['fontSize']
  secondaryTextOpacity?: string;
  mb?: string[] | string;
}

export const SectionHeader: React.FC<SectionHeaderProps & FlexProps> = ({
  mainText,
  mainFontSize = {base: "20px",  lg: '18px' },
  mainlineHeight = { lg: '24px', xl: '26px' },
  secondaryText,
  secondaryFontSize = '16px',
  secondaryTextOpacity = '50%',
  mb = '24px',
  ...rest
}) => {
  return (
    <Flex justifyContent="space-between" mb={mb} {...rest} w="full" alignItems="baseline">
      <Heading
        fontSize={mainFontSize}
        lineHeight={mainlineHeight}
        fontWeight="400"
      >
        {mainText}
      </Heading>
      <TextSecondary
        opacity={secondaryTextOpacity}
        fontSize={secondaryFontSize}
        color="#000"
      >
        <Link to="#">{secondaryText}</Link>
      </TextSecondary>
    </Flex>
  );
};
