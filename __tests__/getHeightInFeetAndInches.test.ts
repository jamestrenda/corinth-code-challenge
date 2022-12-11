import { getHeightInFeetAndInches } from '../utils/getHeightInFeetAndInches';

describe('utils', () => {
  it('converts whole cm to feet and inches', () => {
    const result = getHeightInFeetAndInches(172);
    expect(result).toBe(`5' 8"`);
  });
  it('converts decimal to feet and inches', () => {
    const result = getHeightInFeetAndInches(100.5);
    expect(result).toBe(`3' 4"`);
  });
  it('rounds to the nearest foot', () => {
    const result = getHeightInFeetAndInches(182);
    expect(result).toBe(`6' 0"`);
  });
});
