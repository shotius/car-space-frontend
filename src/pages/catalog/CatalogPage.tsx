import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import { CatalogTemplate } from 'src/components/templates/CatalogTemplate';

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  return (
    <>
      <ScrollToTop />
      <CatalogTemplate />
    </>
  );
};

export default CatalogPage;
