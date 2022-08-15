import { Component, ReactNode } from 'react';
import { Trans } from 'react-i18next';

class CharactersList extends Component {
  render(): ReactNode {
    return (
      <div className="text-center">
        <Trans i18nKey="others.characters"></Trans>
      </div>
    );
  }
}

export default CharactersList;
