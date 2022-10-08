import { useDispatch } from 'react-redux';
import { addSkill } from '../../store/store';
import AddSkillComponent from './add-skill';
import SkillsList from './skills-list';

export const Skills = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <AddSkillComponent
        onAddSkill={(skill) =>
          dispatch(
            addSkill({
              skill,
            })
          )
        }
      ></AddSkillComponent>
      <SkillsList></SkillsList>
    </div>
  );
};

export default Skills;
