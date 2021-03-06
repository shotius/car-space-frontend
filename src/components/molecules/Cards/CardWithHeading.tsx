import { BoxProps, VStack } from '@chakra-ui/layout';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { Card } from './Card';

interface CardWithHeaderProps {
  heading: string;
  headingBg?: BoxProps['bg']
  headinCl?: BoxProps['color']
  headingFontSize?: BoxProps['fontSize']
  headingPadding?:  BoxProps['p']
  bodyPadding?: BoxProps['p']
}

export const CardWithHeading: React.FC<CardWithHeaderProps & BoxProps> = ({
  headingBg= "autoBlue.400",
  headinCl= "#fff", 
  headingFontSize,
  headingPadding="12px 24px 12px 24px",
  bodyPadding="24px",
  w="full", 
  maxW=[null, null , '480px', 'full'],
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
        padding={headingPadding}
        color={headinCl}
      >
        {heading}
      </HeadingSecondary>
      <VStack p={bodyPadding}>{children}</VStack>
    </Card>
  );
};
