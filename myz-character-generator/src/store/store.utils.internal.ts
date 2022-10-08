import {
  Attribute,
  Attributes,
  Mutation,
  PCharacterSheet,
  Role,
} from '../models';
import { GenerateOptions } from './state';
import { getMutations, generateSkillsByRole } from './store.utils';

export const buildBaseInfo = <T extends Role>(
  options: { name: string; role?: T },
  generateOptions: GenerateOptions
): PCharacterSheet<T, 'description'> & PCharacterSheet<T, 'role'> => ({
  role: options.role ?? (getRandomRole() as T),
  description: {
    name:
      generateOptions.isNameTouched && options.name
        ? options.name
        : generateRandomName(),
  },
});

const getRandomRole = (): Role => {
  const enumValues = Object.values(Role) as Role[];
  const index = Math.floor(Math.random() * enumValues.length);

  return enumValues[index];
};

export const addAttributes = <
  T extends Role,
  U extends PCharacterSheet<T, 'role'>
>(
  pickedCharacterSheet: U
): U & PCharacterSheet<T, 'attributes'> => ({
  ...pickedCharacterSheet,
  attributes: generateRandomAttributes(pickedCharacterSheet.role),
});

export const addMutations = <T extends {}>(
  pickedCharacterSheet: T
): T & PCharacterSheet<Role, 'mutations'> => {
  const mutations = getMutations();
  const randomMutationIndex = getRandomInt(0, mutations.length - 1);
  const mutationsMap = mutations.reduce((acc, current, index) => {
    acc[current] = randomMutationIndex === index;
    return acc;
  }, {} as Record<Mutation, boolean>);
  return {
    ...pickedCharacterSheet,
    mutations: mutationsMap,
  };
};

export const addSkills = <T extends Role, U extends PCharacterSheet<T, 'role'>>(
  pickedCharacterSheet: U
): U & PCharacterSheet<U['role'], 'skills'> => {
  const skills = generateSkillsByRole(pickedCharacterSheet.role);

  return {
    ...pickedCharacterSheet,
    skills,
  };
};

export const addTalents = <T extends {}>(
  pickedCharacterSheet: T
): T & PCharacterSheet<Role, 'talents'> => ({
  ...pickedCharacterSheet,
  talents: [],
});

export const addGear = <T extends {}>(
  pickedCharacterSheet: T
): T & PCharacterSheet<Role, 'gear'> => ({
  ...pickedCharacterSheet,
  gear: {} as any, // TODO: set real gear values
});

const MAX_ATTRIBUTE = 4;

const generateRandomName = (): string => 'Random Name';

const generateRandomAttributes = (role: Role): Attributes => {
  return Object.values(Attribute).reduce(
    (prev, attribute: Attribute): Attributes => {
      // Allows only 1 attribute with max value
      const isAnyAttributeMax = Object.values(prev).some(
        (at) => at === MAX_ATTRIBUTE
      );

      return {
        ...prev,
        [attribute]: isAnyAttributeMax
          ? getRandomInt(1, MAX_ATTRIBUTE - 1)
          : getBestRandomAttributeOf(3),
      };
    },
    {} as Attributes
  );
};

export const getRandomInt = (min: number, max: number) => {
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
