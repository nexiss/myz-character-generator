import { useDispatch, useSelector } from 'react-redux';
import { MutationId } from '../../models';
import { Current, removeMutation, RootState } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Trans } from 'react-i18next';

export const MutationsList = () => {
  const current = useSelector<{ root: RootState }, Current>(
    (state) => state.root.current
  );

  const dispatch = useDispatch();

  return (
    <ul>
      {Object.entries(current.mutations)
        .filter(([_, value]) => value)
        .map(([key], i: number) => {
          const mutationId = Number(key) as MutationId;
          return (
            <li key={i} value={mutationId}>
              <Trans i18nKey={'mutations.' + mutationId}>
                {String(mutationId)}
              </Trans>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => dispatch(removeMutation({ id: mutationId }))}
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
