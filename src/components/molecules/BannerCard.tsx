import { HStack, VStack, Heading } from "@chakra-ui/layout";
import { CloseIcon } from "../atoms/Icons/CloseIcon";
import { IconWithButton } from "./IconWithButton";
import { TextRegular } from "./Texts/TextRegular";
import { useMediaQuery, Image } from "@chakra-ui/react"
import { useState } from "react";
import { Card } from "./Cards/Card";

interface BannerCardProps {}

export const BannerCard: React.FC<BannerCardProps> = ({}) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
  const [isShown, setIsShown] = useState(true)

  return (
    <>
      {isLargerThan1280 && (
        <Card w="full" p="30px" display={isShown ? "block" : "none"}>
          <HStack spacing="32px">
            <Image
              src="src/assets/png/car with bg-1@2x.png"
              w={{ md: '140px' }}
            />
            <VStack alignItems="flex-start">
              <IconWithButton
                icon={CloseIcon}
                mb="-20px"
                alignSelf="flex-end"
                _active={{ bg: 'autoGrey.400' }}
                onClick={() => setIsShown(false)}
              />
              <Heading fontSize="24px">Certified Car</Heading>

              <TextRegular
                fontSize={['14px', null, null, '14px', null, '18px']}
                lineHeight="32px  "
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
