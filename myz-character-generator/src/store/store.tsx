import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Attributes, BasicSkill, Mutation, Role } from '../models';
import { RANDOM, selectableRoles } from './data';
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
  ui: {
    selectedRole: RANDOM,
    selectedMutation: Mutation.INSECT_WINGS,
    selectedSkill: BasicSkill.COMPREHEND,
    generateOptions: {
      isNameTouched: false,
    },
  },
  data: {
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
    models: {
      roles: selectableRoles,
      mutations: getMutations(),
      skills: getSkills(),
    },
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
      state.data.current = generateRandomCurrent(
        state.data.current,
        state.ui.selectedRole,
        state.ui.generateOptions
      );
    },
    updateAttributes: (
      state,
      action: PayloadAction<{ attributes: Attributes }>
    ) => {
      state.data.current.attributes = action.payload.attributes;
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
