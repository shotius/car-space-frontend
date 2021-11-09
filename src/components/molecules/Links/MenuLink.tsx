 ;
import { TextRegular } from '../Texts/TextRegular';
import { useRouteMatch, Link } from 'react-router-dom';

interface MenuLinkProps {
  to: string;
  label: string;
  activeOnlyWhenExact?: boolean;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  label,
  activeOnlyWhenExact,
}) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <TextRegular color={match ? 'autoOrange.400' : '#000'}>
      <Link to={to}>{label}</Link>
    </TextRegular>
  );
};
