import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { CharacterTalent, Role, Talent } from '../../models';
import { RootState } from '../state';

export const talentReducers = {
  addTalent: <T extends Role>(
    state: Draft<RootState>,
    action: PayloadAction<{ talent: CharacterTalent<T> }>
  ) => {
    state.data.current.data.talents[action.payload.talent] = true;
  },
  removeTalent: (
    state: Draft<RootState>,
    action: PayloadAction<{ talent: Talent }>
  ) => {
    state.data.current.data.talents[action.payload.talent] = false;
  },
  updateTalent: (
    state: Draft<RootState>,
    action: PayloadAction<{ talent: Talent }>
  ) => {
    state.ui.selectedTalent = action.payload.talent;
  },
};
