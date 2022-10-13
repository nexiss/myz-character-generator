import { GeneralTalent, Role, RoleTalent, Talent } from '../../models';
import { TalentByRole } from '../data';
import { generateElementsByRole } from './store.utils';

export const buildInitialTalents = (): Record<Talent, boolean> => {
  return getTalents().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Talent, boolean>
  );
};

export const generateTalentsByRole = <T extends Role>(
  role: T
): Record<Talent, boolean> => {
  const generalTalents = getGeneralTalents();
  const roleTalents = getRoleTalents().filter((roleTalent) =>
    TalentByRole[role].includes(roleTalent)
  );

  return generateElementsByRole(
    role,
    { arr: generalTalents, count: 2 },
    { arr: roleTalents, count: 1 }
  );
};

export const getGeneralTalents = (): GeneralTalent[] =>
  Object.values(GeneralTalent);

export const getRoleTalents = (): RoleTalent[] => Object.values(RoleTalent);

export const getTalents = (): Talent[] => [
  ...getGeneralTalents(),
  ...getRoleTalents(),
];
