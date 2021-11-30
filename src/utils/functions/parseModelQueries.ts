import { SelectedCarModel } from '../../../../server/shared_with_front/types/types-shared';

interface Props {
  modelQueryKeys: string[];
  brands: string[];
  query: URLSearchParams;
}

// receives list of brands in the url and queries of models
// returns ready object of selected models to save in redux
export const parseModelQueries = ({
  modelQueryKeys, // all queryString keys for selected models
  brands, // all brands in url
  query
}: Props) => {
  const resultModelsObj: SelectedCarModel[] = [];

  // Iterate over all brands in the url and fill template object for adding models
  brands.map((brand) => resultModelsObj.push({ brand, models: [] }));

  // iterate over all model query keys and push them in to the models array with brand name
  modelQueryKeys.map((q) => {
    // get brand name from modelQuery string
    const brand = q.slice(q.indexOf('[') + 1, q.indexOf(']'));

    // get all models for specific brand and put in a result
    const modelsOfSpecificBrand = query.getAll(q);
    resultModelsObj.push({ brand, models: modelsOfSpecificBrand });
  });
  // filter empty models
  return resultModelsObj.filter((m) => m.models.length);
};
