import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CharacterSheet, Skill } from '../../models';
import * as Icon from 'react-bootstrap-icons';
import SkillTrans from '../../atoms/trans/skills-trans';
import { updateSkill } from '../../store/store';
import { RootState } from '../../store/state';

export type AddSkillProps = {
  onAddSkill: (skill: Skill) => void;
};

export const AddSkillComponent = (props: AddSkillProps) => {
  const { onAddSkill } = props;

  const selectedSkill = useSelector<{ root: RootState }, Skill>(
    (state) => state.root.selectedSkill
  );

  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.current
  );

  const skills = useSelector<{ root: RootState }, Skill[]>(
    (state) => state.root.data.skills
  );

  const dispatch = useDispatch();

  return (
    <Form.Group as={Row} className="mb-2">
      <Col xs={10} md={8}>
        <Form.Select
          aria-label="Select skill"
          value={selectedSkill}
          onChange={(event) => {
            dispatch(
              updateSkill({
                skill: event.target.value as Skill,
              })
            );
          }}
        >
          {skills.map((skill, i) => (
            <option key={i} value={skill} disabled={current.skills[skill]}>
              <SkillTrans skill={skill}></SkillTrans>
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={2} md={4}>
        <Stack direction="horizontal" className="justify-content-end" gap={3}>
          <Button
            variant="outline-secondary"
            size="sm"
            // TODO: add selected skill instead
            disabled={current.skills[selectedSkill]}
            onClick={() => onAddSkill(selectedSkill)}
          >
            <Icon.Plus />
          </Button>
        </Stack>
      </Col>
    </Form.Group>
  );
};

export default AddSkillComponent;
