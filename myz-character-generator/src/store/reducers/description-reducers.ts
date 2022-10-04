import { PayloadAction } from '@reduxjs/toolkit';
import { ROLE_OPTION_VALUE } from '../data';
import { RootState } from '../state';

export const descriptionReducers = {
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
