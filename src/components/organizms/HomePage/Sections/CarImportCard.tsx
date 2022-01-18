import { VStack, Icon } from '@chakra-ui/react';
import { CarImportIcon } from 'src/components/atoms/Icons/CarImportIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarImportCardProps {}

export const CarImportCard: React.FC<CarImportCardProps> = ({}) => {
  return (
    <Card p="32px" w={['full', null, null, '417px']} h="407px">
      <VStack w="full" spacing="24px">
        <Icon as={CarImportIcon}/>
        <HeadingSecondary>Car Importing</HeadingSecondary>
        <TextRegular lineHeight="24px" opacity="0.8" textAlign="center">
          მანქანის ჩამოყვანა რამდენიმი ტიპის კალკულაციასთანაა დაკავშირებული.
          გთავაზობთ ამერიკიდან ტრანსპორტირების, განბაჟების, შიდა დაფინანსებისა
          და ლიზინგის კალკულატორებს, რომელიც დაგეხმარებათ დეტალურად დაიანგარიშოთ
          ყველა შესაძლო ხარჯი, რაც მანქანის ჩამოყვანასთანაა დაკავშირებული.
        </TextRegular>
      </VStack>
    </Card>
  );
};
