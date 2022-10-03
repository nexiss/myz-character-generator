import { Mutation } from '../models';
import { RANDOM, ROLE_OPTION_VALUE } from './data';
import { Current, GenerateOptions } from './store';
import {
  addAttributes,
  buildBaseInfo,
  addGear,
  addMutations,
  addSkills,
  addTalents,
  isNumber,
} from './store.utils.internal';

export const getMutations = (): Mutation[] => {
  // TODO: Filter is needed because Object.values is returning also keys
  return Object.values(Mutation).filter(isNumber) as Mutation[];
};

export const buildInitialMutations = (): Record<Mutation, boolean> => {
  return getMutations().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Mutation, boolean>
  );
};

export const generateRandomCurrent = (
  current: Current,
  roleOption: ROLE_OPTION_VALUE,
  generateOptions: GenerateOptions
): Current => {
  switch (roleOption) {
    case RANDOM:
    default:
      return buildFullRandom(current, generateOptions);
  }
};

const buildFullRandom = (
  current: Current,
  generateOptions: GenerateOptions
): Current => {
  const c1 = buildBaseInfo({ name: current.description.name }, generateOptions);
  const c2 = addAttributes(c1);
  const c3 = addMutations(c2);
  const c4 = addSkills(c3);
  const c5 = addTalents(c4);
  const c6 = addGear(c5);

  return c6;
};
