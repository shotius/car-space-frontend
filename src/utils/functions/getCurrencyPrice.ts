import axios from 'axios';
import { CurrencyType } from 'src/constants';

// web site: https://freecurrencyapi.net/dashboard
// api account email : fonovib850@nabajin.com
// password: 123123123

/**
 *  Function returns price of the currency in comparison to USD
 * @param currency
 * @returns {Number}
 */
export const getCurrencyPrice = async (
  currency: CurrencyType
): Promise<number> => {
  // if curency is dollar return 1 else make request
  if (currency === 'USD') {
    return 1;
  }

  const { data } = await axios.get(
    `https://freecurrencyapi.net/api/v2/latest?apikey=76d033b0-7935-11ec-9e6b-8d25570c7533&base_currency=USD`
  );
  return data.data[currency];
};

export default getCurrencyPrice;
