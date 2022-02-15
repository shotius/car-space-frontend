import { StackProps, VStack } from '@chakra-ui/layout';
import { HStack, StackDivider } from '@chakra-ui/react';
import { useEngineSelect } from 'src/utils/hooks/useEngineSelect';
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
  const {
    placeholder,
    generatedEngines,
    areOptionsOpen,
    handleClose,
    engineFrom,
    engineTo,
    claerCb,
    setAreOptionsOpen,
    isBlack,
    areOptionsSelected,
    handleSelectEngineFrom,
    handleSelectEngineTo,
  } = useEngineSelect();

  return (
    <SelectWrapper
      {...rest}
      areOptionsOpen={areOptionsOpen}
      bg="white"
      borderRadius="8px"
    >
      <CustomOverlay isActive={areOptionsOpen} onClick={handleClose} />
      <SelectContent>
        <SelectTrigger
          areOptionsOpen={areOptionsOpen}
          clearCb={claerCb}
          areOptionsSelected={areOptionsSelected}
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
            <TextRegular opacity={isBlack ? '1' : '0.5'}>
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
                    onClick={() => handleSelectEngineFrom(num)}
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
                    onClick={() => handleSelectEngineTo(num)}
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
