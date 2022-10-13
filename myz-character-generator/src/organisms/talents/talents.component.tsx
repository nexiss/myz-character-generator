import { useDispatch } from 'react-redux';
import { addTalent } from '../../store/store';
import AddTalentComponent from './add-talent';
import TalentsList from './talents-list';

export const TalentsComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <AddTalentComponent
        onAddTalent={(talent) =>
          dispatch(
            addTalent({
              talent,
            })
          )
        }
      ></AddTalentComponent>
      <TalentsList></TalentsList>
    </div>
  );
};

export default TalentsComponent;
