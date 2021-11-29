export const toTrippleNumber = (num: number) => {
  const threeLetters = [...num.toString()]
    .reverse()
    .join('')
    .match(/.{1,3}/g);

  if (threeLetters) {
    return [...threeLetters?.join(' ')].reverse();
  } else {
    return num 
  }
};
