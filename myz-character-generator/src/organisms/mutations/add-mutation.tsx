import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CharacterSheet, Mutation } from '../../models';
import { updateMutation } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import MutationTrans from '../../atoms/trans/mutation-trans';
import { RootState } from '../../store/state';

export type AddMutationProps = {
  onAddMutation: (mutation: Mutation) => void;
};

export const AddMutationComponent = (props: AddMutationProps) => {
  const { onAddMutation } = props;

  const selectedMutation = useSelector<{ root: RootState }, Mutation>(
    (state) => state.root.selectedMutation
  );

  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.current
  );

  const mutations = useSelector<{ root: RootState }, Mutation[]>(
    (state) => state.root.data.mutations
  );

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
              disabled={current.mutations[mutation]}
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
            disabled={current.mutations[selectedMutation]}
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
