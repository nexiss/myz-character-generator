import { Attribute, Attributes, Mutation, Role } from '../models';
import { CharacterSheet, GenerateOptions } from './state';

export const isNumber = (n: any): n is number => typeof n === 'number';

export const buildBaseInfo = (
  options: { name: string },
  generateOptions: GenerateOptions
): Pick<CharacterSheet, 'role' | 'description'> => ({
  role: getRandomRole(),
  description: {
    name:
      generateOptions.isNameTouched && options.name
        ? options.name
        : generateRandomName(),
  },
});

const getRandomRole = (): Role => {
  // TODO: Filter is needed because Object.values is returning also keys
  const enumValues = Object.values(Role).filter(isNumber) as Role[];
  const index = Math.floor(Math.random() * enumValues.length);

  return enumValues[index];
};

export const addAttributes = <T extends Pick<CharacterSheet, 'role'>>(
  pickedCharacterSheet: T
): T & Pick<CharacterSheet, 'attributes'> => ({
  ...pickedCharacterSheet,
  attributes: generateRandomAttributes(pickedCharacterSheet.role),
});

export const addMutations = <T extends {}>(
  pickedCharacterSheet: T
): T & Pick<CharacterSheet, 'mutations'> => ({
  ...pickedCharacterSheet,
  mutations: {} as Record<Mutation, boolean>, // TODO: fill all the mutations
});

export const addSkills = <T extends {}>(
  pickedCharacterSheet: T
): T & Pick<CharacterSheet, 'skills'> => ({
  ...pickedCharacterSheet,
  skills: [],
});

export const addTalents = <T extends {}>(
  pickedCharacterSheet: T
): T & Pick<CharacterSheet, 'talents'> => ({
  ...pickedCharacterSheet,
  talents: [],
});

export const addGear = <T extends {}>(
  pickedCharacterSheet: T
): T & Pick<CharacterSheet, 'gear'> => ({
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
