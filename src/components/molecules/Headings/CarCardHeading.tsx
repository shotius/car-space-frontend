import { HStack, IconButton, useToast, VStack } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import {
  getDealerCars,
  removeSingleCar,
} from 'src/redux/features/auth/carsSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { isApiDefaultError } from 'src/utils/functions/typeChecker';
import { Roles } from '../../../../../server/shared_with_front/contants';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { TextRegular } from '../Texts/TextRegular';

interface CarCardHeadingProps {
  id: string;
  model: string;
  year: number;
}

export const CarCardHeading: React.FC<CarCardHeadingProps> = ({
  id,
  model,
  year,
}) => {
  const { role } = useAppSelector((state) => state.userInfoSlice);
  const { catalogQuery } = useAppSelector((state) => state.globalAppState);
  const dispatch = useAppDispatch();

  const history = useHistory();

  const toast = useToast();

  return (
    <HStack justifyContent="space-between" w="full">
      <VStack alignItems="flex-start" spacing="0">
        <TextRegular
          fontFamily="Roboto Medium"
          fontSize="18px"
          maxW={['200px', '150px']}
          noOfLines={1}
          _hover={{
            textDecor: 'underline',
          }}
        >
          <Link to={`/car/${id}`}>{capitalizeEach(model)}</Link>
        </TextRegular>
        <TextSecondary opacity="50%">{year || 'Year: -'}</TextSecondary>
      </VStack>

      {role?.toLocaleLowerCase() === Roles.ADMIN.toLocaleLowerCase() ? (
        <IconButton
          icon={<CloseIcon />}
          aria-label="delete car"
          onClick={(e) => {
            if (e.stopPropagation) {
              e.stopPropagation();
            }
            dispatch(removeSingleCar(id))
              .unwrap()
              .then(() => {
                const query = new URLSearchParams(catalogQuery);
                dispatch(getDealerCars(query))
                  .unwrap()
                  .then((data) => {
                    // if there are not more cards on the page fetch previos page
                    const currPage = query.get('page');
                    if (!!!data.length && currPage && currPage !== '1') {
                      const previousPage = parseInt(currPage) - 1 || '1';
                      query.set('page', previousPage.toString());
                      dispatch(setActivePage(previousPage));
                      dispatch(setCatalogQuery(query.toString()));
                      history.push({
                        pathname: '/catalog',
                        search: query.toString(),
                      });
                      dispatch(getDealerCars(query));
                    }
                  });
                toast({
                  title: `Deleted successfully`,
                  position: 'top',
                  status: 'success',
                  duration: 2000,
                });
              })
              .catch((error) => {
                if (isApiDefaultError(error)) {
                  toast({
                    title: error.message,
                    position: 'top',
                    status: 'error',
                    duration: 2000,
                  });
                }
                toast({
                  title: 'Could not delelete the card',
                  position: 'top',
                  status: 'error',
                  duration: 2000,
                });
              });
          }}
        />
      ) : (
        <ButtonHeart h="40px" w="36px" boxSize={5} lotNumber={id} />
      )}
    </HStack>
  );
};
