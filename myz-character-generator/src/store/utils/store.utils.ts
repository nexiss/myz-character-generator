import { CharacterSheet, PCharacterSheet, Role } from '../../models';
import { RANDOM, ROLE_OPTION_VALUE } from '.././data';
import { GenerateOptions } from '.././state';
import {
  addAttributes,
  buildBaseInfo,
  addGear,
  addMutations,
  addSkills,
  addTalents,
  getRandomInt,
} from './store.utils.internal';

export const generateRandomCurrent = (
  current: CharacterSheet,
  roleOption: ROLE_OPTION_VALUE,
  generateOptions: GenerateOptions
): CharacterSheet => {
  switch (roleOption) {
    case Role.ENFORCER:
    case Role.GEARHEAD:
    case Role.STALKER:
    case Role.FIXER:
    case Role.DOG_HANDLER:
    case Role.CHRONICLER:
    case Role.BOSS:
    case Role.SLAVE:
      return buildRandom(current, generateOptions, roleOption);
    case RANDOM:
    default:
      return buildRandom(current, generateOptions);
  }
};

export const generateElementsByRole = <
  T extends Role,
  U extends keyof any,
  Z extends keyof any
>(
  role: T,
  common: {
    count: number;
    arr: U[];
  },
  specificyByRole: {
    count: number;
    arr: Z[];
  }
): Record<U | Z, boolean> => {
  const getRandomElements = (randomIndexes: number[], arr: (U | Z)[]) => {
    return arr.reduce((acc, current, index) => {
      acc[current] = randomIndexes.includes(index);
      return acc;
    }, {} as Record<U | Z, boolean>);
  };

  switch (role) {
    case Role.BOSS:
    case Role.CHRONICLER:
    case Role.DOG_HANDLER:
    case Role.ENFORCER:
    case Role.FIXER:
    case Role.GEARHEAD:
    case Role.SLAVE:
    case Role.STALKER:
      const commonRandomIndexes: number[] = getRandomIndexes(
        common.count,
        common.arr
      );
      const specificRandomIndexes: number[] = getRandomIndexes(
        specificyByRole.count,
        specificyByRole.arr
      ).map((i) => i + common.arr.length);

      return getRandomElements(
        [...commonRandomIndexes, ...specificRandomIndexes],
        [...common.arr, ...specificyByRole.arr]
      );
    default:
      return getRandomElements(
        getRandomIndexes(common.count, common.arr),
        common.arr
      );
  }
};

const buildRandom = <
  T extends Role,
  U extends Pick<CharacterSheet, 'description'>
>(
  current: U,
  generateOptions: GenerateOptions,
  role?: T
): CharacterSheet<T> => {
  const cs1 = buildBaseInfo(
    { name: current.description.name, role },
    generateOptions
  );

  return buildCommonRandom(cs1);
};

const buildCommonRandom = <T extends Role>(
  cs1: PCharacterSheet<T, 'description' | 'role' | '_id'>
) => {
  const cs2 = addAttributes(cs1);
  const cs3 = addMutations(cs2);
  const cs4 = addSkills(cs3);
  const cs5 = addTalents(cs4);
  const cs6 = addGear(cs5);

  return cs6;
};

const getRandomIndexes = (count: number, array: any[]) => {
  const indexes: number[] = [];
  const min = Math.min(2, count);
  for (let i = 0; i < min; i++) {
    let skill2Index: number;
    do {
      skill2Index = getRandomInt(0, array.length - 1);
    } while (indexes.includes(skill2Index));
    indexes.push(skill2Index);
  }

  return indexes;
};
