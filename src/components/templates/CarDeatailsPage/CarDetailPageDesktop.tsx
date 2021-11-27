import { VStack } from '@chakra-ui/layout';
import { Flex, Spacer } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CalculatorDesktop } from 'src/components/organizms/Calculator/CalculatorDesktop';
import { CarDeailsCard } from 'src/components/organizms/CarDeatailPage/Cards/CarDeailsCard';
import { CarInfoCard } from 'src/components/organizms/CarDeatailPage/Cards/CarInfoCard';
import { CarTransportationCard } from 'src/components/organizms/CarDeatailPage/Cards/CarTransportationCard';
import { CarDescriptionHeader } from 'src/components/organizms/MiniHeaders/CarDescriptionHeader';
import { CarDetailSlider } from 'src/components/organizms/CarDeatailPage/Carousels/CarDetailSlider';
import { ICar } from 'src/redux/features/auth/types';
import { BidInfoCard } from 'src/components/molecules/Cards/BidInfoCard';

interface CarDetailPageDesktopProps {
  car?: ICar;
}

export const CarDetailPageDesktop: React.FC<CarDetailPageDesktopProps> = ({
  car,
}) => {
  return (
    <ContainerOuter>
      <Flex
        pt="40px"
        justify="space-between"
        position="relative"
        alignItems="start"
      >
        <VStack spacing="49px" w="579px">
          <CarDetailSlider /> 
          <CarInfoCard />
          <CarTransportationCard /> 
          <CarDeailsCard variant="desktop" />
        </VStack>
        <Spacer minW="20px"/> 
        <VStack
          w="441px"
          spacing="32px"
          alignItems="flex-start"
          position="sticky"
          top="110px"
        >
          <CarDescriptionHeader car={car} />
          <BidInfoCard />
          <CalculatorDesktop children size="regular" />
        </VStack>
      </Flex>
    </ContainerOuter>
  );
};
