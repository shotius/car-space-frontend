import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <ContainerOuter>
      <HeadingSecondary pt="50px">No Content</HeadingSecondary>
    </ContainerOuter>
  );
};

export default ServicesPage;
