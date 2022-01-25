import { Heading, HStack } from '@chakra-ui/layout';
import { Image, VStack } from '@chakra-ui/react';
import CarIcon from 'src/assets/png/car with bg-1@2x.png';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { closeCatalogBanner } from 'src/redux/features/global/gloabalSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface BannerCardProps {}

export const BannerCard: React.FC<BannerCardProps> = ({}) => {
  const isOpen = useAppSelector(
    (state) => state.globalAppState.isCatalogBannerOpen
  );

  const dispatch = useAppDispatch();

  console.log('catalag banner: ', isOpen);
  const { isDesktop } = useDetectScreen();
  console.log('Desctop: ', isDesktop);

  return (
    <Card w="full" p="30px" display={isOpen ? 'block' : 'none'}>
      <HStack spacing="32px" position="relative">
        <Image src={CarIcon} w={['110px']} loading="lazy" />
        <ButtonWithIcon
          icon={CloseIcon}
          boxSize={6}
          position="absolute"
          right="-2"
          top="-2"
          _active={{ bg: 'autoGrey.400' }}
          onClick={() => {
            dispatch(closeCatalogBanner());
            dispatch(resetFilters())
          }}
        />
        <VStack alignItems="flex-start">
          <Heading fontSize="16px">Certified Car</Heading>

          <TextRegular
            fontSize="14px"
            lineHeight="24px"
            opacity="63%"
            pr="35px"
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
