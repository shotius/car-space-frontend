import { Button, Center, HStack, Spinner, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ListAvatarItem } from 'src/components/molecules/ListAvatarItem';
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
  const limit = 20;

  const dispatch = useAppDispatch();

  useEffect(() => {
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
        <ListAvatarItem
          key={user.id}
          index={(page - 1) * limit + i + 1}
          onClick={() => setSelectedUser(user)}
          avatar={user.avatar}
          mainText={user.fullName}
          secondaryText={user.role}
          verified={user.verified}
        />
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
