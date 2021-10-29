import { HStack, VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { CarInfoCard } from 'src/components/organizms/CarDeatailPage/CarInfoCard';

interface CarDetailPageDesktopProps {}

export const CarDetailPageDesktop: React.FC<CarDetailPageDesktopProps> =
  ({}) => {
    return (
      <ContainerOuter>
        <HStack bg="green">
          <VStack bg="blue">
            <HeadingSecondary p="100px">Card Picture Slider</HeadingSecondary>
            <CarInfoCard />
          </VStack>
          <VStack bg="red">
            <HeadingSecondary>Calculatro and bidding info</HeadingSecondary>
          </VStack>
        </HStack>
      </ContainerOuter>
    );
  };
