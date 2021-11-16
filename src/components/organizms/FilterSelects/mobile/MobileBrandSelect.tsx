import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { MobileBrandPopup } from 'src/components/molecules/MobileSelectPopups/MobileBrandSelect';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectBrand } from 'src/redux/features/auth/selectedCarFilterSlice';

interface MobileBrandSelectProps {}

export const MobileBrandSelect: React.FC<MobileBrandSelectProps> = ({}) => {
  const searchButtonRef = useRef(null);
  const dispatch = useAppDispatch();

  const { brands: selectedBrands } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // brand drawer
  const {
    isOpen: isBrandOpen,
    onClose: closeBrand,
    onOpen: openBrand,
  } = useDisclosure();

  return (
    <>
      <MobileSelect
        onClick={openBrand}
        label={selectedBrands.join(', ') || 'Manufacturer'}
        hasValue={!!selectedBrands.length}
        onClear={() => dispatch(selectBrand([]))}
      />
      <MobileBrandPopup
        finalFocusRef={searchButtonRef}
        isOpen={isBrandOpen}
        onClose={closeBrand}
      />
    </>
  );
};
