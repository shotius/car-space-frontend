const countNumberAfterDot = (num: number) => {
  return num.toString().split('.')[1].length;
};

export const safeSubtraction = (a: number, b: number) => {
  const by = countNumberAfterDot(b) * 10;
  const sub = a * by - b * by;
  return sub / by;
};

export const safeSum = (a: number, b: number) => {
  const by = countNumberAfterDot(b) * 10;
  return (a * by + b * by) / by;
};
