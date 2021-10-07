import { CatalogList } from 'components/organizms/CatalogList';
import React from 'react';
import { PublicLayout } from '../Layouts/PublicLayout';

interface CatalogTemplateProps {}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = () => {
  return (
    <PublicLayout>
        <CatalogList />
    </PublicLayout>
  );
};
