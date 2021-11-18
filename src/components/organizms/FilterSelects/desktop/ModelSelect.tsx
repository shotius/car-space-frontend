import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, VStack } from '@chakra-ui/layout';
import { Button, Checkbox } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppSelector } from 'src/redux/app/hook';
import { addLettersToSortedArray } from 'src/utils/functions/addLettersToSortedArray';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

interface ModelSelectProps {}

// In the compont I have 4 different variables
//1. Value: is used to display selected option
//2. Placeholder: is displayed when not searching
//3. searchWord: when user writing in search box, search word is changing
//4. selected: are Selected options, used to keep track of other three variables
export const ModelSelect: React.FC<ModelSelectProps> = () => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');

  const [isDisabled, setIsDisabled] = useState(true);

  const { models: options } = useAppSelector((state) => state.carsReducer);

  useEffect(() => {
    if (options.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true)
      setAreOptionsOpen(false)
      setValue('')
      setPlaceholder('')
      setSelected([])
    }
  }, [options]);

  // whenever selected values change change value as well
  useEffect(() => {
    setValue(selected.join(', '));
  }, [selected.length]);

  // handle option select
  const handleSelect = (opt: string) => {
    // search keyword will be cleared
    setSearchWord('');
    // if option is in selected values remove, else include
    if (selected.includes(opt)) {
      setSelected(selected.filter((o) => o !== opt));
    } else {
      setSelected([opt].concat(selected));
    }
  };

  // filter options when searchWord is specified
  const optionsToShow = addLettersToSortedArray(options).filter((option) => {
    return option.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  return (
    <Box w={['100%', '30%', '100%']}>
      <Box
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bg="rgba(0, 0, 0, 0)"
        display={areOptionsOpen ? 'block' : 'none'}
        onClick={() => {
          setAreOptionsOpen(false);
          setPlaceholder(selected.join(', '));
          setValue('');
        }}
      />
      {/*  Input */}
      <VStack position="relative">
        <InputGroup
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          onFocus={() => {
            // onFocus open Options
            setAreOptionsOpen(true);
            // if something is selected, display in placeholder
            if (selected.length) {
              setPlaceholder(selected.join(', '));
            }
            // clear value in the search field
            setValue('');
          }}
        >
          <InputGrey
            bg="transparent"
            isDisabled={isDisabled}
            border="none"
            opacity={isDisabled ? '0.4' : '1'}
            placeholder={capitalizeEach(placeholder) || 'Models'}
            value={value ? capitalizeEach(value) : searchWord}
            onChange={(e) => setSearchWord(e.currentTarget.value)}
            isTruncated
            _focus={{
              bg: 'white',
            }}
            pr="32px"
          />
          {selected.length ? (
            <InputRightElement
              children={<CloseIcon />}
              cursor="pointer"
              opacity="0.6"
              transition="all .3s"
              transform="rotate(90deg)"
              onClick={(e) => {
                if (e.stopPropagation) e.stopPropagation();
                setSelected([]);
                setValue('');
                setPlaceholder('');
                setAreOptionsOpen(false);
              }}
            />
          ) : (
            <InputRightElement
              children={
                <DropdownIcon
                  opacity={isDisabled ? '0.1' : '0.4'}
                  boxSize={5}
                  transform={areOptionsOpen ? 'rotate(180deg)' : ''}
                  transition="all .2s"
                />
              }
              pointerEvents="painted"
            />
          )}
        </InputGroup>

        {/* Options  */}
        <VStack
          w="full"
          minW="200px"
          zIndex="modal"
          position="absolute"
          top={!areOptionsOpen ? '41px' : '45px'}
          h={areOptionsOpen ? '300px' : '0px'}
          opacity={areOptionsOpen ? '1' : '0.7'}
          transition="all .25s"
          bg="white"
          boxShadow="0px 3px 10px #00000029"
          borderRadius="8px"
          p={areOptionsOpen ? '8px 0' : '0'}
          // overflow needs to be here, to totaly hide options
          overflowY={areOptionsOpen ? 'auto' : 'hidden'}
        >
          <VStack
            w="full"
            overflowY={areOptionsOpen ? 'auto' : 'hidden'}
            align="flex-start"
            p="0"
            pt="2"
            spacing="0"
          >
            {optionsToShow.map((opt) => (
              <Button
                w="full"
                p="4"
                borderRadius="none"
                display="flex"
                justifyContent="flex-start"
                variant="ghost"
                _hover={{
                  bg: "autoGrey.100"
                }}
              >
                <Checkbox
                  colorScheme="autoOrange"
                  defaultChecked={selected?.includes(opt)}
                  onChange={(e) => {
                    e.preventDefault();
                    handleSelect(opt);
                  }}
                  key={opt}
                >
                  <TextRegular>{opt}</TextRegular>
                </Checkbox>
              </Button>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};
