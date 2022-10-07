import { RoleSkill } from './skill';

export enum Role {
  ENFORCER = 'ENFORCER',
  GEARHEAD = 'GEARHEAD',
  STALKER = 'STALKER',
  FIXER = 'FIXER',
  DOG_HANDLER = 'DOG_HANDLER',
  CHRONICLER = 'CHRONICLER',
  BOSS = 'BOSS',
  SLAVE = 'SLAVE',
}

export const SkillByRole = {
  [Role.ENFORCER]: RoleSkill.INTIMIDATE,
  [Role.GEARHEAD]: RoleSkill.JURY_RIG,
  [Role.STALKER]: RoleSkill.FIND_THE_PATH,
  [Role.FIXER]: RoleSkill.MAKE_A_DEAL,
  [Role.DOG_HANDLER]: RoleSkill.SIC_THE_DOG,
  [Role.CHRONICLER]: RoleSkill.INSPIRE,
  [Role.BOSS]: RoleSkill.COMMAND,
  [Role.SLAVE]: RoleSkill.SHAKE_IT_OFF,
};
