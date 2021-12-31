/**
 * Function converts string date to the dot separated date
 * @param strDate date in string format
 * @returns dot seperated date
 */
export const dateToYMD = (strDate: string, sep: string = '.') => {
  const date = new Date(strDate);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${y}${sep}${m <= 9 ? '0' + m : m}${sep}${d <= 9 ? '0' + d : d}`;
};
