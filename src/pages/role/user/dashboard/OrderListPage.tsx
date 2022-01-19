import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { OrderListDesktop } from 'src/components/organizms/UserProfile/OrderList/OrderListDesktop';
import { OrderListMobile } from 'src/components/organizms/UserProfile/OrderList/OrderListMobile';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getUserOrderedCars } from 'src/redux/features/orders/orderedCarSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface OrderListPageProps {}

export const OrderListPage: React.FC<OrderListPageProps> = ({}) => {
  const [data, setData] = useState<IOrderedCar[]>([]);
  const { isDesktop } = useDetectScreen();
  const userId = useAppSelector((state) => state.userInfoSlice.id);

  const toast = useToast();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getUserOrderedCars(userId))
        .unwrap()
        .then((data) => setData(data))
        .catch((error) =>
          toast({
            title: error,
            status: 'error',
            position: 'top',
          })
        );
    }
  }, [userId]);

  return (
    <>
      {!isDesktop ? (
        <OrderListMobile orderList={data} />
      ) : (
        <OrderListDesktop orderList={data} />
      )}
    </>
  );
};
