import { HStack, VStack } from '@chakra-ui/layout';
import { Flex, Spacer } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BidInfoCard } from 'src/components/molecules/BidInfoCard';
import { CalculatorDesktop } from 'src/components/molecules/Calculator/CalculatorDesktop';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { CarDeailsCard } from 'src/components/organizms/CarDeatailPage/Cards/CarDeailsCard';
import { CarInfoCard } from 'src/components/organizms/CarDeatailPage/Cards/CarInfoCard';
import { CarDescriptionHeader } from 'src/components/organizms/MiniHeaders/CarDescriptionHeader';
import { ICar } from 'src/redux/features/auth/types';

interface CarDetailPageDesktopProps {
  car?: ICar;
}

export const CarDetailPageDesktop: React.FC<CarDetailPageDesktopProps> = ({
  car,
}) => {
  return (
    <ContainerOuter position="relative">
      <Flex
        pt="40px"
        justify="space-between"
        position="relative"
        alignItems="start"
      >
        <VStack spacing="49px" w="579px">
          <HeadingSecondary p="100px">Card Picture Slider</HeadingSecondary>
          <CarInfoCard />
          <CardWithHeading heading="Transportation and fee">
            <HStack w="full" justify="space-between" align="flex-start">
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
          <CarDeailsCard variant="desktop" />
        </VStack>
        <Spacer minW="20px"/> 
        <VStack
          w="441px"
          spacing="32px"
          alignItems="flex-start"
          position="sticky"
          top="120px"
          // top="80px"
        >
          <CarDescriptionHeader car={car} />
          <BidInfoCard />
          <CalculatorDesktop children size="regular" />
        </VStack>
      </Flex>
    </ContainerOuter>
  );
};
