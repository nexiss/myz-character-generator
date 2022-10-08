import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Attributes, BasicSkill, Mutation, Role } from '../models';
import { RANDOM, roles } from './data';
import { characterReducers } from './reducers/character-reducer';
import { descriptionReducers } from './reducers/description-reducers';
import { mutationReducers } from './reducers/mutation-reducer';
import { skillReducers } from './reducers/skill-reducer';
import { RootState } from './state';
import {
  buildInitialMutations,
  buildInitialSkills,
  generateRandomCurrent,
  getMutations,
  getSkills,
} from './store.utils';

const initialState: RootState = {
  selectedRole: RANDOM,
  selectedMutation: Mutation.INSECT_WINGS,
  selectedSkill: BasicSkill.COMPREHEND,
  generateOptions: {
    isNameTouched: false,
  },
  current: {
    description: {
      name: '',
    },
    role: Role.ENFORCER,
    attributes: {
      strength: 0,
      agility: 0,
      wits: 0,
      empathy: 0,
    },
    mutations: buildInitialMutations(),
    skills: buildInitialSkills(),
    talents: [],
    gear: {},
  },
  characters: [
    {
      description: {
        name: '',
      },
      role: Role.ENFORCER,
      attributes: {
        strength: 0,
        agility: 0,
        wits: 0,
        empathy: 0,
      },
      mutations: buildInitialMutations(),
      skills: buildInitialSkills(),
      talents: [],
      gear: {},
    },
  ],
  data: {
    roles,
    mutations: getMutations(),
    skills: getSkills(),
  },
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    ...skillReducers,
    ...mutationReducers,
    ...descriptionReducers,
    ...characterReducers,
    generate: (state) => {
      state.current = generateRandomCurrent(
        state.current,
        state.selectedRole,
        state.generateOptions
      );
    },
    updateAttributes: (
      state,
      action: PayloadAction<{ attributes: Attributes }>
    ) => {
      state.current.attributes = action.payload.attributes;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addSkill,
  addMutation,
  generate,
  removeSkill,
  removeMutation,
  saveNewCharacter,
  updateAttributes,
  updateCharacter,
  updateName,
  updateSkill,
  updateMutation,
  updateRole,
} = rootSlice.actions;

export default rootSlice.reducer;
