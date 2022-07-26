import { Form, Row, Col } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useI18n } from '../../i18n/useI18n';
import StoreSelectors from '../../store/selectors';
import { updateName } from '../../store/store';

export const DescriptionComponent = () => {
  const { current } = StoreSelectors();

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
            value={current.data.description.name}
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
            value={getRoleDescriptor(current.data.role)}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default DescriptionComponent;
