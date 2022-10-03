import {
  Attributes,
  Character,
  Mutation,
  Role,
  Skill,
  Talent,
} from '../models';
import { ROLE_OPTION_VALUE } from './data';

export type GenerateOptions = {
  isNameTouched: boolean;
};

export type CharacterSheet = {
  description: {
    name: string;
  };
  role: Role;
  attributes: Attributes;
  mutations: Record<Mutation, boolean>;
  skills: Skill[];
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
  };
  characters: Character[];
};
