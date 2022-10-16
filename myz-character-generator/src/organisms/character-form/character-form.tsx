import { Col, Form, Row } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import RoleTrans from '../../atoms/trans/role-trans';
import ActionsBar from '../../molecules/actions-bar/actions-bar';
import { useActions } from '../../store/actions/actions';
import { ROLE_OPTION_VALUE } from '../../store/data';
import StoreSelectors from '../../store/selectors';
import { generate, updateRole } from '../../store/store';
import AttributesComponent from '../attributes/attributes';
import DescriptionComponent from '../description/description';
import MutationsComponent from '../mutations/mutations.component';
import SkillsComponent from '../skills/skills.component';
import TalentsComponent from '../talents/talents.component';

import './character-form.scss';

export const CharacterForm = () => {
  const { roles, selectedRole } = StoreSelectors();

  const dispatch = useDispatch();
  const actions = useActions();

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
            onSave={() => actions.acceptCurrent()}
            onGenerate={() => dispatch(generate())}
          ></ActionsBar>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6} className="container__description">
          <h5 className="container__header">
            <Trans i18nKey="sections.description">Description</Trans>
          </h5>
          <DescriptionComponent></DescriptionComponent>
        </Col>
        <Col md={6} className="container__attributes">
          <h5 className="container__header">
            <Trans i18nKey="sections.attributes">Attributes</Trans>
          </h5>
          <AttributesComponent></AttributesComponent>
        </Col>
        <Col md={6} className="container__mutations">
          <h5 className="container__header">
            <Trans i18nKey="sections.mutations">Mutations</Trans>
          </h5>
          <MutationsComponent></MutationsComponent>
        </Col>
        <Col md={6} className="container__skills">
          <h5 className="container__header">
            <Trans i18nKey="sections.skills">Skills</Trans>
          </h5>
          <SkillsComponent></SkillsComponent>
        </Col>
        <Col md={6} className="container__talents">
          <h5 className="container__header">
            <Trans i18nKey="sections.talents">Talents</Trans>
          </h5>
          <TalentsComponent></TalentsComponent>
        </Col>
        <Col md={6} className="container__gear">
          <h5 className="container__header">
            <Trans i18nKey="sections.gear">Gear</Trans>
          </h5>
        </Col>
      </Row>
    </Form>
  );
};

export default CharacterForm;
