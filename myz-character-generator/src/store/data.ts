import { Role, RoleSkill, RoleTalent } from '../models';

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

export const TalentByRole = {
  [Role.ENFORCER]: [
    RoleTalent.BARGE_THROUGH,
    RoleTalent.SUCKER_PUNCH,
    RoleTalent.MEAN_STREAK,
  ],
  [Role.GEARHEAD]: [
    RoleTalent.TINKERER,
    RoleTalent.MOTORHEAD,
    RoleTalent.INVENTOR,
  ],
  [Role.STALKER]: [
    RoleTalent.SCAVENGER,
    RoleTalent.MONSTER_HUNTER,
    RoleTalent.ROT_FINDER,
  ],
  [Role.FIXER]: [
    RoleTalent.VICIOUS_CREEP,
    RoleTalent.WHEELER_DEALER,
    RoleTalent.JUICY_INFO,
  ],
  [Role.DOG_HANDLER]: [
    RoleTalent.MUTANTS_BEST_FRIEND,
    RoleTalent.FIGHT_DOG,
    RoleTalent.BLOODHOUND,
  ],
  [Role.CHRONICLER]: [
    RoleTalent.AGITATOR,
    RoleTalent.PERFORMER,
    RoleTalent.BONESAW,
  ],
  [Role.BOSS]: [
    RoleTalent.RACKETEER,
    RoleTalent.COMMANDER,
    RoleTalent.GUNSLINGERS,
  ],
  [Role.SLAVE]: [RoleTalent.CYNIC, RoleTalent.REBEL, RoleTalent.RESILIENT],
};
