export const toTrippleNumber = (num: number): string => {
  const threeLetters = [...num.toString()]
    .reverse()
    .join('')
    .match(/.{1,3}/g);

  if (threeLetters) {
    return [...threeLetters?.join(' ')].reverse().join('');
  } else {
    return num.toFixed();
  }
};
