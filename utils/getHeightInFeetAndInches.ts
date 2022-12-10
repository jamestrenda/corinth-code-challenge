export const getHeightInFeetAndInches = (heightInCm: number): string => {
  // convert cm into inches
  const heightInInches = heightInCm * 0.3937008;
  // Calculate the number of whole feet by dividing the total height in inches by 12
  const feet = Math.floor(heightInInches / 12);
  // Calculate the number of remaining inches by taking the remainder of the total height in inches divided by 12
  const inches = Math.round(heightInInches % 12);

  // Return the height in feet and inches as a string
  return `${feet}' ${inches}"`;
};
