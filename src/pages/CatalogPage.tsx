import { CatalogTemplate } from 'components/templates/CatalogTemplate';
import React from 'react';

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  console.log("catalog page")
  return <CatalogTemplate />;
};

