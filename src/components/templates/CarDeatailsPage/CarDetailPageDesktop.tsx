import { AspectRatio, Box, VStack } from '@chakra-ui/layout';
import { Flex, Spacer, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BidInfoCard } from 'src/components/molecules/Cards/BidInfoCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { CalculatorDesktop } from 'src/components/organizms/Calculator/CalculatorDesktop';
import { CarDeailsCard } from 'src/components/organizms/CarDeatailPage/Cards/CarDeailsCard';
import { CarInfoCard } from 'src/components/organizms/CarDeatailPage/Cards/CarInfoCard';
import { CarTransportationCard } from 'src/components/organizms/CarDeatailPage/Cards/CarTransportationCard';
import { CarDetailSlider } from 'src/components/organizms/CarDeatailPage/Carousels/CarDetailSlider';
import { CarDescriptionHeader } from 'src/components/organizms/MiniHeaders/CarDescriptionHeader';
import { useAppSelector } from 'src/redux/app/hook';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';

interface CarDetailPageDesktopProps {
  car: ICar;
  thumbs: string[];
  images: string[];
}

export const CarDetailPageDesktop: React.FC<CarDetailPageDesktopProps> = ({
  car,
  thumbs,
  images,
}) => {
  const { fetchingMediums, fetchingThumbs } = useAppSelector(
    (state) => state.carImages
  );
  const { lotNumber } = useParams<{ lotNumber: string }>();

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
          {fetchingMediums[lotNumber] || fetchingThumbs[lotNumber] ? (
            <>
              <AspectRatio ratio={579 / 364} width="579px">
                <Box bg="autoGrey.400" borderRadius="8px">
                  <Spinner />
                </Box>
              </AspectRatio>
            </>
          ) : (
            <>
              {!thumbs.length || !images.length ? (
                <AspectRatio ratio={579 / 364} width="579px">
                  <VStack bg="autoGrey.400" borderRadius="8px">
                    <HeadingSecondary>No photos available</HeadingSecondary>
                  </VStack>
                </AspectRatio>
              ) : (
                <CarDetailSlider thumbs={thumbs} images={images} />
              )}
            </>
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
            top='90px'
          >
            <BidInfoCard car={car} />
            <CalculatorDesktop children size="regular" />
          </VStack>
        </VStack>
      </Flex>
    </ContainerOuter>
  );
};
