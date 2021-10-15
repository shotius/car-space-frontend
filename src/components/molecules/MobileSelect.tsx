import { HStack, Icon } from '@chakra-ui/react';
import { DropdownIcon } from '../atoms/Icons/DropdownIcon';
import { TextRegular } from './Texts/TextRegular';

interface MobileSelectProps {
  onClick: () => void;
  label: string;
}

// in mobile version, select field is fake one, because we need to pop up
// custom select box, so I use regular div for select
export const MobileSelect: React.FC<MobileSelectProps> = ({
  onClick,
  label,
}) => {
  return (
    <HStack
      h={['44px', null, '40px', null, null, '62px']}
      w="full"
      bg="white"
      borderBottomRadius="8px"
      onClick={onClick}
      pl="4"
      pr="2"
      justify="space-between"
    >
      <TextRegular
        opacity="0.5"
        fontSize={['16px', null, null, '18px', null, '24px']}
      >
        {label}
      </TextRegular>
      <Icon as={DropdownIcon} boxSize="5" opacity="0.5" />
    </HStack>
  );
};
