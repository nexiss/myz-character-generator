import { Stack, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Trans } from 'react-i18next';
import StoreSelectors from '../../store/selectors';

export type ActionsBarProps = {
  onSave?: () => void;
  onGenerate?: () => void;
};

export const ActionsBar = (props: ActionsBarProps) => {
  const { current, isCurrentValid } = StoreSelectors();

  const { onGenerate, onSave } = props;

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
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={saveHandler}
        disabled={current.fetching || !isCurrentValid}
      >
        <Icon.CheckLg />
      </Button>
    </Stack>
  );
};

export default ActionsBar;
