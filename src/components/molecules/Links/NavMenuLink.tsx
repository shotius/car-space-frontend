import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router-dom';
import { TextRegular } from '../Texts/TextRegular';

interface NavMenuLinkProps {
  heading: string;
  to: string;
  onClick: () => void;
}

export const NavMenuLink: React.FC<NavMenuLinkProps> = ({
  heading,
  to,
  onClick,
}) => {
  const history = useHistory();
  const handleClick = () => {
    onClick();
    history.push(to);
  };
  return (
    <Button
      onClick={handleClick}
      w="full"
      bg="white"
      py="12px"
      textAlign="end"
    >
      <TextRegular fontWeight="light" fontSize={18} w="full">
        {heading}
      </TextRegular>
    </Button>
  );
};
