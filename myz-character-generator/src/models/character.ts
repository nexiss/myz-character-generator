import { Attributes } from './attributes';
import { Mutation } from './mutation';
import { Role } from './role';
import { BasicSkill, SkillByRole } from './skill';
import { Talent } from './talent';

export type CharacterSheet<T extends Role = Role> = {
  description: {
    name: string;
  };
  role: T;
  attributes: Attributes;
  mutations: Record<Mutation, boolean>;
  skills: Record<CharacterSkill<T>, boolean>;
  talents: Talent[];
  gear: any;
};

export type CharacterSkill<T extends Role> = BasicSkill | typeof SkillByRole[T];

export type PCharacterSheet<
  T extends Role,
  U extends keyof CharacterSheet
> = Pick<CharacterSheet<T>, U>;
