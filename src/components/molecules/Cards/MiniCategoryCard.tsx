import { BoxProps, Center, Heading, Image, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import CarSmall from 'src/assets/png/car with bg-1.png';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { useAppDispatch } from 'src/redux/app/hook';
import { openCatalogBanner } from 'src/redux/features/global/gloabalSlice';
import { Card } from './Card';

interface MiniCategoryCardProps {
  categoryTitle: string;
  carCount: number;
}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps & BoxProps> = ({
  categoryTitle,
  carCount, 
  ...rest
}) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <Card
      className="hoverable"
      cursor="pointer"
      w={['137px', null, null, '143px']}
      h={['130px', null, null, '132px']}
      onClick={() => {
        history.push('/catalog');
        dispatch(openCatalogBanner());
      }}
      {...rest}
    >
      <Center h="full">
        <VStack spacing="0">
          <Image
            cursor="pointer"
            src={CarSmall}
            w={['55px', null, null, '52px']}
            h={['55px', null, null, '52px']}
          />
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
