import { useDispatch, useSelector } from 'react-redux';
import { Skill } from '../../models';
import { removeSkill } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { CharacterSheet, RootState } from '../../store/state';
import SkillTrans from '../../atoms/trans/skills-trans';

export const SkillsList = () => {
  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.current
  );

  const dispatch = useDispatch();

  return (
    <ul>
      {Object.entries(current.skills)
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
