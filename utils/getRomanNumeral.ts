export const getRomanNumeral = (num: number): string => {
  const romanNumerals = [
    'i',
    'ii',
    'iii',
    'iv',
    'v',
    'vi',
    'vii',
    'viii',
    'ix',
    'x',
    'xi',
    'xii',
    'xiii',
    'xiv',
    'xv',
    'xvi',
    'xvii',
    'xviii',
    'xix',
    'xx',
    'xxi',
    'xxii',
    'xxiii',
    'xxiv',
    'xxv',
    'xxvi',
    'xxvii',
    'xxviii',
    'xxix',
    'xxx',
    'xxxi',
    'xxxii',
    'xxxiii',
    'xxxiv',
    'xxxv',
    'xxxvi',
    'xxxvii',
    'xxxviii',
    'xxxix',
    'xl',
    'xli',
    'xlii',
    'xliii',
    'xliv',
    'xlv',
    'xlvi',
    'xlvii',
    'xlviii',
    'xlix',
    'l',
    'li',
    'lii',
    'liii',
    'liv',
    'lv',
    'lvi',
    'lvii',
    'lviii',
    'lix',
    'lx',
    'lxi',
    'lxii',
    'lxiii',
    'lxiv',
    'lxv',
    'lxvi',
    'lxvii',
    'lxviii',
    'lxix',
    'lxx',
    'lxxi',
    'lxxii',
    'lxxiii',
    'lxxiv',
    'lxxv',
    'lxxvi',
    'lxxvii',
    'lxxviii',
    'lxxix',
    'lxxx',
    'lxxxi',
    'lxxxii',
    'lxxxiii',
    'lxxxiv',
    'lxxxv',
    'lxxxvi',
    'lxxxvii',
    'lxxxviii',
    'lxxxix',
    'xc',
    'xci',
    'xcii',
    'xciii',
    'xciv',
    'xcv',
    'xc',
  ];
  return romanNumerals[num - 1];
};
