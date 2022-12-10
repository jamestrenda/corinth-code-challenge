import { getWeightInPounds } from '../utils/getWeightInPounds';

describe('utils', () => {
  it('converts whole kg into pounds', () => {
    const result = getWeightInPounds(77);
    expect(result).toBe(`170 lbs`);
  });
  it('converts decimal into pounds', () => {
    const result = getWeightInPounds(100.5);
    expect(result).toBe(`222 lbs`);
  });
});
