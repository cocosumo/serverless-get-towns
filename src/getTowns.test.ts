import {describe, expect, test} from '@jest/globals';
import getTowns from './getTowns';


describe('getTowns', () => {
  test('should get all towns from toyota city"', async () => {
    const result = await getTowns();
    console.log(result.length);
    expect(result.length).toBeGreaterThan(400);
  }, 100000);
});
