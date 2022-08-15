import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { MutationId } from '../../models';
import { Current, RootState, updateMutation } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Trans } from 'react-i18next';

export type AddMutationProps = {
  onAddMutation: (mutationId: MutationId) => void;
};

export const AddMutationComponent = (props: AddMutationProps) => {
  const { onAddMutation } = props;

  const selectedMutation = useSelector<{ root: RootState }, MutationId>(
    (state) => state.root.selectedMutation
  );

  const current = useSelector<{ root: RootState }, Current>(
    (state) => state.root.current
  );

  const mutations = useSelector<{ root: RootState }, MutationId[]>(
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
                mutation: Number(event.target.value) as MutationId,
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
              <Trans i18nKey={'mutations.' + mutation}>
                {String(mutation)}
              </Trans>
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
