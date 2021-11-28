export const capitalize = (sentence: string) => {
  const sentenceLower = sentence.toLocaleLowerCase()
  const firstLetter = sentenceLower[0];

  const capitalized = firstLetter.toUpperCase() + sentenceLower.slice(1);
  return capitalized;
};
