import { RootState } from '../state';

export const characterReducers = {
  saveNewCharacter: (state: RootState) => {
    console.log('save new');
  },
  updateCharacter: (state: RootState) => {
    console.log('update');
  },
};
