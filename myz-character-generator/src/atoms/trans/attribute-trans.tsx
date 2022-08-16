import { Trans } from 'react-i18next';
import { Attribute } from '../../models';

export type AttributeProps = {
  attribute: Attribute;
};

export const AttributeTrans = (props: AttributeProps) => {
  const { attribute } = props;
  return <Trans i18nKey={'attributes.' + attribute}>{String(attribute)}</Trans>;
};

export default AttributeTrans;
