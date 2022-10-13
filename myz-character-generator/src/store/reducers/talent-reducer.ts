import { PayloadAction } from '@reduxjs/toolkit';
import { CharacterTalent, Role, Talent } from '../../models';
import { RootState } from '../state';

export const talentReducers = {
  addTalent: <T extends Role>(
    state: RootState,
    action: PayloadAction<{ talent: CharacterTalent<T> }>
  ) => {
    state.data.current.talents[action.payload.talent] = true;
  },
  removeTalent: (
    state: RootState,
    action: PayloadAction<{ talent: Talent }>
  ) => {
    state.data.current.talents[action.payload.talent] = false;
  },
  updateTalent: (
    state: RootState,
    action: PayloadAction<{ talent: Talent }>
  ) => {
    state.ui.selectedTalent = action.payload.talent;
  },
};
