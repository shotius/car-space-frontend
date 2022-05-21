import { Button } from '@chakra-ui/button';
import { Center } from '@chakra-ui/layout';
import { Spinner, useToast } from '@chakra-ui/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { useState } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppSelector } from 'src/redux/app/hook';
import { dateToYMD } from 'src/utils/functions/dateToYMD';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface OrderListDesktopProps {
  orderList: IOrderedCar[];
}

export const OrderListDesktop: React.FC<OrderListDesktopProps> = ({
  orderList,
}) => {
  const [isExpanded, setIsExpanded] = useState<number[]>([]);
  const fetching = useAppSelector((state) => state.orderedCars.fetching);

  const toast = useToast();

  const handeExpand = (i: number) => {
    isExpanded.includes(i)
      ? setIsExpanded(isExpanded.filter((item) => item !== i))
      : setIsExpanded(isExpanded.concat(i));
  };

  return (
    <Card p="32px" w="full">
      {fetching ? (
        <Center w="full" h="full">
          <Spinner />
        </Center>
      ) : orderList.length ? (
        <Table>
          <Thead>
            <Tr opacity="0.5" fontSize="14px" fontWeight="light">
              <Th
                p={[null, null, null, '2', '4']}
                isTruncated
                fontWeight="light"
              >
                <TextRegular textTransform="capitalize">Order Id</TextRegular>
              </Th>
              <Th fontWeight="light" px="2">
                <TextRegular textTransform="capitalize">Name</TextRegular>
              </Th>
              <Th fontWeight="light" px="2">
                <TextRegular textTransform="capitalize">Purchase date</TextRegular>
              </Th>
              <Th isTruncated fontWeight="light">
                <TextRegular textTransform="capitalize">
                  Delivery Date
                </TextRegular>
              </Th>
              <Th fontWeight="light" p={[null, null, null, '2', '4']}>
                <TextRegular textTransform="capitalize">Location</TextRegular>
              </Th>
              <Th isTruncated p="4" fontWeight="light">
                <TextRegular textTransform="capitalize">
                  Total Price
                </TextRegular>
              </Th>
              <Th fontWeight="light">
                <TextRegular textTransform="capitalize">Status</TextRegular>
              </Th>
              <Th fontWeight="light"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderList.map((order, i) => (
              <Tr
                key={i}
                pt="50px"
                _hover={{
                  bg: 'autoGrey.100',
                }}
              >
                <Td
                  w="full"
                  px="4"
                  title={order.id}
                  py={[null, null, '8', '8', '']}
                >
                  <HeadingSecondary
                    w="80px"
                    isTruncated
                    cursor="pointer"
                    onClick={() =>
                      navigator.clipboard.writeText(order.id).then(() =>
                        toast({
                          title: 'Id copied to the clipboard',
                          status: 'success',
                          position: 'top',
                        })
                      )
                    }
                  >
                    {order.id}
                  </HeadingSecondary>
                </Td>
                <Td title={order.carName} px="">
                  <TextRegular
                    noOfLines={isExpanded.includes(i) ? 10 : 1}
                    fontSize="16px"
                    w="100px"
                  >
                    {order.carName}
                  </TextRegular>
                </Td>
                <Td px="2">
                  {order.createdAt ? (
                    dateToYMD(order.createdAt.toString())
                  ) : (
                    <NotSpecified />
                  )}
                </Td>
                <Td>
                  {order.deliveryAt ? (
                    dateToYMD(order.deliveryAt.toString())
                  ) : (
                    <NotSpecified />
                  )}{' '}
                </Td>
                <Td p={[null, null, null, '2', '4']}>{order.location} </Td>
                <Td px="4" title={`$ ${order.price}`}>
                  <TextRegular fontSize="inherit" maxW="80px" isTruncated>
                    $ {order.price * 1}
                  </TextRegular>
                </Td>

                <Td>
                  <TextRegular whiteSpace="nowrap">{order.status}</TextRegular>{' '}
                </Td>
                <Td p="0">
                  <Button
                    variant="link"
                    minH="50px"
                    onClick={() => handeExpand(i)}
                  >
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
        <Center w="full" h="full">
          <HeadingSecondary>Your order list is empty</HeadingSecondary>
        </Center>
      )}
    </Card>
  );
};
