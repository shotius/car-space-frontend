import { BoxProps, Center, Heading, Icon, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { CarIcon } from 'src/components/atoms/Icons/CarIcon';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { DEALER_CARS_CATALOG_URL } from 'src/utils/config/contants';
import { Card } from './Card';

interface MiniCategoryCardProps {
  categoryTitle: string;
  carCount: number;
  onClick: () => void;
}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps & BoxProps> = ({
  categoryTitle,
  carCount,
  onClick,
  ...rest
}) => {
  const history = useHistory();
  const handleClick = () => {
    onClick ? onClick() : history.push(DEALER_CARS_CATALOG_URL);
  };

  return (
    <Card
      className="hoverable"
      cursor="pointer"
      w={['137px', null, null, '143px']}
      h={['130px', null, null, '132px']}
      onClick={handleClick}
      {...rest}
    >
      <Center h="full">
        <VStack spacing="0">
          <Center
            w={['55px', null, null, '52px']}
            h={['55px', null, null, '52px']}
            bg="#E8E8E861"
            borderRadius="100%"
          >
            <Icon as={CarIcon} boxSize={6} />
          </Center>

          <VStack spacing="0" pt="2">
            <Heading fontSize="16px" fontWeight="400" cursor="pointer">
              {categoryTitle}
            </Heading>
            <TextSecondary opacity="50%" fontSize="14px">
              {carCount} cars
            </TextSecondary>
          </VStack>
        </VStack>
      </Center>
    </Card>
  );
};
