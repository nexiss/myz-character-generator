import { useDispatch } from 'react-redux';
import { Mutation } from '../../models';
import { removeMutation } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import MutationTrans from '../../atoms/trans/mutation-trans';
import StoreSelectors from '../../store/selectors';

export const MutationsList = () => {
  const { current } = StoreSelectors();

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
