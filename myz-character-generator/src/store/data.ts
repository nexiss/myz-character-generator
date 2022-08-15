import { Role } from '../models';

export const RANDOM = 'random';

export type ROLE_OPTION_VALUE = typeof RANDOM | Role;

export const roles: ROLE_OPTION_VALUE[] = [
  RANDOM,
  Role.Enforcer,
  Role.Gearhead,
  Role.Stalker,
  Role.Fixer,
  Role.Dog_Handler,
  Role.Chronicler,
  Role.Boss,
  Role.Slave,
];
