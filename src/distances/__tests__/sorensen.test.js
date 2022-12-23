import { distance } from '../..';

let v1 = [0, 1, 4, 6, 2];
let v2 = [3, 6, 9, 4, 3];

describe('Sørensen distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.sorensen(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.sorensen(v1, v2)).toBe(16 / 38);
  });
});
