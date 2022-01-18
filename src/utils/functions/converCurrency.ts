import axios from 'axios';
import { CurrencyType } from 'src/constants';

/**
 *  Function returns price of the currency in comparison to USD
 * @param currency
 * @returns {Number}
 */
export const currencyPrice = async (
  currency: CurrencyType
): Promise<number> => {
  if (currency === 'USD') {
    return 1;
  }

  const { data } = await axios.get(
    `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=322ae8baa27381c61e79`
  );
  return data[`USD_${currency}`];
};

export default currencyPrice;
