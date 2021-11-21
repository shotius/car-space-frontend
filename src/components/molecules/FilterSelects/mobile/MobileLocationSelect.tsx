import { Box, BoxProps, useDisclosure } from '@chakra-ui/react';
import { MobileLocationPopup } from 'src/components/molecules/MobileSelectPopups/MobileLocationPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectLocations } from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileLocationSelectProps {}

export const MobileLocationSelect: React.FC<
  MobileLocationSelectProps & BoxProps
> = ({
  w='full',
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const { locations: selection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  return (
    <Box minW={w} maxW={w} {...rest}>
      <MobileSelect
        onClick={onOpen}
        label={selection.length ? ` ${selection.join(', ')}` : 'Locations'}
        hasValue={!!selection.length}
        onClear={() => dispatch(selectLocations([]))}
      />
      <MobileLocationPopup isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
