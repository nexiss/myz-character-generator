import { Form, Row, Col } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { Attribute } from '../../models';

export type AttributeProps = {
  value: number;
  attribute: Attribute;
  onUpdate: (key: Attribute, value: string) => void;
};

export const AttributeComponent = (props: AttributeProps) => {
  const { attribute, value, onUpdate } = props;
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label column xs="6">
        <Trans i18nKey={'attributes.' + attribute}>{attribute}</Trans>
      </Form.Label>
      <Col xs="6">
        <Form.Control
          plaintext
          min={0}
          max={4}
          value={value}
          onChange={(event) =>
            onUpdate.apply(this, [attribute, event.target.value])
          }
        />
      </Col>
    </Form.Group>
  );
};

export default AttributeComponent;
