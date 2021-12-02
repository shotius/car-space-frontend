import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter>
        <HeadingSecondary pt="50px">No Content</HeadingSecondary>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default ServicesPage;
