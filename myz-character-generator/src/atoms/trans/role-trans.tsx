import { Trans } from 'react-i18next';
import { ROLE_OPTION_VALUE } from '../../store/data';

export type RoleProps = {
  role: ROLE_OPTION_VALUE;
};

export const RoleTrans = (props: RoleProps) => {
  const { role } = props;
  return <Trans i18nKey={'roles.' + role}>{String(role)}</Trans>;
};

export default RoleTrans;
