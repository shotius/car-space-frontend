import { Heading, HStack, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BidInfoCard } from 'src/components/molecules/BidInfoCard';
import { ButtonHeart } from 'src/components/molecules/Buttons/ButtonHeart';
import { CarDetailSlider } from 'src/components/molecules/CarDetailSlider';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { useAppSelector } from 'src/redux/app/hook';
import { ICar } from 'src/redux/features/auth/types';
import carsService from 'src/services/carsService';

interface CardDetailPageProps {}

export const CarDetailPage: React.FC<CardDetailPageProps> = () => {
  const { lotNumber } = useParams<{ lotNumber: string }>();
  const [carInfo, setCarInfo] = useState<ICar>();

  const { cars } = useAppSelector((state) => state.carsReducer);

  useEffect(() => {
    const carInRedux = cars.find((car) => car.lN === lotNumber);
    if (carInRedux) {
      setCarInfo(carInRedux);
    } else {
      carsService.getSingleCar(lotNumber).then((data) => setCarInfo(data));
    }
  }, []);

  return (
    <PublicLayout>
      <ContainerOuter p="0">
        <CarDetailSlider />
      </ContainerOuter>
      <ContainerOuter pt="4">
        <HStack>
          <VStack alignItems="flex-start" display="block" spacing="4" w="full">
            {/* car name */}
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
              <ButtonHeart />
            </HStack>
            {/* car description */}
            <TextRegular lineHeight="24px" opacity="0.5" mt="24px !important">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ullam ex dolores incidunt, nam quam similique eius esse
              perspiciatis non, iure aperiam, laborum officiis omnis blanditiis
              quas consequuntur modi enim.
            </TextRegular>
            {/* bid info */}
            <BidInfoCard />
          </VStack>
          <VStack display={['none', null,  'flex']} w="full">
            <Heading>Car info</Heading>
          </VStack>
        </HStack>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default CarDetailPage;
