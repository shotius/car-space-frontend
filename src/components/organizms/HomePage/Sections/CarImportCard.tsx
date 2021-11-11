import { VStack, Icon } from '@chakra-ui/react';
import { CarImportIcon } from 'src/components/atoms/Icons/CarImportIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarImportCardProps {}

export const CarImportCard: React.FC<CarImportCardProps> = ({}) => {
  return (
    <Card
      p="32px"
      w={['full', null, null, '417px']}
      h="407px"
      className="hoverable"
    >
      <VStack w="full" spacing="24px">
        <Icon as={CarImportIcon} />
        <HeadingSecondary>Car Importing</HeadingSecondary>
        <TextRegular noOfLines={4} lineHeight="24px" opacity="0.8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          consequatur, necessitatibus illo nostrum explicabo architecto,
          repudiandae magnam officiis rerum fugit corrupti excepturi quam iure
          est quaerat eveniet ipsum pariatur placeat.
        </TextRegular>
      </VStack>
    </Card>
  );
};
