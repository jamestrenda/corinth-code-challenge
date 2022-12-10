export const getWeightInPounds = (kg: string | number): string => {
  // replace commas with empty string
  const num = parseFloat(String(kg).replace(/,/g, ''));
  // check if num is a number
  const isNumber = typeof num === 'number' && !isNaN(num);
  // return input if not a number
  if (!isNumber) {
    return kg.toString();
  }
  // convert kg to pounds
  const pounds = Math.round(num * 2.204623);

  return `${pounds} lbs`;
};
