import { useDispatch } from 'react-redux';
import { Skill } from '../../models';
import { removeSkill } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import SkillTrans from '../../atoms/trans/skills-trans';
import StoreSelectors from '../../store/selectors';

export const SkillsList = () => {
  const { current } = StoreSelectors();

  const dispatch = useDispatch();

  return (
    <ul>
      {Object.entries(current.data.skills)
        .filter(([_, value]) => value)
        .map(([key], i: number) => {
          const skill = key as Skill;
          return (
            <li key={i} value={skill}>
              <SkillTrans skill={skill}></SkillTrans>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => dispatch(removeSkill({ skill }))}
              >
                <Icon.Trash />
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

export default SkillsList;
