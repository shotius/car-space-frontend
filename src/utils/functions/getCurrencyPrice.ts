import { roundFloatTo } from 'src/utils/functions/roundFloatTo';
import axios from 'axios';
import { CurrencyType } from 'src/constants';
import localStorageServise from 'src/services/localStorage.service';

async function getCurrencyByApiCall(currency: CurrencyType) {
  const { data } = await axios.get(
    'https://api.currencyapi.com/v3/latest?apikey=76d033b0-7935-11ec-9e6b-8d25570c7533&base_currency=USD'
  );
  return data.data[currency].value;
}

function getCurrencyPriceFromCache(currency: CurrencyType) {
  return localStorageServise.getItem(currency);
}

function saveCurrencyPriceInCache(currency: CurrencyType, price: number) {
  localStorageServise.setItem({
    key: currency,
    value: price.toString(),
    ttl: 1000 * 60 * 60 * 24, // will expire in one day
  });
}

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
  const cachedCurrency = getCurrencyPriceFromCache(currency);
  if (cachedCurrency) {
    return parseFloat(cachedCurrency);
  } else {
    const price = await getCurrencyByApiCall(currency);
    saveCurrencyPriceInCache(currency, price);
    return price;
  }
};

export const getLariPrice = async () => {
  return await getCurrencyPrice('GEL');
};

interface convertPriceProps {
  from: CurrencyType;
  to: CurrencyType;
  amount: number;
}
/**Convert one currency amount in to another */
export async function converCurrencyPrice({ from, to, amount }: convertPriceProps) {
  const fromCurrencyPrice = await getCurrencyPrice(from)
  const toCurrencyPrice = await getCurrencyPrice(to)
  const result = amount/fromCurrencyPrice*toCurrencyPrice
  return roundFloatTo(result, 3)
}

export default getCurrencyPrice;
