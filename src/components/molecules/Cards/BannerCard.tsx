import { Heading, HStack } from '@chakra-ui/layout';
import { Image, useMediaQuery, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface BannerCardProps {}

export const BannerCard: React.FC<BannerCardProps> = ({}) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isLargerThan1280 && (
        <Card
          w="full"
          p="30px"
          display={isShown ? 'block' : 'none'}
          // h={['158px']}
        >
          <HStack spacing="32px" position="relative">
            <Image src="src/assets/png/car with bg-1@2x.png" w={['110px']} />
            <ButtonWithIcon
              icon={CloseIcon}
              boxSize={6}
              position="absolute"
              right="-2"
              top="-2"
              _active={{ bg: 'autoGrey.400' }}
              onClick={() => setIsShown(false)}
            />
            <VStack alignItems="flex-start">
              <Heading fontSize="16px">Certified Car</Heading>

              <TextRegular
                fontSize='14px'
                lineHeight="24px"
                opacity="63%"
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
