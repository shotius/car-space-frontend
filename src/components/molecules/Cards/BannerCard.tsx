import { Heading, HStack } from '@chakra-ui/layout';
import { Image, useMediaQuery, VStack } from '@chakra-ui/react';
import CarIcon from "src/assets/png/car with bg-1@2x.png";
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { closeCatalogBanner } from 'src/redux/features/global/gloabalSlice';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface BannerCardProps {}

export const BannerCard: React.FC<BannerCardProps> = ({}) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const {isCatalogBannerOpen: isOpen} = useAppSelector(state => state.globalAppState)
  const dispatch = useAppDispatch()

  return (
    <>
      {isLargerThan1280 && (
        <Card
          w="full"
          p="30px"
          display={isOpen ? 'block' : 'none'}
        >
          <HStack spacing="32px" position="relative">
            <Image src={CarIcon} w={['110px']} loading="lazy"/>
            <ButtonWithIcon
              icon={CloseIcon}
              boxSize={6}
              position="absolute"
              right="-2"
              top="-2"
              _active={{ bg: 'autoGrey.400' }}
              onClick={() => dispatch(closeCatalogBanner())}
            />
            <VStack alignItems="flex-start">
              <Heading fontSize="16px">Certified Car</Heading>

              <TextRegular
                fontSize='14px'
                lineHeight="24px"
                opacity="63%"
                pr="35px"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque, magnam deleniti voluptatum officiis tempore aperiam
                quasi error hic reiciendis facilis dicta saepe quam vel ex
                tempora impedit accusamus blanditiis nisi? aperiam quasi error
                accusamus blanditiis nisi?
              </TextRegular>
            </VStack>
          </HStack>
        </Card>
      )}
    </>
  );
};
