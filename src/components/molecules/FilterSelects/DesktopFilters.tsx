import {
  Collapse,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  StackProps
} from '@chakra-ui/react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CloseOutlineIcon } from 'src/components/atoms/Icons/CloseOutline';
import { FiltersIcon } from 'src/components/atoms/Icons/FiltersIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleAdvancedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SearchButton } from '../Buttons/SearchButton';
import { BrandSelect } from './desktop/BrandSelect';
import { ConditionSelect } from './desktop/ConditionSelect';
import { CylinderSelect } from './desktop/CylinderSelect';
import { DrivesSelect } from './desktop/DrivesSelect';
import { EngineSelect } from './desktop/EngineSelect';
import { FuelSelect } from './desktop/FuelTypesSelect';
import { HasKeySelect } from './desktop/HasKeySelect';
import { ModelSelect } from './desktop/ModelSelect';
import { PriceSelect } from './desktop/PriceSelect';
import { SalesStatusSelect } from './desktop/SalesStatusSelect';
import { TransmissionSelect } from './desktop/TransmissionSelect';
import { TypeSelect } from './desktop/TypeSelect';
import { YearSelect } from './desktop/YearSelect';

interface ThreeHDSelectsProps {
  onSubmit: () => void;
}

export const DesktopFiltersOnCatalogPage: React.FC<
  ThreeHDSelectsProps & StackProps
> = ({
  p = '2',
  bg = '#fff',
  direction = 'row',
  borderRadius = 'md',
  onSubmit,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const { isAdvancedFiltersOpen: isOpen } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  const onToggle = () => dispatch(toggleAdvancedFilters());

  return (
    <>
      <Stack
        p={p}
        bg={bg}
        direction={direction}
        borderRadius={borderRadius}
        alignItems="center"
        {...rest}
      >
        {/* Brand Filter  */}
        <BrandSelect labelPadding="2" w={['100%', '100%', '100%']} />
        <DividerVertical
          height={['40px', null, null, '30px']}
          borderColor="gray.300"
        />
        {/* Model Select  */}
        <ModelSelect />
        <DividerVertical
          height={['40px', null, null, '30px']}
          borderColor="gray.300"
        />
        {/* Year Select  */}
        <YearSelect />
        <HStack spacing={{ md: '0', xl: '2' }}>
          <SearchButton
            w={{ md: '140px', lg: '144px', '2xl': '211px' }}
            ml={[null, null, '0px', '16px']}
            mr="2"
            onClick={onSubmit}
          />
          {!isOpen ? (
            <IconButton
              onClick={onToggle}
              icon={<FiltersIcon />}
              aria-label="open advanced filters"
              bg="white"
              _hover={{
                bg: 'white',
              }}
              _active={{
                bg: 'white',
              }}
            />
          ) : (
            <IconButton
              icon={<CloseOutlineIcon />}
              onClick={onToggle}
              aria-label="close advanced filters"
              bg="white"
              _hover={{
                bg: 'white',
              }}
              _active={{
                bg: 'white',
              }}
            />
          )}
        </HStack>
      </Stack>
      {/* this colapsable filters will appear on tablet and laptop screens */}
      <Collapse in={isOpen}>
        <SimpleGrid
          templateColumns={[
            null,
            '1fr 1fr',
            'repeat(3, 1fr)',
            'repeat(5, 1fr)',
          ]}
          spacingX="4"
          spacingY="2"
          mt={['2', '4', null, '4', null, '24px']}
        >
          <PriceSelect />
          <EngineSelect />
          <ConditionSelect />
          <TypeSelect />
          <TransmissionSelect />
          <HasKeySelect />
          <DrivesSelect />
          <SalesStatusSelect />
          <FuelSelect />
          <CylinderSelect />
        </SimpleGrid>
      </Collapse>
    </>
  );
};
