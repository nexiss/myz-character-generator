import { Trans } from 'react-i18next';
import { Mutation } from '../../models';

export type MutationProps = {
  mutation: Mutation;
};

export const MutationTrans = (props: MutationProps) => {
  const { mutation } = props;
  return (
    <Trans i18nKey={'mutations.' + mutation + '.title'}>
      {String(mutation)}
    </Trans>
  );
};

export default MutationTrans;
