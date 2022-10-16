import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { ROLE_OPTION_VALUE } from '../data';
import { RootState } from '../state';

export const descriptionReducers = {
  updateName: (
    state: Draft<RootState>,
    action: PayloadAction<{ name: string; isNameTouched?: boolean }>
  ) => {
    state.data.current.data.description.name = action.payload.name;
    if (action.payload.isNameTouched) {
      state.ui.generateOptions.isNameTouched = !!action.payload.isNameTouched;
    }
  },
  updateRole: (
    state: Draft<RootState>,
    action: PayloadAction<{ role: ROLE_OPTION_VALUE }>
  ) => {
    state.ui.selectedRole = action.payload.role;
  },
};
