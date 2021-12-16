import {
    AspectRatio,
    HStack,
    Image,
    StackProps,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from 'src/redux/app/hook';
import { getUsers } from 'src/redux/features/auth/userSlice';
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

interface UserSelectProps {
  onSelect: (item: string) => void;
  name?: string;
}

export const UserSearchSelect: React.FC<UserSelectProps & StackProps> = ({
  onSelect,
  name,
  ...rest
}) => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [placeholder, setPlaceholder] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [userList, setUserList] = useState<IUser[]>([]);
  const dispatch = useAppDispatch();
  const toast = useToast();

  // -- Placehodler update
  const updatePlaceholder = () => {
    selectedUser
      ? setPlaceholder(selectedUser.name)
      : setPlaceholder('Search for user...');
  };

  const getUserAsync = (value: string) => {
    dispatch(getUsers(value))
      .unwrap()
      .then((data) => {
        setUserList(data);
      })
      .catch(() =>
        toast({
          title: 'Could not fetch users',
          position: 'top',
          status: 'error',
          duration: 2000,
        })
      );
  };

  const usersToShow = userList.filter((user) =>
    user.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
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
              selectedUser ? capitalizeEach(selectedUser.name) : searchWord
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
          {usersToShow.map((user) => (
            <ButtonRect
              h="80px"
              onClick={() => {
                setPlaceholder(user.name);
                onToggle();
                onSelect(user.id);
                setSelectedUser(user);
              }}
              key={user.id}
            >
              <HStack w="full">
                <AspectRatio ratio={1 / 1} w="50px">
                  <Image
                    w="full"
                    h="full"
                    src={user.avatar}
                    fallbackSrc="https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg"
                    borderRadius="100px"
                  />
                </AspectRatio>
                <HeadingSecondary>{user.name}</HeadingSecondary>
              </HStack>
            </ButtonRect>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
