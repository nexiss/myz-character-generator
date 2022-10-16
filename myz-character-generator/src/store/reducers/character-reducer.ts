import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { SavedCharacterSheet } from '../../models';
import {
  createCharacter,
  fetchCharacters,
  updateCharacter,
} from '../actions/characters.actions';
import { RootState } from '../state';

export const characterReducers = {
  selectCharacterAsCurrent: (
    state: Draft<RootState>,
    action: PayloadAction<{ id: string }>
  ) => {
    // FIXME: This method should connect to remote db instead
    const character = state.data.characters.data.find(
      (c) => c._id === action.payload.id
    );
    if (character) {
      state.data.current = {
        ...state.data.current,
        data: character,
      };
    }
  },
};

const fetchCharactersRedurcers = {
  [fetchCharacters.pending.type]: (state: Draft<RootState>) => {
    state.data.characters = {
      fetchedOnce: state.data.characters.fetchedOnce,
      fetching: true,
      data: [],
      date: Date.now(),
    };
  },
  [fetchCharacters.fulfilled.type]: (
    state: Draft<RootState>,
    action: PayloadAction<SavedCharacterSheet[]>
  ) => {
    state.data.characters = {
      fetchedOnce: true,
      fetching: false,
      data: action.payload,
      date: Date.now(),
    };
  },
  [fetchCharacters.rejected.type]: (state: Draft<RootState>) => {
    state.data.characters = {
      fetchedOnce: state.data.characters.fetchedOnce,
      fetching: false,
      data: [],
      date: Date.now(),
    };
  },
};

const createCharacterReducers = {
  [createCharacter.pending.type]: (state: Draft<RootState>) => {
    state.data.current.fetching = true;
  },
  [createCharacter.fulfilled.type]: (state: Draft<RootState>) => {
    state.data.current.fetching = false;
  },
  [createCharacter.rejected.type]: (state: Draft<RootState>) => {
    state.data.current.fetching = false;
  },
};

const updateCharacterReducers = {
  [updateCharacter.pending.type]: (state: Draft<RootState>) => {
    state.data.current.fetching = true;
  },
  [updateCharacter.fulfilled.type]: (state: Draft<RootState>) => {
    state.data.current.fetching = false;
  },
  [updateCharacter.rejected.type]: (state: Draft<RootState>) => {
    state.data.current.fetching = false;
  },
};

export const extraCharacterReducers = {
  ...fetchCharactersRedurcers,
  ...createCharacterReducers,
  ...updateCharacterReducers,
};
