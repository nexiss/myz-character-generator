import { Mutation } from '../../models';

export const buildInitialMutations = (): Record<Mutation, boolean> => {
  return getMutations().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Mutation, boolean>
  );
};

export const getMutations = (): Mutation[] => {
  return Object.values(Mutation);
};
