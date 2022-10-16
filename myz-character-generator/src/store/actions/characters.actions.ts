import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterSheet, SavedCharacterSheet } from '../../models';
import { BaseURL } from './actions';

export const fetchCharacters = createAsyncThunk<SavedCharacterSheet[]>(
  'fetchCharacters',
  () => fetch(BaseURL + '/characters').then((response) => response.json())
);

export const createCharacter = createAsyncThunk<
  SavedCharacterSheet,
  CharacterSheet
>(
  'createCharacter',
  (payload) =>
    fetch(BaseURL + '/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json()),
  {}
);

export const updateCharacter = createAsyncThunk<
  SavedCharacterSheet,
  SavedCharacterSheet
>(
  'updateCharacter',
  (payload) =>
    fetch(BaseURL + '/characters/' + payload._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json()),
  {}
);
