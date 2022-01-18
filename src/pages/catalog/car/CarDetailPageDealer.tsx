import { Button, Center, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { CarImageSliderModal } from 'src/components/organizms/Modals/CarImageSliderModal';
import { CarDetailPageDesktop } from 'src/components/templates/CarDeatailsPage/CarDetailPageDesktop';
import { CarDetailPageMobile } from 'src/components/templates/CarDeatailsPage/CarDetailPageMobile';
import { DamnCard1 } from 'src/DamnCard';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getSingleDealerCarThunk } from 'src/redux/features/auth/carsSlice';
import { getFavouriteCarIds } from 'src/redux/features/auth/userSlice';
import { CarContext } from 'src/utils/contexts/CarContext';
import { isApiDefaultError } from 'src/utils/functions/typeChecker';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';

interface CardDetailPageProps {}

export const CarDetailPageDealer: React.FC<CardDetailPageProps> = () => {
  const [car, setCar] = useState<ICarDealer>();
  const [error, setError] = useState('');
  const history = useHistory()

  const { dealerCars: cars } = useAppSelector((state) => state.carsReducer);
  const dispatch = useAppDispatch();

  const { carId } = useParams<{ carId: string }>();
  const { isDesktop } = useDetectScreen();

  useEffect(() => {
    dispatch(getFavouriteCarIds(''));
    const carInCache = cars.find((car) => car.id === carId);
    // if car is not in the cache fetch it
    if (carInCache) {
      setCar(carInCache);
    } else {
      dispatch(getSingleDealerCarThunk(carId))
        .unwrap()
        .then((data) => setCar(data))
        .catch((error) => {
          if (isApiDefaultError(error)) {
            setError(error.error || 'Car Info not found');
          } else {
            setError('Some thing bad happend :(, Try later...');
          }
        });
    }
  }, []);

  if (error) {
    return (
      <Center h="80vh">
        <VStack>
          <HeadingSecondary color="autoOrange.500" fontSize="24px">{error}</HeadingSecondary>
          <Button variant="link" onClick={() => history.goBack()}>Go back</Button>
        </VStack>
      </Center>
    );
  }
  if (!car) {
    return <>...loading car info</>;
  }

  return (
    <CarContext.Provider value={{ car }}>
      <ScrollToTop />
      {isDesktop ? (
        <>
          <CarDetailPageDesktop />
          <CarImageSliderModal />
        </>
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
        <CarListCarousel cars={[DamnCard1]} />
      </ContainerOuter>
    </CarContext.Provider>
  );
};

export default CarDetailPageDealer;
