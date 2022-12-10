export const getWeightInPounds = (kg: number): string => {
  const pounds = Math.round(kg * 2.204623);

  return `${pounds} lbs`;
};
