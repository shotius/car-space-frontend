import { AspectRatio, Image } from "@chakra-ui/react";
import { ScrollableDiv } from "../../../molecules/ScrollableDiv";

interface CarDetailSliderProps {}

export const CarDetailSliderMobile: React.FC<CarDetailSliderProps> = ({}) => {
  return (
    <>
      <AspectRatio ratio={375 / 295} w="full" maxH="400px">
        <Image src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg" />
      </AspectRatio>
      <ScrollableDiv
        cardCount={5}
        w="full"
        spacing="2"
        p="8px 16px 8px 16px"
        pt="2"
      >
        <Image
          src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
          minW="109px"
          borderRadius="8px"
        />
        <Image
          src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
          minW="109px"
          borderRadius="8px"
        />
        <Image
          src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
          minW="109px"
          borderRadius="8px"
        />
        <Image
          src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
          minW="109px"
          borderRadius="8px"
        />
        <Image
          src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
          minW="109px"
          borderRadius="8px"
        />
      </ScrollableDiv>
    </>
  );
};
