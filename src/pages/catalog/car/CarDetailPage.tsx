/////////////////////////////////////////////////////////////////////////////
/// THis page is depricated do to insuficient data from Copart
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { DamnCard1 } from 'src/DamnCard';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  getImagesMediumThunk,
  getThumbs,
} from 'src/redux/features/auth/carImagesSlice';
import { getSingleCarAsync } from 'src/redux/features/auth/carsSlice';
import { isApiDefaultError } from 'src/utils/functions/typeChecker';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ICarCopart } from '../../../../../server/shared_with_front/types/types-shared';

interface CardDetailPageProps {}

export const CarDetailPage: React.FC<CardDetailPageProps> = () => {
  const [carInfo, setCarInfo] = useState<ICarCopart>();
  const [_thumbs, setThumbs] = useState<string[]>([]);
  const [_images, setImages] = useState<string[]>([]);
  const [error, setError] = useState('');

  const { cars } = useAppSelector((state) => state.carsReducer);
  const { thumbImages, mediumImages } = useAppSelector(
    (state) => state.carImages
  );
  const dispatch = useAppDispatch();

  const { lotNumber } = useParams<{ lotNumber: string }>();
  const { isDesktop } = useDetectScreen();

  useEffect(() => {
    // if Images are not in the cache fethc them
    if (!mediumImages[lotNumber]) {
      dispatch(getImagesMediumThunk(parseInt(lotNumber)))
        .unwrap()
        .then((data) => setImages(data));
    } else {
      setImages(mediumImages[lotNumber]);

      /////////////////////////////////////////////////////////////////////////////
      /// THis page is depricated do to insuficient data from Copart
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
    }

    // if thumbs are not in the cache fetch them
    if (!thumbImages[lotNumber]) {
      dispatch(getThumbs(parseInt(lotNumber)))
        .unwrap()
        .then((data) => setThumbs(data));
    } else {
      setThumbs(thumbImages[lotNumber]);
    }

    const carInCache = cars.find((car) => car.lN === lotNumber);
    // if car is not in the cache fetch it
    if (carInCache) {
      setCarInfo(carInCache);
    } else {
      dispatch(getSingleCarAsync(Number(lotNumber)))
        .unwrap()
        .then((data) => setCarInfo(data))
        .catch((error) => {
          if (isApiDefaultError(error)) {
            setError(error.error || 'Car Info not found');
          } else {
            setError('Some thing bad happend :(, Try later...');
          }
        });
    }
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  /// THis page is depricated do to insuficient data from Copart
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  if (!carInfo) {
    return <>...loading car info</>;
  }

  if (error) {
    return <HeadingSecondary>{error}</HeadingSecondary>;
  }
  /////////////////////////////////////////////////////////////////////////////
  /// THis page is depricated do to insuficient data from Copart
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  return (
    <>
      {isDesktop ? (
        <>cardeatil</>
      ) : (
        // <CarDetailPageDesktop car={carInfo} thumbs={thumbs} images={images} />
        // <CarDetailPageMobile car={carInfo} thumbs={thumbs} images={images} />
        <>cardetail mobile</>
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
    </>
  );
};

export default CarDetailPage;
