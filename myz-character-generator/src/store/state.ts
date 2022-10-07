import {
  Attributes,
  Character,
  Mutation,
  Role,
  Talent,
  Skill,
  BasicSkill,
  SkillByRole,
} from '../models';
import { ROLE_OPTION_VALUE } from './data';

export type GenerateOptions = {
  isNameTouched: boolean;
};

export type CharacterSkills<T extends Role> = Array<
  BasicSkill | typeof SkillByRole[T]
>;

export type PCharacterSheet<
  T extends Role,
  U extends keyof CharacterSheet
> = Pick<CharacterSheet<T>, U>;

export type CharacterSheet<T extends Role = Role> = {
  description: {
    name: string;
  };
  role: T;
  attributes: Attributes;
  mutations: Record<Mutation, boolean>;
  skills: CharacterSkills<T>;
  talents: Talent[];
  gear: any;
};

export type RootState = {
  selectedRole: ROLE_OPTION_VALUE;
  selectedMutation: Mutation;
  generateOptions: GenerateOptions;
  current: CharacterSheet;
  data: {
    roles: ROLE_OPTION_VALUE[];
    mutations: Mutation[];
    skills: Skill[];
  };
  characters: Character[];
};
