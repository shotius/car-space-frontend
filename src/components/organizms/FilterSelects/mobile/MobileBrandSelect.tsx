import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { MobileBrandPopup } from 'src/components/molecules/MobileSelectPopups/MobileBrandSelectPopup';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectBrand } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';

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
        label={capitalizeEach(selectedBrands.join(', ')) || 'Manufacturer'}
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
