import { useSelector } from 'react-redux';
import { CharacterSheet, Mutation, Skill } from '../models';
import { ROLE_OPTION_VALUE } from './data';
import { RootState } from './state';

const StoreSelectors = () => {
  const root = useSelector<{ root: RootState }, RootState>(
    (state) => state.root
  );

  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.data.current
  );

  const roles = useSelector<{ root: RootState }, ROLE_OPTION_VALUE[]>(
    (state) => state.root.data.models.roles
  );

  const mutations = useSelector<{ root: RootState }, Mutation[]>(
    (state) => state.root.data.models.mutations
  );

  const skills = useSelector<{ root: RootState }, Skill[]>(
    (state) => state.root.data.models.skills
  );

  const selectedRole = useSelector<{ root: RootState }, ROLE_OPTION_VALUE>(
    (state) => state.root.ui.selectedRole
  );

  const selectedMutation = useSelector<{ root: RootState }, Mutation>(
    (state) => state.root.ui.selectedMutation
  );

  const selectedSkill = useSelector<{ root: RootState }, Skill>(
    (state) => state.root.ui.selectedSkill
  );

  return {
    current,
    root,
    selectedRole,
    selectedMutation,
    selectedSkill,
    roles,
    skills,
    mutations,
  };
};

export default StoreSelectors;
