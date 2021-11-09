import { Card } from "src/components/molecules/Cards/Card";
import { HeadingSecondary } from "src/components/molecules/Headings/HeadingSecondary";

interface OrderListDesktopProps {

}

export const OrderListDesktop: React.FC<OrderListDesktopProps> = ({}) => {
    return (
      <Card p="32px" w="full">
        <HeadingSecondary w="full" textAlign="center">Table</HeadingSecondary>
      </Card>
    );
}