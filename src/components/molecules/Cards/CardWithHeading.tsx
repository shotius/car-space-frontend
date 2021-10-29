import { BoxProps, VStack } from '@chakra-ui/layout';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { Card } from './Card';

interface CardWithHeaderProps {
  heading: string;
  headingBg?: BoxProps['bg']
  headinCl?: BoxProps['color']
  headingFontSize?: BoxProps['fontSize']
}

export const CardWithHeading: React.FC<CardWithHeaderProps & BoxProps> = ({
  headingBg= "autoBlue.400",
  headinCl= "#fff", 
  headingFontSize,
  w="full", 
  maxW=[null, null , '480px'],
  heading,
  children,
  ...rest
}) => {
  return (
    <Card p="0" maxW={maxW} w={w} {...rest} >
      <HeadingSecondary
        bg={headingBg}
        fontSize={headingFontSize}
        borderTopRadius="8px"
        padding="12px 16px 12px 16px"
        color={headinCl}
      >
        {heading}
      </HeadingSecondary>
      <VStack p="4">{children}</VStack>
    </Card>
  );
};
