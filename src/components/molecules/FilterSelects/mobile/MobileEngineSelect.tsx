import { useDisclosure } from '@chakra-ui/hooks';
import { MobileEnginePopup } from 'src/components/molecules/MobileSelectPopups/MobileEnginePopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppSelector, useAppDispatch } from 'src/redux/app/hook';
import {
  selectEngineFrom,
  selectEnginTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileEngineSelectProps {}

export const MobileEngineSelect: React.FC<MobileEngineSelectProps> = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useAppDispatch();
  const { engineFrom: selectedEngineFrom, engineTo: selectedEngineTo } =
    useAppSelector((state) => state.selectedCarFilters);

  return (
    <>
      <MobileSelect
        label={
          selectedEngineFrom && selectedEngineTo
            ? `Engine (from - to): ${selectedEngineFrom.toFixed(
                1
              )}L -  ${selectedEngineTo.toFixed(1)}L `
            : 'Engine'
        }
        onClick={onOpen}
        hasValue={!!(selectedEngineFrom && selectedEngineTo)}
        onClear={() => {
          dispatch(selectEngineFrom(null));
          dispatch(selectEnginTo(null));
        }}
      />
      <MobileEnginePopup onClose={onClose} isOpen={isOpen} />
    </>
  );
};
