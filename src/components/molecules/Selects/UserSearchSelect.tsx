import {
  AspectRatio,
  HStack,
  Image,
  StackProps,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from 'src/redux/app/hook';
import { searchUsers } from 'src/redux/features/auth/userSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { IUser } from '../../../../../server/shared_with_front/types/types-shared';
import { ButtonRect } from '../Buttons/ButtonRect';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { SelectSearch } from '../Inputs/SelectSearch';
import { CustomOverlay } from '../overlays/CustomOverlay';
import { SelectTrigger } from '../triggerers/SelectTrigger';
import { SelectContent } from '../Wrappers/SelectContent';
import { SelectOptions } from '../Wrappers/SelectOptions';
import { SelectWrapper } from '../Wrappers/SelectWrapper';
import userIcon from 'src/assets/png/user.png';

interface UserSelectProps {
  onSelect: (user: string) => void;
  onUserSelect?: (user: IUser) => void;
  name?: string;
}

export const UserSearchSelect: React.FC<UserSelectProps & StackProps> = ({
  onSelect,
  name,
  onUserSelect,
  ...rest
}) => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [placeholder, setPlaceholder] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [userList, setUserList] = useState<IUser[]>([]);
  const [fetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();

  // -- Placehodler update
  const updatePlaceholder = () => {
    selectedUser
      ? setPlaceholder(selectedUser.fullName)
      : setPlaceholder('Search for user...');
  };

  const getUserAsync = (value: string) => {
    setFetching(true);
    dispatch(searchUsers(value))
      .unwrap()
      .then((data) => {
        setUserList(data);
        setFetching(false);
      })
      .catch(() => {
        toast({
          title: 'Could not fetch users',
          position: 'top',
          status: 'error',
          duration: 2000,
        });
        setFetching(false);
      });
  };

  const usersToShow = userList.filter((user) =>
    user.fullName.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
  );

  return (
    <SelectWrapper areOptionsOpen={isOpen} {...rest}>
      <CustomOverlay onClick={onClose} isActive={isOpen} />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={isOpen}
          areOptionsSelected={!!selectedUser}
          clearCb={() => {
            setSelectedUser(undefined);
          }}
        >
          <SelectSearch
            autoComplete="off"
            bg="autoGrey.200"
            name={name || ''}
            label="Search for user..."
            placeholder={placeholder}
            value={
              selectedUser ? capitalizeEach(selectedUser.fullName) : searchWord
            }
            onChange={(e) => {
              const value = e.currentTarget.value;
              getUserAsync(value);
              setSearchWord(value);
              setSelectedUser(undefined);
              if (value) {
                onOpen();
              }
            }}
            onFocus={() => {
              // if something is selected, display in placeholder
              updatePlaceholder();
            }}
          />
        </SelectTrigger>
        <SelectOptions isOpen={isOpen}>
          {fetching ? (
            <HeadingSecondary textAlign="center" w="full">
              Fetching ...{' '}
            </HeadingSecondary>
          ) : (
            usersToShow.map((user) => (
              <ButtonRect
                h="80px"
                onClick={() => {
                  setPlaceholder(user.fullName);
                  onToggle();
                  onSelect(user.id);
                  onUserSelect && onUserSelect(user);
                  setSelectedUser(user);
                }}
                key={user.id}
              >
                <HStack w="full" py="2">
                  <AspectRatio ratio={1 / 1} w="50px">
                    <Image
                      w="full"
                      h="full"
                      src={user.avatar}
                      fallbackSrc={userIcon}
                      borderRadius="100px"
                    />
                  </AspectRatio>
                  <HeadingSecondary>{user.fullName}</HeadingSecondary>
                </HStack>
              </ButtonRect>
            ))
          )}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
