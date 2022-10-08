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

export type CharacterSkill<T extends Role> = BasicSkill | typeof SkillByRole[T];

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
  skills: Record<CharacterSkill<T>, boolean>;
  talents: Talent[];
  gear: any;
};

export type RootState = {
  selectedRole: ROLE_OPTION_VALUE;
  selectedMutation: Mutation;
  selectedSkill: Skill;
  generateOptions: GenerateOptions;
  current: CharacterSheet;
  data: {
    roles: ROLE_OPTION_VALUE[];
    mutations: Mutation[];
    skills: Skill[];
  };
  characters: Character[];
};
