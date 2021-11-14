// param: string[]
// return: {
//  label: string,
//   options:  string[]
// }
// function is created for react select
export const getAlphabeticalGroups = (brands: string[]) => {
  // extract letters, traverse through letters and create object array
  const groups = [...new Set(brands.map((brand) => brand[0]))].map((letter) => {
    return {
      label: letter,
      options: brands
        .filter((brand) => letter === brand[0])
        .map((brand) => {
          return {
            value: brand,
            label: brand,
          };
        }),
    };
  });

  return groups;
};
