import { HStack, Icon, StackProps, TextProps } from '@chakra-ui/react';
import { DropdownIcon } from '../../atoms/Icons/DropdownIcon';
import { TextRegular } from '../Texts/TextRegular';

interface MobileSelectProps {
  onClick: () => void;
  label: string;
  textOpacity?: TextProps['opacity'];
  arrowOpacity?: TextProps['opacity'];
}

// in mobile version, select field is fake one, because we need to pop up
// custom select box, so I use regular div for select
export const MobileSelect: React.FC<MobileSelectProps & StackProps> = ({
  onClick,
  label,
  textOpacity = '0.4',
  ...rest
}) => {
  return (
    <HStack
      h={['44px', null, '40px', null, null, '62px']}
      w="full"
      bg="white"
      borderRadius="8px"
      onClick={onClick}
      pl="4"
      pr="3"
      justify="space-between"
      {...rest}
    >
      <TextRegular
        opacity={textOpacity}
        fontSize={['16px', null, null, '18px', null, '24px']}
      >
        {label}
      </TextRegular>
      <Icon as={DropdownIcon} boxSize={4} opacity={textOpacity} />
    </HStack>
  );
};
