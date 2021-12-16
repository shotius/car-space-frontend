import {
  HStack,
  InputGroup,
  InputRightElement,
  StackProps
} from '@chakra-ui/react';
import { useState } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { CustomOverlay } from '../overlays/CustomOverlay';
import { SelectContent } from '../Wrappers/SelectContent';
import { SelectOptions } from '../Wrappers/SelectOptions';
import { SelectWrapper } from '../Wrappers/SelectWrapper';

interface SingleSelectProps {
  selected: string;
}

export const SingleSelect: React.FC<SingleSelectProps & StackProps> = ({
  selected,
  children,
  ...rest
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);

  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <CustomOverlay
        isActive={areOptionsOpen}
        onClick={() => {
          setAreOptionsOpen(false);
        }}
      />
      <SelectContent>
        <InputGroup
          cursor="pointer"
          onClick={() => setAreOptionsOpen((open) => !open)}
          {...rest}
        >
          <HStack
            pl="4"
            pr="28px"
            h="40px"
            w="full"
            bg="white"
            _hover={{
              bg: 'autoGrey.200',
            }}
            borderRadius="8px"
          >
            <HeadingSecondary noOfLines={1}>
              {selected}
            </HeadingSecondary>
          </HStack>
          <InputRightElement
            children={
              <DropdownIcon
                boxSize={4}
                transform={areOptionsOpen ? 'rotate(180deg)' : ''}
                transition="all .2s"
              />
            }
            pointerEvents="painted"
          />
        </InputGroup>
        <SelectOptions
          isOpen={areOptionsOpen}
          {...rest}
          top="35px"
          onClick={() => setAreOptionsOpen(false)}
        >
          {children}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
