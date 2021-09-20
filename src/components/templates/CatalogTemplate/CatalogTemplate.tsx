import { Heading } from '@chakra-ui/layout';
import { CatalogList } from 'components/organizms/CatalogList';
import React from 'react';
import { PublicLayout } from '../Layouts/PublicLayout';

interface CatalogTemplateProps {}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = () => {
  return (
    <PublicLayout>
      <Heading textAlign="center" padding="6">
        Catalog
      </Heading>
        <CatalogList />
    </PublicLayout>
  );
};
