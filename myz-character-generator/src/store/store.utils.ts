import { Role, Mutation, Attributes, Attribute } from '../models';
import { ROLE_OPTION_VALUE, RANDOM } from './data';
import { Current } from './store';

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
        attributes: generateRandomAttributes(),
      };
  }
};

const MAX_ATTRIBUTE = 4;

// TODO: Filter is needed because Object.values is returning also keys
const filterNumbers = (n: any) => typeof n === 'number';

const generateRandomAttributes = (): Attributes => {
  return Object.values(Attribute).reduce((prev, attribute: Attribute) => {
    const isAnyAttributeMax = Object.values(prev).some(
      (at) => at === MAX_ATTRIBUTE
    );

    return {
      ...prev,
      [attribute]: isAnyAttributeMax
        ? getRandomInt(1, MAX_ATTRIBUTE - 1)
        : getBestRandomAttributeOf(3),
    } as Attributes;
  }, {} as Attributes);
};

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max + 1); // Adding 1 because maximum is exclusive
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const getBestRandomAttributeOf = (bestOf: number): number => {
  let best = 0;
  for (let i = 0; i < bestOf; i++) {
    const current = getRandomInt(1, MAX_ATTRIBUTE);
    best = current > best ? current : best;
  }
  return best;
};
