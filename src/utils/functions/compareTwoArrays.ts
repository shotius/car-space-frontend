export const compareTwoArrays = (array1: any[], array2: any[]): boolean => {
  // sorting is essential
  const array2Sorted = array2.slice().sort();
  
  array1.length === array2.length &&
    array1
      .slice()
      .sort()
      .every(function (value, index) {
        return value === array2Sorted[index];
      });
  return false;
};
