import { Form, Row, Col } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useI18n } from '../../i18n/useI18n';
import { CharacterSheet } from '../../models';
import { RootState } from '../../store/state';
import { updateName } from '../../store/store';

export const DescriptionComponent = () => {
  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.current
  );

  const dispatch = useDispatch();

  const { getRoleDescriptor } = useI18n();

  return (
    <div>
      <Form.Group as={Row} className="mb-2">
        <Form.Label column xs="6">
          <Trans i18nKey="others.name">Name</Trans>:
        </Form.Label>
        <Col xs="6">
          <Form.Control
            plaintext
            min={0}
            max={4}
            value={current.description.name}
            onChange={(event) =>
              dispatch(
                updateName({ name: event.target.value, isNameTouched: true })
              )
            }
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label column xs="6">
          <Trans i18nKey="others.role">Role</Trans>:
        </Form.Label>
        <Col xs="6">
          <Form.Control
            plaintext
            // TODO: remove this readonly when user can change role manually
            readOnly
            value={getRoleDescriptor(current.role)}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default DescriptionComponent;
