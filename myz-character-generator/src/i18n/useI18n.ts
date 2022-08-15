import { useTranslation } from 'react-i18next';
import { ROLE_OPTION_VALUE } from '../store/data';

export const useI18n = () => {
  const { t } = useTranslation();

  return {
    getRoleDescriptor: (role: ROLE_OPTION_VALUE) => t('roles.' + role),
  };
};
