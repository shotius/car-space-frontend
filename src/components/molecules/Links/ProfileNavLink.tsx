import { Button, ButtonProps } from '@chakra-ui/button';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface ProfileNavLinkProps {
  to: string;
  clickCallback?: () => void;
  activeBg?: ButtonProps['bg'];
  activeColor?: ButtonProps['color'];
}

export const ProfileNavLink: React.FC<ProfileNavLinkProps & ButtonProps> = ({
  activeBg = 'autoOrange.100',
  activeColor = '#FB5607',
  to,
  clickCallback,
  children,
  ...rest
}) => {
  const history = useHistory();
  // to detect active buttons
  const active = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <Button
      w="full"
      borderRadius="none"
      display="flex"
      justifyContent={["start", null, null, 'center']}
      p="32px 32px"
      bg={active ? activeBg : '#fff'}
      color={active ? activeColor : '#000'}
      _hover={{
        bg: active ? 'autoOrange.200' : 'autoGrey.200',
      }}
      _active={{
        bg: "autoOrange.300"
      }}
      onClick={() => {
        if (!clickCallback) {
          history.push(to);
        } else {
          clickCallback();
        }
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
