import { PayloadAction } from '@reduxjs/toolkit';
import { Role, Skill } from '../../models';
import { CharacterSkill, RootState } from '../state';

export const skillReducers = {
  addSkill: <T extends Role>(
    state: RootState,
    action: PayloadAction<{ skill: CharacterSkill<T> }>
  ) => {
    state.current.skills[action.payload.skill] = true;
  },
  removeSkill: (state: RootState, action: PayloadAction<{ skill: Skill }>) => {
    state.current.skills[action.payload.skill] = false;
  },
  updateSkill: (state: RootState, action: PayloadAction<{ skill: Skill }>) => {
    state.selectedSkill = action.payload.skill;
  },
};
