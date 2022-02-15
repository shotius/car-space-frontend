import { HStack, Icon, StackProps, TextProps } from '@chakra-ui/react';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { DropdownIcon } from '../../atoms/Icons/DropdownIcon';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { TextRegular } from '../Texts/TextRegular';

interface MobileSelectProps {
  onClick?: () => void;
  onClear?: () => void;
  hasValue?: boolean;
  label: string;
  textOpacity?: TextProps['opacity'];
  arrowOpacity?: TextProps['opacity'];
  isDisabled?: boolean;
}

// in mobile version, select field is fake one, because we need to pop up
// custom select box, so I use regular div for select
export const MobileSelect: React.FC<MobileSelectProps & StackProps> = ({
  onClick,
  label,
  onClear,
  hasValue,
  isDisabled = false,
  textOpacity = '0.4',
  ...rest
}) => {
  const opacity = hasValue ? '1' : !isDisabled ? textOpacity : '0.2';
  return (
    <HStack
      h={['44px', null, '40px', null, null, '62px']}
      w="full"
      bg="white"
      borderRadius="8px"
      onClick={() => {
        if (!isDisabled && onClick) onClick();
      }}
      pl="4"
      pr="3"
      justify="space-between"
      {...rest}
    >
      <TextRegular
        opacity={opacity}
        fontSize={['16px', null, null, '18px', null, '24px']}
        isTruncated
      >
        {label}
      </TextRegular>
      {/* if Some value is selected clear icon will appear, else dropdown */}
      {hasValue ? (
        <ButtonWithIcon
          icon={CloseIcon}
          aria-label="clear-selected"
          p="0"
          pr="4px"
          minW="0"
          opacity="0.6"
          onClick={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            if (onClear) onClear();
          }}
        />
      ) : (
        <Icon
          as={DropdownIcon}
          boxSize={4}
          opacity={!isDisabled ? textOpacity : '0.2'}
        />
      )}
    </HStack>
  );
};
