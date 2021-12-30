/**
 * Function converts string date to the dot separated date
 * @param strDate date in string format
 * @returns dot seperated date
 */
export const dateToDMY = (strDate: string) => {
  const date = new Date(strDate);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${d <= 9 ? '0' + d : d}.${m <= 9 ? '0' + m : m}.${y}`;
};
