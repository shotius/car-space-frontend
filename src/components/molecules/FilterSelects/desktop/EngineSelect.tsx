import { StackProps, VStack } from '@chakra-ui/layout';
import { HStack, StackDivider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectEngineFrom,
  selectEnginTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { TextButton } from '../../Buttons/TextButton';
import { CustomOverlay } from '../../overlays/CustomOverlay';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectTrigger } from '../../triggerers/SelectTrigger';
import { SelectContent } from '../../Wrappers/SelectContent';
import { SelectOptions } from '../../Wrappers/SelectOptions';
import { SelectWrapper } from '../../Wrappers/SelectWrapper';

interface EngineSelectProps {}

export const EngineSelect: React.FC<EngineSelectProps & StackProps> = ({
  ...rest
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [engineFrom, setEngineFrom] = useState<number>(0);
  const [engineTo, setEngineTo] = useState<number>(0);
  const [placeholder, setPlaceholder] = useState<string>('');
  const { engineFrom: initEngineFrom, engineTo: initEngineTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (engineFrom || engineTo) {
      setPlaceholder(`${engineFrom} - ${engineTo}`);
    } else {
      setPlaceholder(`engine`);
    }
  }, [engineFrom, engineTo]);

  // initialize if we have values in redux
  useEffect(() => {
    if (initEngineFrom) {
      setEngineFrom(Number(initEngineFrom));
    } else {
      setEngineFrom(0);
    }
    if (initEngineTo) {
      setEngineTo(Number(initEngineTo));
    } else {
      setEngineTo(0);
    }
  }, [initEngineFrom, initEngineTo]);

  // generate list of engine capacities
  const generatedEngines = (a: number, b: number) => {
    const list: number[] = [];
    for (let i = a; i <= b; i = parseFloat(((i * 100 + 10) / 100).toFixed(1))) {
      list.push(i);
    }
    return list;
  };

  return (
    <SelectWrapper
      {...rest}
      areOptionsOpen={areOptionsOpen}
      bg="white"
      borderRadius="8px"
    >
      <CustomOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
          dispatch(selectEngineFrom(engineFrom));
          dispatch(selectEnginTo(engineTo));
        }}
      />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={(e) => {
            if (e.stopPropagation) e.stopPropagation();
            setEngineTo(0);
            setEngineFrom(0);
            dispatch(selectEngineFrom(0));
            dispatch(selectEnginTo(0));
            setPlaceholder('');
            setAreOptionsOpen(false);
          }}
          areOptionsSelected={!!(engineFrom || engineTo)}
          onClick={() => setAreOptionsOpen((open) => !open)}
        >
          <HStack
            pl="4"
            h="40px"
            w="full"
            _hover={{
              bg: 'autoGrey.200',
            }}
            borderRadius="8px"
          >
            <TextRegular opacity={areOptionsOpen ? '1' : '0.5'}>
              {placeholder}
            </TextRegular>
          </HStack>
        </SelectTrigger>
        <SelectOptions isOpen={areOptionsOpen} w="full">
          <HStack
            h="290px"
            w="full"
            divider={<StackDivider borderColor="autoGrey.400" />}
            pr="2px"
          >
            {' '}
            <VStack h="full" w="full" spacing="4">
              <TextRegular fontSize="16px">From</TextRegular>
              <VStack
                h="full"
                w="full"
                spacing="4"
                overflowY="scroll"
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {generatedEngines(0.5, 6).map((num) => (
                  <TextButton
                    fontSize="16px"
                    key={num}
                    lineHeight="21px"
                    w="full"
                    color={engineFrom === num ? 'autoOrange.400' : '#000'}
                    onClick={() => {
                      setEngineFrom(num);
                      if (num >= engineTo) {
                        setEngineTo(num);
                      }
                    }}
                  >
                    {num.toFixed(1)}
                  </TextButton>
                ))}
              </VStack>
            </VStack>
            <VStack h="full" w="full" spacing="4">
              <TextRegular fontSize="16px">To</TextRegular>
              <VStack
                h="full"
                w="full"
                spacing="4"
                overflowY="scroll"
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {generatedEngines(0.5, 6).map((num) => (
                  <TextButton
                    fontSize="16px"
                    key={num}
                    lineHeight="21px"
                    w="full"
                    color={engineTo === num ? 'autoOrange.400' : '#000'}
                    onClick={() => {
                      setEngineTo(num);
                      if (num <= engineFrom) {
                        setEngineFrom(num);
                      }
                    }}
                  >
                    {num.toFixed(1)}
                  </TextButton>
                ))}
              </VStack>
            </VStack>
          </HStack>
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
