import { Link, useLocation } from 'react-router-dom';
import { TextRegular } from '../Texts/TextRegular';

interface MenuLinkProps {
  to: string;
  label: string;
  activeOnlyWhenExact?: boolean;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ to, label }) => {
  const { pathname } = useLocation();

  const match = to.includes('?')
    ? pathname === to.slice(0, to.indexOf('?'))
    : pathname === to;

  return (
    <TextRegular color={match ? 'autoOrange.400' : '#000'}>
      <Link to={to}>{label}</Link>
    </TextRegular>
  );
};
