import { Heading, HStack, Icon, VStack } from '@chakra-ui/react';
import { SeenIcon } from 'src/components/atoms/Icons/SeenIcon';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';
import { ButtonHeart } from '../../molecules/Buttons/ButtonHeart';
import { TextRegular } from '../../molecules/Texts/TextRegular';

interface CarDescriptionHeaderProps {
  car: ICarDealer;
}

export const CarDescriptionHeader: React.FC<CarDescriptionHeaderProps> = ({
  car: carInfo,
}) => {
  return (
    <HStack w="full" justify="space-between">
      <VStack spacing="0" alignItems="flex-start">
        <Heading fontSize="20px" lineHeight="26px" fontWeight="light">
          {carInfo?.y || <NotSpecified children=""/>} {carInfo?.m} {carInfo?.mG}
        </Heading>
        <HStack>
          <TextRegular opacity="0.5">Lot #</TextRegular>
          <TextRegular pr="16px"><NotSpecified /></TextRegular>
          <Icon as={SeenIcon} ml="10px" opacity="0.5" />
          <TextRegular>15</TextRegular>
        </HStack>
      </VStack>
      <ButtonHeart
        h="48px"
        w="50px"
        carId={carInfo.id}
        buttonInactiveColor="#E8E8E8"
      />
    </HStack>
  );
};
