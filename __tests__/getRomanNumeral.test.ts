import { getRomanNumeral } from '../utils/getRomanNumeral';

describe('utils', () => {
  it('displays correct roman numeral', () => {
    let result = getRomanNumeral(1);
    expect(result).toBe('i');

    result = getRomanNumeral(2);
    expect(result).toBe('ii');

    result = getRomanNumeral(3);
    expect(result).toBe('iii');

    result = getRomanNumeral(4);
    expect(result).toBe('iv');

    result = getRomanNumeral(5);
    expect(result).toBe('v');

    result = getRomanNumeral(6);
    expect(result).toBe('vi');

    result = getRomanNumeral(7);
    expect(result).toBe('vii');
  });
});
