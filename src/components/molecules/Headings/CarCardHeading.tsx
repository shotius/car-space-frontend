import { HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { TextRegular } from '../Texts/TextRegular';

interface CarCardHeadingProps {
  id: string;
  model: string;
  year: number; 
}

export const CarCardHeading: React.FC<CarCardHeadingProps> = ({ id, model, year }) => {
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
          <Link to={`/car/${id}`}>{capitalizeEach(model)}</Link>
        </TextRegular>
        <TextSecondary opacity="50%">{year || "Year: -"}</TextSecondary>
      </VStack>
      <ButtonHeart h="40px" w="36px" boxSize={5} lotNumber={id} />
    </HStack>
  );
};
