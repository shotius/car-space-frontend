import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import CarListSlider from 'src/components/organizms/Sliders/CarListSlider/CarListSlider';
import { CarDetailPageDesktop } from 'src/components/templates/CarDeatailsPage/CarDetailPageDesktop';
import { CarDetailPageMobile } from 'src/components/templates/CarDeatailsPage/CarDetailPageMobile';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';
import { useAppSelector } from 'src/redux/app/hook';
import { ICar } from 'src/redux/features/auth/types';
import carsService from 'src/services/carsService';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface CardDetailPageProps {}

export const CarDetailPage: React.FC<CardDetailPageProps> = () => {
  // const { isLargerThan } = useMediaQueryMin(800);
  const {isDesktop} = useDetectScreen()

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
      {isDesktop ? (
        <CarDetailPageDesktop car={carInfo} />
      ) : (
        <CarDetailPageMobile car={carInfo} />
      )}

      {/* similar vehicles*/}
      <ContainerOuter mt="65px">
        <SectionHeader mainText="Similar vehicles" />
        <CarListSlider car={DamCar} />
      </ContainerOuter>
    </PublicLayout>
  );
};

export default CarDetailPage;
