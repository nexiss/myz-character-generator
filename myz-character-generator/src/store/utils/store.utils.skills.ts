import { BasicSkill, Role, RoleSkill, Skill } from '../../models';
import { SkillByRole } from '../data';
import { generateElementsByRole } from './store.utils';

export const buildInitialSkills = (): Record<Skill, boolean> => {
  return getSkills().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Skill, boolean>
  );
};

export const generateSkillsByRole = <T extends Role>(
  role: T
): Record<Skill, boolean> => {
  const basicSkills = getBasicSkills();
  const roleSkills = getRoleSkills().filter(
    (roleSkill) => SkillByRole[role] === roleSkill
  );

  return generateElementsByRole(
    role,
    { arr: basicSkills, count: 2 },
    { arr: roleSkills, count: 1 }
  );
};

export const getBasicSkills = (): BasicSkill[] => Object.values(BasicSkill);

export const getRoleSkills = (): RoleSkill[] => Object.values(RoleSkill);

export const getSkills = (): Skill[] => [
  ...getBasicSkills(),
  ...getRoleSkills(),
];
