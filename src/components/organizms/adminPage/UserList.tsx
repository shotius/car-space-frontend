import {
  AspectRatio,
  Button,
  Center,
  HStack,
  Image,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import userIcon from 'src/assets/png/user.png';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { getUsers } from 'src/redux/features/auth/userSlice';
import { IUser } from '../../../../../server/shared_with_front/types/types-shared';

interface UserListProps {
  setSelectedUser: (user: IUser) => void;
}

export const UserList: React.FC<UserListProps> = ({ setSelectedUser }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 4;

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('page changed');
    fetchUsers(page);
  }, [page]);

  function fetchUsers(page: number) {
    setFetching(true);
    dispatch(getUsers(`page=${page}&limit=${limit}`))
      .unwrap()
      .then((data) => {
        setUsers(data.users);
        setTotalPages(data.totalPages);
        setFetching(false);
      });
  }

  return (
    <VStack align="flex-start" spacing={'0'}>
      {fetching && (
        <Center w="full">
          <Spinner justifySelf={'center'} />
        </Center>
      )}
      {users.map((user, i) => (
        <HStack
          key={user.id}
          cursor={'pointer'}
          transition="all .2s"
          _hover={{ bg: 'autoGrey.200' }}
          w="full"
          py="4"
          px="2"
          onClick={() => setSelectedUser(user)}
        >
          <TextRegular alignSelf={'flex-end'}>
            {(page - 1) * limit + i + 1}.
          </TextRegular>
          <AspectRatio w="40px" ratio={1 / 1} borderRadius={'100px'} bg="white">
            <Image
              src={user.avatar}
              borderRadius="100px"
              fallbackSrc={userIcon}
            />
          </AspectRatio>
          <VStack>
            <TextRegular>{user.fullName}</TextRegular>
          </VStack>
        </HStack>
      ))}
      <HStack w="full" justify={'space-between'} px="2" py="4">
        <Button
          variant={'link'}
          color="#427AD6"
          disabled={page === 1}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          Prev
        </Button>
        <Button
          variant={'link'}
          color="#427AD6"
          disabled={page === totalPages}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};
