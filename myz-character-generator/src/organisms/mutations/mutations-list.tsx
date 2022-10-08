import { useDispatch, useSelector } from 'react-redux';
import { CharacterSheet, Mutation } from '../../models';
import { removeMutation } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import MutationTrans from '../../atoms/trans/mutation-trans';
import { RootState } from '../../store/state';

export const MutationsList = () => {
  const current = useSelector<{ root: RootState }, CharacterSheet>(
    (state) => state.root.current
  );

  const dispatch = useDispatch();

  return (
    <ul>
      {Object.entries(current.mutations)
        .filter(([_, value]) => value)
        .map(([key], i: number) => {
          const mutation = key as Mutation;
          return (
            <li key={i} value={mutation}>
              <MutationTrans mutation={mutation}></MutationTrans>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => dispatch(removeMutation({ mutation }))}
              >
                <Icon.Trash />
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

export default MutationsList;
