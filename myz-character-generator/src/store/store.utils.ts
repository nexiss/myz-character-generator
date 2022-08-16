import { Role, Mutation } from '../models';
import { ROLE_OPTION_VALUE, RANDOM } from './data';
import { Current } from './store';

// TODO: Filter is needed because Object.values is returning also keys
const filterNumbers = (n: any) => typeof n === 'number';

export const getRandomRole = (): Role => {
  const enumValues = Object.values(Role).filter(filterNumbers) as Role[];
  const index = Math.floor(Math.random() * enumValues.length);

  return enumValues[index];
};

export const getMutations = (): Mutation[] => {
  return Object.values(Mutation).filter(filterNumbers) as Mutation[];
};

export const buildInitialMutations = (): Record<Mutation, boolean> => {
  return getMutations().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Mutation, boolean>
  );
};

export const generateRandomCurrent = (
  current: Current,
  roleOption: ROLE_OPTION_VALUE
): Current => {
  switch (roleOption) {
    case RANDOM:
    default:
      return {
        ...current,
        role: getRandomRole(),
        attributes: {
          strength: 0,
          agility: 1,
          wits: 2,
          empathy: 3,
        },
      };
  }
};
