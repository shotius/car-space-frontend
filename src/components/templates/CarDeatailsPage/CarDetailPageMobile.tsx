import { AspectRatio, Box, HStack, VStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useParams } from 'react-router-dom';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { CarDeailsCard } from 'src/components/organizms/CarDeatailPage/Cards/CarDeailsCard';
import { CarTrasportationInfo } from 'src/components/organizms/CarDeatailPage/Cards/CarTrasportationInfo';
import { useAppSelector } from 'src/redux/app/hook';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';
import { ContainerOuter } from '../../atoms/Containers/ContainerOuter';
import { BidInfoCard } from '../../molecules/Cards/BidInfoCard';
import { TextRegular } from '../../molecules/Texts/TextRegular';
import { CarInfoCardMobile } from '../../organizms/CarDeatailPage/Cards/CarInfoCardMobile';
import { CarDetailSliderMobile } from '../../organizms/CarDeatailPage/Carousels/CarDetailSliderMobile';
import { CarDescriptionHeader } from '../../organizms/MiniHeaders/CarDescriptionHeader';

interface CarDetailPageMobileProps {
  car: ICarDealer;
}

export const CarDetailPageMobile: React.FC<CarDetailPageMobileProps> = ({
  car,
}) => {
  const { fetchingMediums, fetchingThumbs } = useAppSelector(
    (state) => state.carImages
  );
  const { lotNumber } = useParams<{ lotNumber: string }>();

  return (
    <>
      <ContainerOuter p="0">
        {fetchingMediums[lotNumber] || fetchingThumbs[lotNumber] ? (
          <>
            <AspectRatio ratio={3 / 2} width="full">
              <Box bg="autoGrey.400">
                <Spinner />
              </Box>
            </AspectRatio>
          </>
        ) : (
          <>
            {!car.imgUrls.length ? (
              <AspectRatio ratio={3 / 2} width="full">
                <Box bg="autoGrey.400">
                  <HeadingSecondary>No photos available</HeadingSecondary>
                </Box>
              </AspectRatio>
            ) : (
              <CarDetailSliderMobile images={car.imgUrls} />
            )}
          </>
        )}
      </ContainerOuter>
      <ContainerOuter pt="4">
        <HStack>
          <VStack spacing="48px" w="full">
            {/* car name */}
            <CarDescriptionHeader car={car} />

            {/* car description */}
            <TextRegular lineHeight="24px" opacity="0.5" mt="24px !important">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ullam ex dolores incidunt, nam quam similique eius esse
              perspiciatis non, iure aperiam, laborum officiis omnis blanditiis
              quas consequuntur modi enim.
            </TextRegular>

            {/* bid info */}
            <BidInfoCard car={car} />

            {/* car information */}
            <CarInfoCardMobile car={car} />
            <CarTrasportationInfo />

            {/* car details */}
            <CarDeailsCard car={car} variant="mobile" />
          </VStack>
        </HStack>
      </ContainerOuter>
    </>
  );
};
