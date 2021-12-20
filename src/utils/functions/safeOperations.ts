const countNumberAfterDot = (num: number) => {
  const splited = num.toString().split('.');
  const result = splited.length > 1 ? splited[1].length : 0;
  return result;
};

const safeExtent = (a: number, b: number) => {
  const numbersAfterdotA = countNumberAfterDot(a);
  const numbersAfterdotB = countNumberAfterDot(b);
  return 10 ** Math.max(numbersAfterdotA, numbersAfterdotB);
};

export const safeSubtraction = (a: number, b: number) => {
  const by = safeExtent(a, b);
  const sub = a * by - b * by;
  return sub / by;
};

export const safeSum = (a: number, b: number) => {
  const by = safeExtent(a, b);
  return (a * by + b * by) / by;
};
