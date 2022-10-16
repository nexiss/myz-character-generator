import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { CharacterSkill, Role, Skill } from '../../models';
import { RootState } from '../state';

export const skillReducers = {
  addSkill: <T extends Role>(
    state: Draft<RootState>,
    action: PayloadAction<{ skill: CharacterSkill<T> }>
  ) => {
    state.data.current.data.skills[action.payload.skill] = true;
  },
  removeSkill: (
    state: Draft<RootState>,
    action: PayloadAction<{ skill: Skill }>
  ) => {
    state.data.current.data.skills[action.payload.skill] = false;
  },
  updateSkill: (
    state: Draft<RootState>,
    action: PayloadAction<{ skill: Skill }>
  ) => {
    state.ui.selectedSkill = action.payload.skill;
  },
};
