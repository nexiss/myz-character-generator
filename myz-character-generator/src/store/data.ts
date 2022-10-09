import { Role, RoleSkill } from '../models';

export const RANDOM = 'random';

export type ROLE_OPTION_VALUE = typeof RANDOM | Role;

export const selectableRoles: ROLE_OPTION_VALUE[] = [
  RANDOM,
  Role.ENFORCER,
  Role.GEARHEAD,
  Role.STALKER,
  Role.FIXER,
  Role.DOG_HANDLER,
  Role.CHRONICLER,
  Role.BOSS,
  Role.SLAVE,
];

export const SkillByRole = {
  [Role.ENFORCER]: RoleSkill.INTIMIDATE as RoleSkill.INTIMIDATE,
  [Role.GEARHEAD]: RoleSkill.JURY_RIG as RoleSkill.JURY_RIG,
  [Role.STALKER]: RoleSkill.FIND_THE_PATH as RoleSkill.FIND_THE_PATH,
  [Role.FIXER]: RoleSkill.MAKE_A_DEAL as RoleSkill.MAKE_A_DEAL,
  [Role.DOG_HANDLER]: RoleSkill.SIC_THE_DOG as RoleSkill.SIC_THE_DOG,
  [Role.CHRONICLER]: RoleSkill.INSPIRE as RoleSkill.INSPIRE,
  [Role.BOSS]: RoleSkill.COMMAND as RoleSkill.COMMAND,
  [Role.SLAVE]: RoleSkill.SHAKE_IT_OFF as RoleSkill.SHAKE_IT_OFF,
};
