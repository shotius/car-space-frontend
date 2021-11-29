import { HStack, VStack } from '@chakra-ui/layout';
import { CarDeailsCard } from 'src/components/organizms/CarDeatailPage/Cards/CarDeailsCard';
import { CarTrasportationInfo } from 'src/components/organizms/CarDeatailPage/Cards/CarTrasportationInfo';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { ContainerOuter } from '../../atoms/Containers/ContainerOuter';
import { BidInfoCard } from '../../molecules/Cards/BidInfoCard';
import { TextRegular } from '../../molecules/Texts/TextRegular';
import { CarInfoCardMobile } from '../../organizms/CarDeatailPage/Cards/CarInfoCardMobile';
import { CarDetailSliderMobile } from '../../organizms/CarDeatailPage/Carousels/CarDetailSliderMobile';
import { CarDescriptionHeader } from '../../organizms/MiniHeaders/CarDescriptionHeader';

interface CarDetailPageMobileProps {
  car: ICar;
}

export const CarDetailPageMobile: React.FC<CarDetailPageMobileProps> = ({
  car,
}) => {
  return (
    <>
      <ContainerOuter p="0">
        <CarDetailSliderMobile />
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
