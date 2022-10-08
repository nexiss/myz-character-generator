import { CharacterSheet, Mutation, Skill } from '../models';
import { ROLE_OPTION_VALUE } from './data';

export type GenerateOptions = {
  isNameTouched: boolean;
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
  characters: CharacterSheet[];
};
