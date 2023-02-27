const extractCurrencyValue = (str) => {
  return Number(str.split('')
    .map((el) => Number(el))
    .filter((el) => el).join(''));
}