import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { Mutation } from '../../models';
import { RootState } from '../state';

export const mutationReducers = {
  addMutation: (
    state: Draft<RootState>,
    action: PayloadAction<{ mutation: Mutation }>
  ) => {
    state.data.current.data.mutations[action.payload.mutation] = true;
  },
  removeMutation: (
    state: Draft<RootState>,
    action: PayloadAction<{ mutation: Mutation }>
  ) => {
    state.data.current.data.mutations[action.payload.mutation] = false;
  },
  updateMutation: (
    state: Draft<RootState>,
    action: PayloadAction<{ mutation: Mutation }>
  ) => {
    state.ui.selectedMutation = action.payload.mutation;
  },
};
