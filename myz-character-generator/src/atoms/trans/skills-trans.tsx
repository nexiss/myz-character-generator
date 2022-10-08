import { Trans } from 'react-i18next';
import { Skill } from '../../models';

export type SkillProps = {
  skill: Skill;
};

export const SkillTrans = (props: SkillProps) => {
  const { skill } = props;
  return <Trans i18nKey={'skills.' + skill + '.title'}>{String(skill)}</Trans>;
};

export default SkillTrans;
