import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { CarDetailPageDesktop } from 'src/components/templates/CarDeatailsPage/CarDetailPageDesktop';
import { CarDetailPageMobile } from 'src/components/templates/CarDeatailsPage/CarDetailPageMobile';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getSingleCarAsync } from 'src/redux/features/auth/carsSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';

interface CardDetailPageProps {}

export const CarDetailPage: React.FC<CardDetailPageProps> = () => {
  const { isDesktop } = useDetectScreen();
  const { lotNumber } = useParams<{ lotNumber: string }>();
  const { cars } = useAppSelector((state) => state.carsReducer);
  const [carInfo, setCarInfo] = useState<ICar>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const carInCache = cars.find((car) => car.lN === lotNumber);
    if (carInCache) {
      console.log('from cache');
      setCarInfo(carInCache);
    } else {
      console.log('fetching...');
      dispatch(getSingleCarAsync(Number(lotNumber)))
        .unwrap()
        .then((data) => setCarInfo(data));
    }
  }, []);

  console.log('carInfo', carInfo)

  if (!carInfo) {
    return <>...loading car info</>;
  }
  return (
    <PublicLayout>
      {isDesktop ? (
        <CarDetailPageDesktop car={carInfo} />
      ) : (
        <CarDetailPageMobile car={carInfo} />
      )}

      {/* similar vehicles*/}
      <ContainerOuter mt="65px">
        <SectionHeader mainText="Similar vehicles" />
      </ContainerOuter>
      <ContainerOuter
        mt={[null, null, null, '-20px']}
        p={['0', null, null, '4']}
      >
        <CarListCarousel car={DamCar} />
      </ContainerOuter>
    </PublicLayout>
  );
};

export default CarDetailPage;
