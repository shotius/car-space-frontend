import { OrderListDesktop } from 'src/components/organizms/UserProfile/Sections/OrderListDesktop';
import { OrderListMobile } from 'src/components/organizms/UserProfile/Sections/OrderListMobile';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface OrderListPageProps {}

export const OrderListPage: React.FC<OrderListPageProps> = ({}) => {
  const { isDesktop } = useDetectScreen();
  return <>{!isDesktop ? <OrderListMobile /> : <OrderListDesktop />}</>;
};
