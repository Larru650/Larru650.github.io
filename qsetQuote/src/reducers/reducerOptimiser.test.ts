import { SMap } from '@avantia/client-and-server-utilities';
import { swapIn, swapOut } from './reducerOptimiser';

describe('reducerOptimiser', () => {
  describe('swapOut and swapIn', () => {
    it('works', () => {
      function createMap(): SMap<number> {
        return { a: 1, b: 2, c: 3, d: 4 };
      }

      // arrange
      const key = 'numbers';
      const map = createMap();

      // act
      const { map: intermediate, origCount: outOrigCount, newCount: outNewCount } = swapOut(key, map, {
        a: true,
        b: true
      });

      // assert
      expect(intermediate).toEqual({ a: 1, b: 2 });
      expect(intermediate).not.toBe(map);
      expect(outOrigCount).toBe(4);
      expect(outNewCount).toBe(2);

      // act
      const { map: final, newCount, origCount } = swapIn(key, intermediate);

      // assert
      expect(final).toEqual(createMap());
      expect(final).not.toBe(intermediate);
      expect(newCount).toBe(4);
      expect(origCount).toBe(2);
    });
  });
});
