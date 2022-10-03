import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Attributes, Mutation, Role } from '../models';
import { RANDOM, roles, ROLE_OPTION_VALUE } from './data';
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

const descriptionReducers = {
  updateName: (
    state: RootState,
    action: PayloadAction<{ name: string; isNameTouched?: boolean }>
  ) => {
    state.current.description.name = action.payload.name;
    if (action.payload.isNameTouched) {
      state.generateOptions.isNameTouched = !!action.payload.isNameTouched;
    }
  },
  updateRole: (
    state: RootState,
    action: PayloadAction<{ role: ROLE_OPTION_VALUE }>
  ) => {
    state.selectedRole = action.payload.role;
  },
};

const mutationReducers = {
  addMutation: (
    state: RootState,
    action: PayloadAction<{ mutation: Mutation }>
  ) => {
    state.current.mutations[action.payload.mutation] = true;
  },
  removeMutation: (
    state: RootState,
    action: PayloadAction<{ mutation: Mutation }>
  ) => {
    state.current.mutations[action.payload.mutation] = false;
  },
  updateMutation: (
    state: RootState,
    action: PayloadAction<{ mutation: Mutation }>
  ) => {
    state.selectedMutation = action.payload.mutation;
  },
};

const characterReducers = {
  saveNewCharacter: (state: RootState) => {
    console.log('save new');
  },
  updateCharacter: (state: RootState) => {
    console.log('update');
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
