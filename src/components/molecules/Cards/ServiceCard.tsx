import { BoxProps, HStack, VStack } from '@chakra-ui/react';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface ServiceCardProps {
  Icon: any;
  heading: string;
  content: string;
}

export const ServiceCard: React.FC<ServiceCardProps & BoxProps> = ({
  Icon,
  heading,
  content,
  ...rest
}) => {
  return (
  <Card p={["16px", null, "32px"]} {...rest}>
      <HStack spacing="4">
        {/* desktop dispaly icon  */}
        <Icon
          as={Icon}
          boxSize={10}
          display={['none', null, 'block']}
          alignSelf={'flex-start'}
        />

        <VStack spacing={'4'}>
          <HStack w="full" spacing={['4', null, '0']}>
            {/* mobile display icon  */}
            <Icon as={Icon} boxSize={10} display={[null, null, 'none']} />
            <TextRegular fontSize="20px" color="#3D405B" fontWeight={'bold'}>
              {heading}
            </TextRegular>
          </HStack>
          <TextRegular fontSize={'14px'} lineHeight={'24px'} opacity={'80%'}>
            {content}
          </TextRegular>
        </VStack>
      </HStack>
    </Card>
  );
};
