import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  // const lower = allAuctionLocations.map((a) => a.toLowerCase());
  // const set = [...new Set(lower)];
  // const toFindDuplicates = (arry) =>
  //   arry.filter((item, index) => arry.indexOf(item) !== index);
  // const duplicateElementa = toFindDuplicates(lower);
  // console.log('location: ', new Set(locations.map((loc) => loc.toLowerCase())));
  // console.log('auctions: ', new Set(auctions.map((a) => a.toLowerCase())));
  return (
    <PublicLayout>
      <ContainerOuter>
        <HeadingSecondary pt="50px">No Content</HeadingSecondary>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default ServicesPage;
