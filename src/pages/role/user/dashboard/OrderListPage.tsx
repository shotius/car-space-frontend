import { OrderListDesktop } from 'src/components/organizms/UserProfile/OrderList/OrderListDesktop';
import { OrderListMobile } from 'src/components/organizms/UserProfile/OrderList/OrderListMobile';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface OrderListPageProps {}
export interface IOrderData {
  orderId: number;
  name: string;
  createdDate: Date;
  deliveryDate: Date;
  location: string;
  totalPrice: number;
  status: string;
}

export const OrderListPage: React.FC<OrderListPageProps> = ({}) => {
  const data: IOrderData[] = [
    {
      orderId: 123123,
      name: 'Chevrolet Cruze',
      createdDate: new Date(),
      deliveryDate: new Date(2021, 12, 12),
      location: 'USA',
      totalPrice: 20000,
      status: 'Completed',
    },
    {
      orderId: 123123,
      name: 'Chevrolet Cruze Chevrolet',
      createdDate: new Date(),
      deliveryDate: new Date(2021, 12, 12),
      location: 'USA',
      totalPrice: 20000,
      status: 'Completed',
    },
    {
      orderId: 123123,
      name: 'Chevrolet Cruze',
      createdDate: new Date(),
      deliveryDate: new Date(2021, 12, 12),
      location: 'USA',
      totalPrice: 20000,
      status: 'Completed',
    },
    {
      orderId: 123123,
      name: 'Chevrolet Cruze',
      createdDate: new Date(),
      deliveryDate: new Date(2021, 12, 12),
      location: 'USA',
      totalPrice: 20000,
      status: 'Completed',
    },
    {
      orderId: 123123,
      name: 'Chevrolet Cruze',
      createdDate: new Date(),
      deliveryDate: new Date(2021, 12, 12),
      location: 'USA',
      totalPrice: 20000,
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
