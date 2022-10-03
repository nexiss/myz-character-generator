import { buildInitialMutations } from './store.utils';

describe('buildInitialMutations', () => {
  it('should return an object when all values are false', () => {
    const result = buildInitialMutations();

    const areAllFalse = Object.values(result).every((v) => v === false);

    expect(areAllFalse).toBeTruthy();
  });
});
