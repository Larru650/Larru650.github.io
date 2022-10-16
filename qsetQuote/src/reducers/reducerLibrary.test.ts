import { applyChanges, applyInnerChanges } from './reducerLibrary';

describe('reducerLibrary', () => {
  describe('applyInnerChanges', () => {
    it('replaces a leaf node by traversing the provided object properties', () => {
      // arrange
      const item = {
        data: {
          lookup: '8'
        }
      };

      // act
      const result = applyInnerChanges(item, ['data', 'lookup'], '9', { copyRootNode: true });

      // assert
      expect(result.data.lookup).toBe('9');
      expect(result !== item).toBe(true);
      expect(result.data !== item.data).toBe(true);
    });

    it('replaces a leaf node (using a function) by traversing the provided properties', () => {
      // arrange
      const item = {
        data: {
          lookup: { age: 8 }
        }
      };

      // act
      const result = applyInnerChanges(item, ['data', 'lookup'], (l) => applyChanges(l, { weight: 45 }), {
        copyRootNode: true
      });

      // assert
      expect(result.data.lookup).toStrictEqual({ age: 8, weight: 45 });
      expect(result.data.lookup !== item.data.lookup).toBe(true);
      expect(result !== item).toBe(true);
      expect(result.data !== item.data).toBe(true);
    });

    it('replaces a leaf node by traversing the provided array and object properties', () => {
      // arrange
      const item = {
        data: [{ lookup: '7' }, { lookup: '8' }]
      };

      // act
      const result = applyInnerChanges(item, ['data', 1, 'lookup'], '9', { copyRootNode: true });

      // assert
      expect(result.data[1].lookup).toBe('9');
      expect(result.data).toStrictEqual([{ lookup: '7' }, { lookup: '9' }]);
      expect(result !== item).toBe(true);
      expect(result.data !== item.data).toBe(true);
    });

    it('throws an exception when the path cannot be traversed', () => {
      expect(() => applyInnerChanges({}, ['data', 'lookup'], '9')).toThrow(
        'The path traversal for [data.lookup] failed at [data]. [data] is undefined.'
      );
    });

    it('throws an exception when the path cannot be traversed and provides suggestions where possible', () => {
      expect(() => applyInnerChanges({ numbers: [4, 5] }, ['data', 'lookup'], '9')).toThrow(
        'The path traversal for [data.lookup] failed at [data]. [data] is undefined. Valid properties are ["numbers"].'
      );
    });
  });
});
