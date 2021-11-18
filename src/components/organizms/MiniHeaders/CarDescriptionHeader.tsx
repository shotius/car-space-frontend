import { HStack, VStack, Heading } from "@chakra-ui/react";
import { ICar } from "src/redux/features/auth/types";
import { ButtonHeart } from "../../molecules/Buttons/ButtonHeart";
import { TextRegular } from "../../molecules/Texts/TextRegular";

interface CarDescriptionHeaderProps {
  car?: ICar
}

export const CarDescriptionHeader: React.FC<CarDescriptionHeaderProps> =
  ({car: carInfo}) => {
    return (
      <HStack w="full" justify="space-between">
        <VStack spacing="0" alignItems="flex-start">
          <Heading fontSize="20px" lineHeight="26px" fontWeight="light">
            {carInfo?.y} {carInfo?.m} {carInfo?.mG}
          </Heading>
          <HStack>
            <TextRegular opacity="0.5">Lot #</TextRegular>
            <TextRegular>{carInfo?.lN}</TextRegular>
          </HStack>
        </VStack>
        <ButtonHeart h="48px" w="50px" lotNumber="39029881" buttonInactiveColor="#E8E8E8"/>
      </HStack>
    );
  };
