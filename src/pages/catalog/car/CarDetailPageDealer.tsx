import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { CarDetailPageDesktop } from 'src/components/templates/CarDeatailsPage/CarDetailPageDesktop';
import { CarDetailPageMobile } from 'src/components/templates/CarDeatailsPage/CarDetailPageMobile';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamnCard1 } from 'src/DamnCard';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {  getSingleDealerCar } from 'src/redux/features/auth/carsSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';

interface CardDetailPageProps {}

export const CarDetailPageDealer: React.FC<CardDetailPageProps> = () => {
  const [car, setCar] = useState<ICarDealer>();

  const { dealerCars: cars } = useAppSelector((state) => state.carsReducer);
  const dispatch = useAppDispatch();

  const { carId } = useParams<{ carId: string }>();
  const { isDesktop } = useDetectScreen();

  useEffect(() => {
    const carInCache = cars.find((car) => car.id === carId);
    // if car is not in the cache fetch it
    if (carInCache) {
      setCar(carInCache);
    } else {
      dispatch(getSingleDealerCar(carId))
        .unwrap()
        .then((data) => setCar(data));
    }
  }, []);

  if (!car) {
    return <>...loading car info</>;
  }
  return (
    <PublicLayout>
      {isDesktop ? (
        <CarDetailPageDesktop car={car} />
      ) : (
        <CarDetailPageMobile car={car} />
      )}

      {/* similar vehicles*/}
      <ContainerOuter mt="65px">
        <SectionHeader mainText="Similar vehicles" />
      </ContainerOuter>
      <ContainerOuter
        mt={[null, null, null, '-20px']}
        p={['0', null, null, '4']}
      >
        <CarListCarousel car={DamnCard1} />
      </ContainerOuter>
    </PublicLayout>
  );
};

export default CarDetailPageDealer;
