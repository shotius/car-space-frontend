import { Button, StackProps, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { IUser } from '../../../../../server/shared_with_front/types/types-shared';
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
  const { isOpen, onToggle, onOpen } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [placeholder, setPlaceholder] = useState('');
  const [searchWord, setSearchWord] = useState('');

  // -- Placehodler update
  const updatePlaceholder = () => {
    selectedUser
      ? setPlaceholder(selectedUser.name)
      : setPlaceholder('Search for user...');
  };

  const list = ['adsf', 'adf,', '123'];

  const usersToShow = list.filter((user) =>
    user.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
  );

  return (
    <SelectWrapper areOptionsOpen={isOpen} {...rest}>
      <CustomOverlay onClick={onToggle} isActive={isOpen} />
      <SelectContent>
        <SelectTrigger
          onClick={onOpen}
          areOptionsOpen={isOpen}
          areOptionsSelected={!!selectedUser}
          onFocus={() => {
            onToggle();
          }}
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
              setSearchWord(e.currentTarget.value);
              onOpen();
            }}
            onFocus={() => {
              // onFocus open Options
              onToggle();
              // if something is selected, display in placeholder
              updatePlaceholder();
            }}
          />
        </SelectTrigger>
        <SelectOptions isOpen={isOpen}>
          {usersToShow.map((item) => (
            <Button
              onClick={() => {
                setPlaceholder(item)
                onToggle()
                onSelect(item);
              }}
              key={item}
            >
              {item}
            </Button>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
