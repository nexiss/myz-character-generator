import { useDispatch } from 'react-redux';
import { addMutation } from '../../store/store';
import AddMutationComponent from './add-mutation';
import MutationsList from './mutations-list';

export const Mutations = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <AddMutationComponent
        onAddMutation={(mutationId) =>
          dispatch(
            addMutation({
              id: mutationId,
            })
          )
        }
      ></AddMutationComponent>
      <MutationsList></MutationsList>
    </div>
  );
};

export default Mutations;
