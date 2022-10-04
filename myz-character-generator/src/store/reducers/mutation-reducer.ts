import { PayloadAction } from '@reduxjs/toolkit';
import { Mutation } from '../../models';
import { RootState } from '../state';

export const mutationReducers = {
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
