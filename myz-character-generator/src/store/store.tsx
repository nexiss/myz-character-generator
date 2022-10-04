import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Attributes, Mutation, Role } from '../models';
import { RANDOM, roles } from './data';
import { characterReducers } from './reducers/character-reducer';
import { descriptionReducers } from './reducers/description-reducers';
import { mutationReducers } from './reducers/mutation-reducer';
import { RootState } from './state';
import {
  buildInitialMutations,
  generateRandomCurrent,
  getMutations,
} from './store.utils';

const initialState: RootState = {
  selectedRole: RANDOM,
  selectedMutation: Mutation.INSECT_WINGS,
  generateOptions: {
    isNameTouched: false,
  },
  current: {
    description: {
      name: '',
    },
    role: Role.Enforcer,
    attributes: {
      strength: 0,
      agility: 0,
      wits: 0,
      empathy: 0,
    },
    mutations: buildInitialMutations(),
    skills: [],
    talents: [],
    gear: {},
  },
  characters: [],
  data: {
    roles,
    mutations: getMutations(),
  },
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
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
  addMutation,
  generate,
  removeMutation,
  saveNewCharacter,
  updateAttributes,
  updateCharacter,
  updateName,
  updateMutation,
  updateRole,
} = rootSlice.actions;

export default rootSlice.reducer;
