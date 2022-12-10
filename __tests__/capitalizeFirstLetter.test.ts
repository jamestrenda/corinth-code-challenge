import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

describe('utils', () => {
  it('capitalizes the first letter of a string', () => {
    const result = capitalizeFirstLetter('hello');
    expect(result).toBe('Hello');
  });
});
