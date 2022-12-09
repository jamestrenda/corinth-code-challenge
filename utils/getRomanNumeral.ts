const romans = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii'];

export const getRomanNumeral = (num: number): string | undefined => {
  return romans[num - 1];
};
