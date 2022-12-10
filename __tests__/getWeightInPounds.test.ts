import { getWeightInPounds } from '../utils/getWeightInPounds';

describe('utils', () => {
  it('converts integer kg into pounds string', () => {
    const result = getWeightInPounds(77);
    expect(result).toBe(`170 lbs`);
  });
  it('converts string kg into pounds', () => {
    const result = getWeightInPounds('1,358');
    expect(result).toBe(`2994 lbs`);
  });
  it('converts decimal into pounds', () => {
    const result = getWeightInPounds(100.5);
    expect(result).toBe(`222 lbs`);
  });
  it('converts decimal string into pounds', () => {
    const result = getWeightInPounds('100.5');
    expect(result).toBe(`222 lbs`);
  });
  it('returns input if not a number', () => {
    const test = 'unknown';
    const result = getWeightInPounds(test);
    expect(result).toBe(test);
  });
});
