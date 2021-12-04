import { VStack, StackDivider, HStack } from '@chakra-ui/layout';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { NotSpecified } from '../Texts/NotSpecified';
import { TextRegular } from '../Texts/TextRegular';

interface CarSpecTableProps {
  car: ICar;
}

export const CarSpecTable: React.FC<CarSpecTableProps> = ({ car }) => {
  return (
    <VStack divider={<StackDivider />} w="full" spacing="2.5">
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">VIN number</TextRegular>
        <HeadingSecondary>{car.lN || <NotSpecified />}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Manufacturer</TextRegular>
        <HeadingSecondary>
          {car.m ? capitalize(car.m) : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Model</TextRegular>
        <HeadingSecondary>
          {car.mD ? capitalizeEach(car.mD) : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Year</TextRegular>
        <HeadingSecondary>{car.y || <NotSpecified />}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Category</TextRegular>
        <HeadingSecondary>{car.bSt || <NotSpecified />}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Fuel type</TextRegular>
        <HeadingSecondary>
          {car.fuel ? capitalize(car.fuel) : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Engine</TextRegular>
        <HeadingSecondary>
          {car.eng ? <>{car.eng} L</> : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">page</TextRegular>
        <HeadingSecondary>
          {car.od ? (
            <>{toTrippleNumber(parseInt(car.od))} km</>
          ) : (
            <NotSpecified />
          )}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Has Keys</TextRegular>
        <HeadingSecondary>
          {car.keys ? capitalize(car.keys) : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Cylinder</TextRegular>
        <HeadingSecondary>{car.cyl || <NotSpecified />}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Wheel</TextRegular>
        <HeadingSecondary>{car.dr || <NotSpecified />}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Color</TextRegular>
        <HeadingSecondary>
          {car.c ? capitalize(car.c) : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Gear type</TextRegular>
        <HeadingSecondary>
          {car.trans ? capitalize(car.trans) : <NotSpecified />}
        </HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Highlights:</TextRegular>
        <HeadingSecondary>
          {car.rd ? (
            <>
              {car.rd === 'DEFAULT' ? (
                'Run and Drive'
              ) : (
                <>{capitalizeEach(car.rd)}</>
              )}
            </>
          ) : (
            <NotSpecified />
          )}
        </HeadingSecondary>
      </HStack>
    </VStack>
  );
};
