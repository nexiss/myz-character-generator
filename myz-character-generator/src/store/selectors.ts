import { Draft } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  CharacterSheet,
  Mutation,
  SavedCharacterSheet,
  Skill,
  Talent,
} from '../models';
import { ROLE_OPTION_VALUE } from './data';
import { FetchedData, InitialFetch, RootState } from './state';

const StoreSelectors = () => {
  const root = useSelector<{ root: Draft<RootState> }, Draft<RootState>>(
    (state) => state.root
  );

  const current = useSelector<
    { root: Draft<RootState> },
    FetchedData<CharacterSheet>
  >((state) => state.root.data.current);

  const roles = useSelector<{ root: Draft<RootState> }, ROLE_OPTION_VALUE[]>(
    (state) => state.root.data.models.roles
  );

  const mutations = useSelector<{ root: Draft<RootState> }, Mutation[]>(
    (state) => state.root.data.models.mutations
  );

  const skills = useSelector<{ root: Draft<RootState> }, Skill[]>(
    (state) => state.root.data.models.skills
  );

  const talents = useSelector<{ root: Draft<RootState> }, Talent[]>(
    (state) => state.root.data.models.talents
  );

  const characters = useSelector<
    { root: Draft<RootState> },
    InitialFetch<SavedCharacterSheet[]>
  >((state) => state.root.data.characters);

  const selectedRole = useSelector<
    { root: Draft<RootState> },
    ROLE_OPTION_VALUE
  >((state) => state.root.ui.selectedRole);

  const selectedMutation = useSelector<{ root: Draft<RootState> }, Mutation>(
    (state) => state.root.ui.selectedMutation
  );

  const selectedSkill = useSelector<{ root: Draft<RootState> }, Skill>(
    (state) => state.root.ui.selectedSkill
  );

  const selectedTalent = useSelector<{ root: Draft<RootState> }, Talent>(
    (state) => state.root.ui.selectedTalent
  );

  const isCurrentValid = useSelector<{ root: Draft<RootState> }, boolean>(
    (state) => {
      // TODO: improve this validation
      const oneMutation = () =>
        Object.values(state.root.data.current.data.mutations).some(
          (v) => v === true
        );

      const oneSkill = () =>
        Object.values(state.root.data.current.data.skills).some(
          (v) => v === true
        );

      return oneMutation() && oneSkill();
    }
  );

  return {
    characters,
    current,
    isCurrentValid,
    root,
    selectedRole,
    selectedMutation,
    selectedSkill,
    selectedTalent,
    roles,
    mutations,
    skills,
    talents,
  };
};

export default StoreSelectors;
