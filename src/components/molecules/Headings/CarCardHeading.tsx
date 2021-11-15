import { HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { TextRegular } from '../Texts/TextRegular';

interface CarCardHeadingProps {
  car: ICar;
  liked?: boolean;
}

export const CarCardHeading: React.FC<CarCardHeadingProps> = ({
  car,
  liked = false,
}) => {
  return (
    <HStack justifyContent="space-between" w="full">
      <VStack alignItems="flex-start" spacing="0">
        <TextRegular
          fontFamily="Roboto Medium"
          fontSize="18px"
          maxW={['200px', '150px']}
          noOfLines={1}
          _hover={{
            textDecor: 'underline',
          }}
        >
          <Link to={`/car/${car?.lN}`}>
            {capitalizeEach(car?.m)} {capitalizeEach(car?.mG)}
          </Link>
        </TextRegular>
        <TextSecondary opacity="50%">{car?.y}</TextSecondary>
      </VStack>
      <ButtonHeart h="40px" w="36px" boxSize={5} liked={liked} />
    </HStack>
  );
};
