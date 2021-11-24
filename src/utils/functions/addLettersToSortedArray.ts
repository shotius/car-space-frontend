// passing already sorted, Here I add first letter of alphabet
export const addLettersToSortedArray = (brands: string[]) =>
  brands.reduce<string[]>((prev, curr) => {
    // on first iteration, prev is empty
    if (prev.length === 0) {
      // add first letter and add word itself in the array
      return prev.concat(curr[0]).concat(curr);
    }

    // first letter of the next word has changed
    if (prev[prev.length - 1][0] !== curr[0]) {
      return prev.concat(curr[0]).concat(curr);
    } else {
      // else append word
      return prev.concat(curr);
    }
  }, []);
