import { useDispatch } from 'react-redux';
import { Talent } from '../../models';
import { removeTalent } from '../../store/store';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import TalentTrans from '../../atoms/trans/talents-trans';
import StoreSelectors from '../../store/selectors';

export const TalentsList = () => {
  const { current } = StoreSelectors();

  const dispatch = useDispatch();

  return (
    <ul>
      {Object.entries(current.talents)
        .filter(([_, value]) => value)
        .map(([key], i: number) => {
          const talent = key as Talent;
          return (
            <li key={i} value={talent}>
              <TalentTrans talent={talent}></TalentTrans>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => dispatch(removeTalent({ talent }))}
              >
                <Icon.Trash />
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

export default TalentsList;
