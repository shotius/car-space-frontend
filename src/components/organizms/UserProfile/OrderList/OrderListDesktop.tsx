import { Button } from '@chakra-ui/button';
import { Center } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { useState } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { dateToDMY } from 'src/utils/functions/dateToDMY';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface OrderListDesktopProps {
  orderList: IOrderedCar[];
}

export const OrderListDesktop: React.FC<OrderListDesktopProps> = ({
  orderList,
}) => {
  const [isExpanded, setIsExpanded] = useState<number[]>([]);

  const handeExpand = (i: number) => {
    isExpanded.includes(i)
      ? setIsExpanded(isExpanded.filter((item) => item !== i))
      : setIsExpanded(isExpanded.concat(i));
  };

  return (
    <Card p="32px" w="full">
      {orderList.length ? (
        <Table>
          <Thead>
            <Tr opacity="0.5" fontSize="14px" fontWeight="light">
              <Th
                p={[null, null, null, '2', '4']}
                isTruncated
                fontWeight="light"
              >
                Order Id
              </Th>
              <Th fontWeight="light">Name</Th>
              <Th fontWeight="light">Created</Th>
              <Th isTruncated fontWeight="light">
                Delivery Date
              </Th>
              <Th fontWeight="light" p={[null, null, null, '2', '4']}>
                Location
              </Th>
              <Th isTruncated p="4" fontWeight="light">
                Total Price
              </Th>
              <Th fontWeight="light">Status</Th>
              <Th fontWeight="light"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderList.map((order, i) => (
              <Tr
                key={i}
                pt="50px"
                onClick={() => handeExpand(i)}
                cursor="pointer"
                _hover={{
                  bg: 'autoGrey.100',
                }}
              >
                <Td w="full" p={[null, null, null, '2', '8']} isTruncated>
                  <HeadingSecondary>{order.id}</HeadingSecondary>
                </Td>
                <Td>
                  <TextRegular
                    noOfLines={isExpanded.includes(i) ? 5 : 1}
                    fontSize="16px"
                  >
                    {order.carName}
                  </TextRegular>
                </Td>
                <Td>
                  {order.createdAt ? (
                    dateToDMY(order.createdAt)
                  ) : (
                    <NotSpecified />
                  )}{' '}
                </Td>
                <Td>
                  {order.deliveryAt ? (
                    dateToDMY(order.deliveryAt)
                  ) : (
                    <NotSpecified />
                  )}{' '}
                </Td>
                <Td p={[null, null, null, '2', '4']}>{order.location} </Td>
                <Td> $ {order.price}</Td>
                <Td>{order.status} </Td>
                <Td p="0">
                  <Button variant="link" minH="50px">
                    <DropdownIcon
                      transform={
                        isExpanded.includes(i) ? 'rotate(180deg)' : 'none'
                      }
                      transition="all .2s"
                    />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Center>
          <HeadingSecondary>Order list is empty</HeadingSecondary>
        </Center>
      )}
    </Card>
  );
};
