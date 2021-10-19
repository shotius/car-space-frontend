import { CatalogList } from 'src/components/organizms/CatalogList';

import { PublicLayout } from '../Layouts/PublicLayout';

interface CatalogTemplateProps {}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = () => {
  return (
    <PublicLayout>
        <CatalogList />
    </PublicLayout>
  );
};
