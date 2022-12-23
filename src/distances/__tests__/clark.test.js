import { distance } from '../..';

let v1 = [3, 1, 4, 6, 2];
let v2 = [3, 6, 9, 4, 3];

describe('Clark distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.clark(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.clark(v1, v2)).toBeCloseTo(0.85914671, 5);
  });
});
