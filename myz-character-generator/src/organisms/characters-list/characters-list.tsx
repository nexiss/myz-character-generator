import { Accordion, Button } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import StoreSelectors from '../../store/selectors';
import { selectCharacterAsCurrent } from '../../store/store';

import './characters-list.scss';

export const CharactersList = () => {
  const { characters, current } = StoreSelectors();

  const dispatch = useDispatch();

  return (
    <div>
      <h5 className="text-center">
        <Trans i18nKey="others.characters">Characters</Trans>
      </h5>
      <Accordion defaultActiveKey="0">
        {characters.map((characterSheet, i: number) => {
          return (
            <Accordion.Item eventKey={characterSheet.id}>
              <Accordion.Header>
                {characterSheet.description.name}
              </Accordion.Header>
              <Accordion.Body
                className={`${
                  characterSheet.id === current.id ? 'selected' : ''
                }`}
              >
                <div>id: {characterSheet.id}</div>
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    dispatch(
                      selectCharacterAsCurrent({ id: characterSheet.id })
                    )
                  }
                >
                  <Trans i18nKey={'others.edit'}>Edit</Trans>
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default CharactersList;
