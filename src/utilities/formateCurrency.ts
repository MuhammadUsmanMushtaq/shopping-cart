const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: 'SEK',
  style: 'currency',
});

export function formateCurrency(number: number) {
  return CURRENCY_FORMATER.format(number);
}
