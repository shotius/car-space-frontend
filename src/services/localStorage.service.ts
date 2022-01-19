///// localStorage servise for setting and retrieving data //////

type Props = {
  key: string;
  value: string;
  ttl?: number;
};

type LocalStorageValue = {
  value: string;
  expire: number;
};

//** FUnctions  */

/**
 * @description funtion sets new value to localstorage with expire date
 * @param param
 */
const setItem = ({ key, value, ttl = 999999 }: Props) => {
  const now = new Date();

  const item: LocalStorageValue = {
    value,
    expire: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * @description function returns string if key exists and not expired, otherwise null
 * @param key
 * @returns {string | null}
 */
const getItem = (key: string): string | null => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr) as LocalStorageValue;
  const now = new Date();

  if (now.getTime() > item.expire) {
    // if item is expired remove item from the localstorage
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};

/**Exportrs */
const localStorageServise = {
  setItem,
  getItem,
};

export default localStorageServise;
