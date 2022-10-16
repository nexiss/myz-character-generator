import {
  CharacterSheet,
  Mutation,
  SavedCharacterSheet,
  Skill,
  Talent,
} from '../models';
import { ROLE_OPTION_VALUE } from './data';

export type GenerateOptions = {
  isNameTouched: boolean;
};

export type FetchedData<T> = {
  fetching: boolean;
  date: number;
  data: T;
};

export type InitialFetch<T> = FetchedData<T> & {
  fetchedOnce: boolean;
};

export type RootState = {
  ui: {
    selectedRole: ROLE_OPTION_VALUE;
    selectedMutation: Mutation;
    selectedSkill: Skill;
    selectedTalent: Talent;
    generateOptions: GenerateOptions;
  };
  data: {
    current: FetchedData<CharacterSheet>;
    models: {
      roles: ROLE_OPTION_VALUE[];
      mutations: Mutation[];
      skills: Skill[];
      talents: Talent[];
    };
    characters: InitialFetch<SavedCharacterSheet[]>;
  };
};
