import { AspectRatio, VStack } from '@chakra-ui/layout';
import { Flex, Spacer } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BidInfoCard } from 'src/components/molecules/Cards/BidInfoCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { CalculatorDesktop } from 'src/components/organizms/Calculator/CalculatorDesktop';
import { CarDeailsCard } from 'src/components/organizms/CarDeatailPage/Cards/CarDeailsCard';
import { CarInfoCard } from 'src/components/organizms/CarDeatailPage/Cards/CarInfoCard';
import { CarTransportationCard } from 'src/components/organizms/CarDeatailPage/Cards/CarTransportationCard';
import { CarDetailSlider } from 'src/components/organizms/CarDeatailPage/Carousels/CarDetailSlider';
import { CarDescriptionHeader } from 'src/components/organizms/MiniHeaders/CarDescriptionHeader';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';

interface CarDetailPageDesktopProps {
  car: ICarDealer;
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
          {/* If there are not images show fallback, if feching images show spinner */}
            {!car.imgUrls.length ? (
              <AspectRatio ratio={579 / 364} width="579px">
                <VStack bg="autoGrey.400" borderRadius="8px">
                  <HeadingSecondary>No photos available</HeadingSecondary>
                </VStack>
              </AspectRatio>
            ) : (
              <CarDetailSlider images={car.imgUrls} />
            )}
          <CarInfoCard car={car} />
          <CarTransportationCard />
          <CarDeailsCard variant="desktop" car={car} />
        </VStack>
        <Spacer minW="20px" />
        <VStack position="relative" alignSelf="stretch" spacing="4">
          <CarDescriptionHeader car={car} />
          <VStack
            w="441px"
            spacing="32px"
            alignItems="flex-start"
            position="sticky"
            top="90px"
          >
            <BidInfoCard car={car} />
            <CalculatorDesktop children size="regular" />
          </VStack>
        </VStack>
      </Flex>
    </ContainerOuter>
  );
};
