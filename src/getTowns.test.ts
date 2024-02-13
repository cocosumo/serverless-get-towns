import {describe, expect, test} from '@jest/globals';
import getTowns from './getTowns';


describe('getTowns', () => {
  test('should get all towns from toyota city"', async () => {
    const result = await getTowns();
    
  });
});
