import { HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'src/components/atoms/Selects/MultiSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectCarKeys } from 'src/redux/features/auth/selectedCarFilterSlice';
import { HasKeys } from '../../../../../../server/shared_with_front/contants';
import { Keys } from '../../../../../../server/shared_with_front/types/types-shared';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface HasKeySelectProps {}

export const HasKeySelect: React.FC<HasKeySelectProps> = ({}) => {
  const [selected, setSelected] = useState<Keys | null>(null);
  const initSelection = useAppSelector(
    (state) => state.selectedCarFilters.keys
  );

  useEffect(() => {
    initSelection ? setSelected(initSelection) : setSelected(null);
  }, [initSelection]);

  const dispatch = useAppDispatch();

  return (
    <MultiSelect
      size="md"
      selected={selected ? [selected] : []}
      label={selected || 'keys'}
      clearSelected={() => {
        setSelected(null);
        dispatch(selectCarKeys(null));
      }}
      onApply={() => selected && dispatch(selectCarKeys(selected))}
      top="35px"
    >
      <SelectContent align="flex-start" spacing="0">
        <HStack
          p="2"
          pl="4"
          onClick={() => setSelected(HasKeys.YES)}
          _hover={{ bg: 'autoGrey.100' }}
          w="full"
          cursor="pointer"
        >
          <input
            type="radio"
            name="has_keys"
            value="YES"
            checked={selected === 'YES'}
            readOnly
          />
          <TextRegular>Yes</TextRegular>
        </HStack>
        <HStack
          p="2"
          pl="4"
          onClick={() => setSelected(HasKeys.NO)}
          _hover={{ bg: 'autoGrey.100' }}
          w="full"
          cursor="pointer"
        >
          <input
            type="radio"
            name="has_keys"
            value="NO"
            checked={selected === 'NO'}
            readOnly
          />
          <TextRegular>No</TextRegular>
        </HStack>{' '}
      </SelectContent>
    </MultiSelect>
  );
};
