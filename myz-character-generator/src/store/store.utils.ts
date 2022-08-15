import { Role, MutationId } from '../models';
import { ROLE_OPTION_VALUE, RANDOM } from './data';
import { Current } from './store';

// TODO: Filter is needed because Object.values is returning also keys
const filterNumbers = (n: any) => typeof n === 'number';

export const getRandomRole = (): Role => {
  const enumValues = Object.values(Role).filter(filterNumbers) as Role[];
  const index = Math.floor(Math.random() * enumValues.length);

  return enumValues[index];
};

export const getMutations = (): MutationId[] => {
  return Object.values(MutationId).filter(filterNumbers) as MutationId[];
};

export const buildInitialMutations = (): Record<MutationId, boolean> => {
  return getMutations().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<MutationId, boolean>
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
