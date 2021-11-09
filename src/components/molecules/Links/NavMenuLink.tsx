import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { GTArrow } from 'src/components/atoms/Icons/GTArrow';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';

import { useHistory } from 'react-router-dom';

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
  const history = useHistory()
  const handleClick = () => {
    onClick()
    history.push(to)
  }
  return (
    <Button onClick={handleClick} w="full" bg="white" p='0'>
      <Flex justifyContent="space-between" alignItems="center" px="35px" py="2" w="full">
        <TextSecondary opacity="100%" color="black" fontWeight="light">
          {heading}
        </TextSecondary>
        <GTArrow />
      </Flex>
    </Button>
  );
};
