import { Image } from '@chakra-ui/image';
import { AspectRatio, VStack } from '@chakra-ui/layout';
import { HStack, SimpleGrid } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FALLBACK_IMG } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setDealerId } from 'src/redux/features/auth/selectedCarFilterSlice';
import {
  openCatalogBanner,
  setCatalogBannerDealerImage,
  setCatalogBannerDealerName,
} from 'src/redux/features/banners/CatalogBannerSlice';
import { baseCatalogQuerySelector } from 'src/redux/features/global/gloabalSlice';
import { DEALER_CARS_CATALOG_URL } from 'src/utils/config/contants';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import {
  ICarDealer,
  IUser,
} from '../../../../../server/shared_with_front/types/types-shared';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface DealerCardProps {
  dealer: IUser;
}

export const DealerCard: React.FC<DealerCardProps> = ({ dealer }) => {
  const cars = dealer.addedCars as unknown as ICarDealer[];
  const carImages = cars[0].imgUrls;

  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isDesktop } = useDetectScreen();
  const baseCatalogQuery = useAppSelector(baseCatalogQuerySelector);

  return (
    <Card
      w="full"
      p="4"
      h="auto"
      className={`${isDesktop && 'hoverable'}`}
      cursor="pointer"
      onClick={() => {
        dispatch(setDealerId(dealer.id));
        dispatch(setCatalogBannerDealerName(dealer.fullName));
        dispatch(setCatalogBannerDealerImage(dealer.avatar));
        dispatch(openCatalogBanner());
        history.push(
          `${DEALER_CARS_CATALOG_URL}?${baseCatalogQuery}&dealerId=${dealer.id}`
        );
      }}
    >
      <VStack w="full" spacing="12px">
        <HStack w="full" justify="space-between">
          <HeadingSecondary fontSize="14px" cursor="pointer">
            {dealer.fullName}
          </HeadingSecondary>
          <TextRegular opacity=".5" cursor="pointer" fontSize="14px">
            {dealer.addedCars.length} vehicles
          </TextRegular>
        </HStack>
        <SimpleGrid
          gridTemplateAreas={`"a a b" "a a c"`}
          w="full"
          maxH="130px"
          gap="2"
        >
          <AspectRatio ratio={191 / 130} w="full" gridArea="a" maxH="130px">
            <Image
              src={carImages[0] ? carImages[0] : undefined}
              fallbackSrc={FALLBACK_IMG}
              borderRadius="3px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="b" maxH="61px">
            <Image
              src={carImages[1] ? carImages[1] : undefined}
              fallbackSrc={FALLBACK_IMG}
              borderRadius="3px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="c" maxH="61px">
            <Image
              src={carImages[2] ? carImages[2] : undefined}
              fallbackSrc={FALLBACK_IMG}
              borderRadius="3px"
            />
          </AspectRatio>
        </SimpleGrid>
      </VStack>
    </Card>
  );
};
