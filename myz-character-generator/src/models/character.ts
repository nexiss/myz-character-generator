import { SkillByRole } from '../store/data';
import { Attributes } from './attributes';
import { Mutation } from './mutation';
import { Role } from './role';
import { BasicSkill } from './skill';
import { CharacterTalent } from './talent';

export type CharacterSheet<T extends Role = Role> = {
  description: {
    name: string;
  };
  role: T;
  attributes: Attributes;
  mutations: Record<Mutation, boolean>;
  skills: Record<CharacterSkill<T>, boolean>;
  talents: Record<CharacterTalent<T>, boolean>;
  gear: any;
};

export type CharacterSkill<T extends Role> = BasicSkill | typeof SkillByRole[T];

export type PCharacterSheet<
  T extends Role,
  U extends keyof CharacterSheet
> = Pick<CharacterSheet<T>, U>;
