import { Box, SimpleGrid } from '@chakra-ui/layout';
import { DealerCard } from 'src/components/molecules/Cards/DealerCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { IUser } from '../../../../../../server/shared_with_front/types/types-shared';

interface DealersSectionProps {
  dealers: IUser[];
}

export const DealersSection: React.FC<DealersSectionProps> = ({ dealers }) => {
  return (
    <Box w="full">
      <SectionHeader mainText="Dealers" />
      <SimpleGrid
        spacing="4"
        gridTemplateColumns={[
          '1fr',
          '1fr 1fr',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
      >
        {!dealers.length ? (
          <HeadingSecondary pl="4">Dealers will appear here</HeadingSecondary>
        ) : (
          dealers.map((dealer) => (
            <DealerCard key={dealer.id} dealer={dealer} />
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};
