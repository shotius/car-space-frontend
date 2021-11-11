import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/input';
import { Center } from '@chakra-ui/layout';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { InputRegular } from './InputRegular';

interface SearchInputProps {
  searchWord: string;
  setSearchWord: (word: string) => void;
}

type Props = React.ComponentProps<typeof InputRegular>;

export const SearchInput: React.FC<SearchInputProps & Props> = ({
  searchWord,
  setSearchWord,
  ...rest
}) => {
  return (
    <InputGroup w="full">
      <InputLeftElement children={<SearchIcon fill="autoGrey.400" />} />
      <InputRightElement
        children={
          <Center w="full" h="full">
            <ButtonWithIcon
              icon={CloseIcon}
              onClick={() => {
                setSearchWord('');
              }}
              bg="transparent"
            />
          </Center>
        }
        display={!!searchWord ? 'block' : 'none'}
      />
      <InputRegular
        placeholder="Search"
        borderRadius="8px"
        variant="filled"
        pl="40px"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        {...rest}
      />
    </InputGroup>
  );
};
