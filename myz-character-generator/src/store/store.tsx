import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Attributes,
  BasicSkill,
  CharacterSheet,
  GeneralTalent,
  Mutation,
  Role,
} from '../models';
import { RANDOM, selectableRoles } from './data';
import {
  characterReducers,
  extraCharacterReducers,
} from './reducers/character-reducer';
import { descriptionReducers } from './reducers/description-reducers';
import { mutationReducers } from './reducers/mutation-reducer';
import { skillReducers } from './reducers/skill-reducer';
import { talentReducers } from './reducers/talent-reducer';
import { RootState } from './state';
import { generateRandomCurrent } from './utils/store.utils';
import {
  buildInitialMutations,
  getMutations,
} from './utils/store.utils.mutations';
import { buildInitialSkills, getSkills } from './utils/store.utils.skills';
import { buildInitialTalents, getTalents } from './utils/store.utils.talents';

const initialCurrentData: CharacterSheet = {
  _id: undefined,
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
  talents: buildInitialTalents(),
  gear: {},
};

const initialState: RootState = {
  ui: {
    selectedRole: RANDOM,
    selectedMutation: Mutation.INSECT_WINGS,
    selectedSkill: BasicSkill.COMPREHEND,
    selectedTalent: GeneralTalent.ADMIRER,
    generateOptions: {
      isNameTouched: false,
    },
  },
  data: {
    current: {
      fetching: false,
      date: Date.now(),
      data: initialCurrentData,
    },
    characters: {
      fetchedOnce: false,
      fetching: false,
      date: Date.now(),
      data: [],
    },
    models: {
      roles: selectableRoles,
      mutations: getMutations(),
      skills: getSkills(),
      talents: getTalents(),
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
    ...talentReducers,
    generate: (state) => {
      state.data.current.data = generateRandomCurrent(
        state.data.current.data,
        state.ui.selectedRole,
        state.ui.generateOptions
      );
    },
    updateAttributes: (
      state,
      action: PayloadAction<{ attributes: Attributes }>
    ) => {
      state.data.current.data.attributes = action.payload.attributes;
    },
  },
  extraReducers: {
    ...extraCharacterReducers,
  },
});

export const {
  addSkill,
  addMutation,
  addTalent,
  generate,
  removeSkill,
  removeMutation,
  removeTalent,
  selectCharacterAsCurrent,
  updateAttributes,
  updateName,
  updateSkill,
  updateMutation,
  updateRole,
  updateTalent,
} = rootSlice.actions;

export default rootSlice.reducer;
