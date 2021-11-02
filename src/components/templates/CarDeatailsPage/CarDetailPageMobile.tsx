import { HStack, VStack } from '@chakra-ui/layout';
import { ICar } from 'src/redux/features/auth/types';
import { ContainerOuter } from '../../atoms/Containers/ContainerOuter';
import { BidInfoCard } from '../../molecules/BidInfoCard';
import { CarDetailSlider } from '../../molecules/CarDetailSlider';
import { TextRegular } from '../../molecules/Texts/TextRegular';
import {
  CarDeailsCardMobile
} from '../../organizms/Cards/CarDeailsCard';
import { CarInfoCardMobile } from '../../organizms/Cards/CarInfoCardMobile';
import { CarDescriptionHeader } from '../../organizms/MiniHeaders/CarDescriptionHeader';

interface CarDetailPageMobileProps {
  car?: ICar;
}

export const CarDetailPageMobile: React.FC<CarDetailPageMobileProps> = ({
  car,
}) => {
  return (
    <>
      <ContainerOuter p="0">
        <CarDetailSlider />
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
            <BidInfoCard />

            {/* car information */}
            <CarInfoCardMobile />

            {/* car details */}
            <CarDeailsCardMobile />
            
          </VStack>
        </HStack>
      </ContainerOuter>
    </>
  );
};
