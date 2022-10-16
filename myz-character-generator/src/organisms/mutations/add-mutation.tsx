import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Mutation } from '../../models';
import { updateMutation } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import MutationTrans from '../../atoms/trans/mutation-trans';
import StoreSelectors from '../../store/selectors';

export type AddMutationProps = {
  onAddMutation: (mutation: Mutation) => void;
};

export const AddMutationComponent = (props: AddMutationProps) => {
  const { onAddMutation } = props;

  const { selectedMutation, current, mutations } = StoreSelectors();

  const dispatch = useDispatch();

  return (
    <Form.Group as={Row} className="mb-2">
      <Col xs={10} md={8}>
        <Form.Select
          aria-label="Select mutation"
          value={selectedMutation}
          onChange={(event) => {
            dispatch(
              updateMutation({
                mutation: event.target.value as Mutation,
              })
            );
          }}
        >
          {mutations.map((mutation, i) => (
            <option
              key={i}
              value={mutation}
              disabled={current.data.mutations[mutation]}
            >
              <MutationTrans mutation={mutation}></MutationTrans>
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={2} md={4}>
        <Stack direction="horizontal" className="justify-content-end" gap={3}>
          <Button
            variant="outline-secondary"
            size="sm"
            // TODO: add selected mutation instead
            disabled={current.data.mutations[selectedMutation]}
            onClick={() => onAddMutation(selectedMutation)}
          >
            <Icon.Plus />
          </Button>
        </Stack>
      </Col>
    </Form.Group>
  );
};

export default AddMutationComponent;
