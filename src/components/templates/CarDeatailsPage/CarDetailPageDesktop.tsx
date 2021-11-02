import { HStack, VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { CarInfoCard } from 'src/components/organizms/CarDeatailPage/CarInfoCard';
// import { CarDeailsCardM } from 'src/components/organizms/Cards/CarDeailsCard';

interface CarDetailPageDesktopProps {}

export const CarDetailPageDesktop: React.FC<CarDetailPageDesktopProps> =
  ({}) => {
    return (
      <ContainerOuter>
        <HStack bg="green">
          <VStack spacing="49px">
            <HeadingSecondary p="100px">Card Picture Slider</HeadingSecondary>
            <CarInfoCard />
            <CardWithHeading heading="Transportation and fee">
              <HStack w="full" justify="space-between">
                <VStack align="flex-start" spacing="1">
                  <TextRegular opacity="0.5"> Transportation to Poti</TextRegular>
                  <HeadingSecondary>$ 400</HeadingSecondary>
                </VStack>
                <VStack align="flex-start" spacing="1">
                  <TextRegular opacity="0.5"> Auction fee</TextRegular>
                  <HeadingSecondary>$ 400</HeadingSecondary>
                </VStack>
                <HStack p="17px 24px" borderRadius="8px" bg="autoGrey.200">
                  <TextRegular opacity="0.5">Total</TextRegular>
                  <HeadingSecondary>$ 800</HeadingSecondary>
                </HStack>
              </HStack>
            </CardWithHeading>
            {/* <CarDeailsCard /> */}
          </VStack>
          <VStack>
            <HeadingSecondary>Calculatro and bidding info</HeadingSecondary>
          </VStack>
        </HStack>
      </ContainerOuter>
    );
  };
