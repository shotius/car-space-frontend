import { VStack, HStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarInfoCardProps {}

export const CarInfoCard: React.FC<CarInfoCardProps> = ({}) => {
  return (
    <CardWithHeading heading="Car information">
      <TextRegular pb="30px" lineHeight="27px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        deserunt doloribus reprehenderit quibusdam facere laudantium, neque
        nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus
        excepturi assumenda modi?
      </TextRegular>
      <VStack w="full" p="24px" borderRadius="8px" bg="#F4F4F4" spacing="41px">
        <HStack w="full" justify="space-between">
          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Primary damage</TextRegular>
            <HeadingSecondary>Front End</HeadingSecondary>
          </VStack>

          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Secondary damage</TextRegular>
            <HeadingSecondary>Front End</HeadingSecondary>
          </VStack>
        </HStack>

        <HStack w="full" justify="space-between">
          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Primary damage</TextRegular>
            <HeadingSecondary>Front End</HeadingSecondary>
          </VStack>

          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Secondary damage</TextRegular>
            <HeadingSecondary>Front End</HeadingSecondary>
          </VStack>
        </HStack>
      </VStack>
    </CardWithHeading>
  );
};
