import { useDispatch } from 'react-redux';
import StoreSelectors from '../selectors';
import {
  createCharacter,
  fetchCharacters as fetchCharactersThunk,
  updateCharacter,
} from './characters.actions';

export const BaseURL = 'http://localhost:4000/api';

export const useActions = () => {
  const { current } = StoreSelectors();
  const dispatch = useDispatch<any>();

  const acceptCurrent = async () => {
    if (current.data._id == null) {
      await dispatch(createCharacter(current.data));
      dispatch(fetchCharactersThunk());
    } else {
      await dispatch(
        updateCharacter({ ...current.data, _id: current.data._id })
      );
      dispatch(fetchCharactersThunk());
    }
  };

  const fetchCharacters = () => {
    dispatch(fetchCharactersThunk());
  };

  return {
    acceptCurrent,
    fetchCharacters,
  };
};
