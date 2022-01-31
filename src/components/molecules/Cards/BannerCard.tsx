import { AspectRatio, Heading, HStack } from '@chakra-ui/layout';
import { Image, VStack } from '@chakra-ui/react';
import userIcon from 'src/assets/png/user.png';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { closeCatalogBanner } from 'src/redux/features/banners/CatalogBannerSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface BannerCardProps {}

export const BannerCard: React.FC<BannerCardProps> = ({}) => {
  const isOpen = useAppSelector(
    (state) => state.catalogBanner.isCatalogBannerOpen
  );

  const dealerName = useAppSelector(
    (state) => state.catalogBanner.catalogBannerDealerName
  );

  const dealerImage = useAppSelector(
    (state) => state.catalogBanner.catalogBannerImage
  );

  const dispatch = useAppDispatch();

  return (
    <Card w="full" p={['4', '30px']} display={isOpen ? 'block' : 'none'}>
      <HStack spacing="32px" position="relative">
        <AspectRatio
          minW={['60px', null, '80px']}
          ratio={1 / 1}
          borderRadius={'100px'}
          bg="white"
        >
          <Image
            src={dealerImage}
            borderRadius="100px"
            fallbackSrc={userIcon}
          />
        </AspectRatio>
        <ButtonWithIcon
          icon={CloseIcon}
          boxSize={6}
          position="absolute"
          right="-2"
          top={['50%', '-2']}
          transform={['translateY(-50%)', 'translateY(0%)']}
          _active={{ bg: 'autoGrey.400' }}
          onClick={() => {
            dispatch(resetFilters());
            dispatch(setCatalogQuery(''));
            dispatch(closeCatalogBanner());
          }}
        />
        <VStack alignItems="flex-start">
          <Heading fontSize="16px">{dealerName}</Heading>

          <TextRegular
            fontSize="14px"
            lineHeight="24px"
            opacity="63%"
            pr="35px"
            display={['none', null, 'block']}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, magnam deleniti voluptatum officiis tempore aperiam
            quasi error hic reiciendis facilis dicta saepe quam vel ex tempora
            impedit accusamus blanditiis nisi? aperiam quasi error accusamus
            blanditiis nisi?
          </TextRegular>
        </VStack>
      </HStack>
    </Card>
  );
};
