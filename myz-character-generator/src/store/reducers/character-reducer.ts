import { PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { SavedCharacterSheet } from '../../models';
import { RootState } from '../state';

export const characterReducers = {
  selectCharacterAsCurrent: (
    state: RootState,
    action: PayloadAction<{ id: string }>
  ) => {
    const character = state.data.characters.find(
      (c) => c.id === action.payload.id
    );
    if (character) {
      state.data.current = character;
    }
  },
  updateCharacter: (state: RootState) => {
    const id = state.data.current.id ?? uuid();
    state.data.current.id = id;
    const newCurrent: SavedCharacterSheet = { ...state.data.current, id };

    const index = state.data.characters.findIndex(
      (c) => c.id === state.data.current.id
    );

    if (index > -1) {
      state.data.characters[index] = newCurrent;
    } else {
      state.data.characters.push(newCurrent);
    }

    state.ui.generateOptions.isNameTouched = false;
  },
};
