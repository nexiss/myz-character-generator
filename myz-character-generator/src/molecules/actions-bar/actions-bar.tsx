import { Component, ReactNode } from 'react';
import { Stack, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Trans } from 'react-i18next';

export type ActionsBarProps = {
  onSave?: () => void;
  onGenerate?: () => void;
};

class ActionsBar extends Component<ActionsBarProps> {
  render(): ReactNode {
    const { onGenerate, onSave } = this.props;

    const generateHandler = () => {
      onGenerate?.call(this);
    };
    const saveHandler = () => {
      onSave?.call(this);
    };

    return (
      <Stack direction="horizontal" className="justify-content-end" gap={3}>
        <Button
          variant="outline-secondary"
          size="sm"
          className="generate-button"
          onClick={generateHandler}
        >
          <Trans i18nKey="others.generate">Generate</Trans>
        </Button>
        <Button variant="outline-secondary" size="sm" onClick={saveHandler}>
          <Icon.CheckLg />
        </Button>
      </Stack>
    );
  }
}

export default ActionsBar;
