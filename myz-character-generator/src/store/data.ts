import { Role } from '../models';

export const RANDOM = 'random';

export type ROLE_OPTION_VALUE = typeof RANDOM | Role;

export const roles: ROLE_OPTION_VALUE[] = [
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
