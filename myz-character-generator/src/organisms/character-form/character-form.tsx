import { Col, Form, Row } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import RoleTrans from '../../atoms/trans/role-trans';
import ActionsBar from '../../molecules/actions-bar/actions-bar';
import { ROLE_OPTION_VALUE } from '../../store/data';
import { RootState } from '../../store/state';
import { generate, updateCharacter, updateRole } from '../../store/store';
import AttributesComponent from '../attributes/attributes';
import DescriptionComponent from '../description/description';
import Mutations from '../mutations/mutations';
import Skills from '../skills/skills';

import './character-form.css';

export const CharacterForm = () => {
  const selectedRole = useSelector<{ root: RootState }, ROLE_OPTION_VALUE>(
    (state) => state.root.selectedRole
  );

  const roles = useSelector<{ root: RootState }, ROLE_OPTION_VALUE[]>(
    (state) => state.root.data.roles
  );

  const dispatch = useDispatch();

  const onRoleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(
      updateRole({
        role: event.target.value as ROLE_OPTION_VALUE,
      })
    );

  return (
    <Form>
      <Row className="mb-3">
        <Col md={8} className="role-selector-column">
          <Form.Group>
            <Form.Text className="text-muted">
              <Trans i18nKey="role-selector.hint">
                You can select an specific role or it will be randomly chosen.
              </Trans>
            </Form.Text>
            <Form.Select
              aria-label="Select role"
              value={selectedRole}
              onChange={onRoleOptionChange}
            >
              {/* TODO: sort options alphabetically */}
              {roles.map((role, i) => (
                <option key={i} value={role}>
                  <RoleTrans role={role}></RoleTrans>
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <ActionsBar
            onSave={() => dispatch(updateCharacter())}
            onGenerate={() => dispatch(generate())}
          ></ActionsBar>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="description-container">
          <DescriptionComponent></DescriptionComponent>
        </Col>
        <Col md={6} className="attributes-container">
          <AttributesComponent></AttributesComponent>
        </Col>
        <Col md={6} className="mutations-container">
          <Mutations></Mutations>
        </Col>
        <Col md={6} className="skills-container">
          <Skills></Skills>
        </Col>
        <Col md={6} className="talents-container">
          Talents
        </Col>
        <Col md={6} className="gear-container">
          Gear
        </Col>
      </Row>
    </Form>
  );
};

export default CharacterForm;
