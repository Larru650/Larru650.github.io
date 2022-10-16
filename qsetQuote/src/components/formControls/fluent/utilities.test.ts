import { mergeStyles } from './utilities';

describe('mergeStyles', () => {
  it('works for duplicated properties', () => {
    expect(mergeStyles({ display: 'none' }, { display: 'block' })).toEqual({ display: 'block' });
  });

  it('works for empty properties', () => {
    expect(mergeStyles()).toEqual({});
  });
});
