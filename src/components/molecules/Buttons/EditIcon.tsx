import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { EditIcon } from 'src/components/atoms/Icons/EditIcon';

interface Props extends Omit<IconButtonProps, 'aria-label'> {
  hoverBg?: IconButtonProps['color'];
}

export const EditButton: React.FC<Props> = ({
  bg = 'transparent',
  hoverBg = 'transparent',
  ...rest
}) => {
  return (
    <IconButton
      aria-label="edit"
      as={EditIcon}
      bg={bg}
      _hover={{
        bg: hoverBg,
      }}
      {...rest}
    />
  );
};
