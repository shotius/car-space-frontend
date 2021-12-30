import { OrderListDesktop } from 'src/components/organizms/UserProfile/OrderList/OrderListDesktop';
import { OrderListMobile } from 'src/components/organizms/UserProfile/OrderList/OrderListMobile';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface OrderListPageProps {}
export interface IOrderData {
  id: number;
  name: string;
  createdDate: Date;
  deliveryDate: Date;
  location: string;
  totalPrice: number;
  status: string;
}

export const OrderListPage: React.FC<OrderListPageProps> = ({}) => {
  const data: IOrderedCar[] = [
    {
      id: '123123',
      carName: 'Chevrolet Cruze',
      createdAt: new Date(),
      deliveryAt: new Date(2021, 12, 12),
      location: 'USA',
      price: 20000,
      status: 'Completed',
    },
    {
      id: '123123',
      carName: 'Chevrolet Cruze Chevrolet',
      createdAt: new Date(),
      deliveryAt: new Date(2021, 12, 12),
      location: 'USA',
      price: 20000,
      status: 'Completed',
    },
    {
      id: '123123',
      carName: 'Chevrolet Cruze',
      createdAt: new Date(),
      deliveryAt: new Date(2021, 12, 12),
      location: 'USA',
      price: 20000,
      status: 'Completed',
    },
    {
      id: '123123',
      carName: 'Chevrolet Cruze',
      createdAt: new Date(),
      deliveryAt: new Date(2021, 12, 12),
      location: 'USA',
      price: 20000,
      status: 'Completed',
    },
    {
      id: '123123',
      carName: 'Chevrolet Cruze',
      createdAt: new Date(),
      deliveryAt: new Date(2021, 12, 12),
      location: 'USA',
      price: 20000,
      status: 'Completed',
    },
  ];
  const { isDesktop } = useDetectScreen();
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
