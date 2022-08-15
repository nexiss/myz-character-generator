import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Attributes,
  Character,
  MutationId,
  Role,
  Skill,
  Talent,
} from '../models';
import { RANDOM, roles, ROLE_OPTION_VALUE } from './data';
import {
  buildInitialMutations,
  generateRandomCurrent,
  getMutations,
} from './store.utils';

export type Current = {
  description: {
    name: string;
  };
  role: Role;
  attributes: Attributes;
  mutations: Record<MutationId, boolean>;
  skills: Skill[];
  talents: Talent[];
  gear: any;
};

export type RootState = {
  selectedRole: ROLE_OPTION_VALUE;
  selectedMutation: MutationId;
  current: Current;
  data: {
    roles: ROLE_OPTION_VALUE[];
    mutations: MutationId[];
  };
  characters: Character[];
};

const initialState: RootState = {
  selectedRole: RANDOM,
  selectedMutation: MutationId.mutation1,
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
    addMutation: (state, action: PayloadAction<{ id: MutationId }>) => {
      if (state.current.mutations[action.payload.id] === false) {
        state.current.mutations[action.payload.id] = true;
      }
    },
    generate: (state) => {
      state.current = generateRandomCurrent(state.current, state.selectedRole);
    },
    removeMutation: (state, action: PayloadAction<{ id: MutationId }>) => {
      state.current.mutations[action.payload.id] = false;
    },
    saveNewCharacter: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('save new');
    },

    updateCharacter: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('update');
    },
    updateName: (state, action: PayloadAction<{ name: string }>) => {
      state.current.description.name = action.payload.name;
    },
    updateMutation: (
      state,
      action: PayloadAction<{ mutation: MutationId }>
    ) => {
      state.selectedMutation = action.payload.mutation;
    },
    updateRole: (state, action: PayloadAction<{ role: ROLE_OPTION_VALUE }>) => {
      state.selectedRole = action.payload.role;
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