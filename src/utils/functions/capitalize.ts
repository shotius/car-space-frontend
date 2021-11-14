export const capitalize = (sentence: string) => {
  const words = sentence.toLocaleLowerCase().split(' ');
  const firstWord = words[0];
  const capitalized =
    firstWord[0].toUpperCase() + firstWord.slice(1) + words.slice(1);
  return capitalized;
};
