import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Talent } from '../../models';
import * as Icon from 'react-bootstrap-icons';
import TalentTrans from '../../atoms/trans/talents-trans';
import { updateTalent } from '../../store/store';
import StoreSelectors from '../../store/selectors';

export type AddTalentProps = {
  onAddTalent: (talent: Talent) => void;
};

export const AddTalentComponent = (props: AddTalentProps) => {
  const { onAddTalent } = props;

  const { selectedTalent, current, talents } = StoreSelectors();

  const dispatch = useDispatch();

  return (
    <Form.Group as={Row} className="mb-2">
      <Col xs={10} md={8}>
        <Form.Select
          aria-label="Select talent"
          value={selectedTalent}
          onChange={(event) => {
            dispatch(
              updateTalent({
                talent: event.target.value as Talent,
              })
            );
          }}
        >
          {talents.map((talent, i) => (
            <option
              key={i}
              value={talent}
              disabled={current.data.talents[talent]}
            >
              <TalentTrans talent={talent}></TalentTrans>
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={2} md={4}>
        <Stack direction="horizontal" className="justify-content-end" gap={3}>
          <Button
            variant="outline-secondary"
            size="sm"
            // TODO: add selected talent instead
            disabled={current.data.talents[selectedTalent]}
            onClick={() => onAddTalent(selectedTalent)}
          >
            <Icon.Plus />
          </Button>
        </Stack>
      </Col>
    </Form.Group>
  );
};

export default AddTalentComponent;
