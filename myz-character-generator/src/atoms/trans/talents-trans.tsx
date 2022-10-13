import { Trans } from 'react-i18next';
import { Talent } from '../../models';

export type TalentProps = {
  talent: Talent;
};

export const TalentTrans = (props: TalentProps) => {
  const { talent } = props;
  return (
    <Trans i18nKey={'talents.' + talent + '.title'}>{String(talent)}</Trans>
  );
};

export default TalentTrans;
