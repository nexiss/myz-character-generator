import {
  BasicSkill,
  Mutation,
  Role,
  RoleSkill,
  Skill,
  SkillByRole,
} from '../models';
import { RANDOM, ROLE_OPTION_VALUE } from './data';
import { CharacterSheet, GenerateOptions } from './state';
import {
  addAttributes,
  buildBaseInfo,
  addGear,
  addMutations,
  addSkills,
  addTalents,
  getRandomInt,
} from './store.utils.internal';

export const getMutations = (): Mutation[] => {
  return Object.values(Mutation);
};

export const generateSkillsByRole = <T extends Role>(
  role?: T
): Record<Skill, boolean> => {
  const basicSkills = Object.values(BasicSkill);
  const skills = getSkills();
  switch (role) {
    case Role.BOSS:
    case Role.CHRONICLER:
    case Role.DOG_HANDLER:
    case Role.ENFORCER:
    case Role.FIXER:
    case Role.GEARHEAD:
    case Role.SLAVE:
    case Role.STALKER:
      const skill1Index = getRandomInt(0, basicSkills.length - 1);
      let skill2Index: number;
      do {
        skill2Index = getRandomInt(0, basicSkills.length - 1);
      } while (skill2Index === skill1Index);

      return skills.reduce((acc, current, index) => {
        acc[current] =
          skill1Index === index ||
          skill2Index === index ||
          current === SkillByRole[role];
        return acc;
      }, {} as Record<Skill, boolean>);
    default:
      return basicSkills.reduce((acc, current, index) => {
        acc[current] = skill1Index === index || skill2Index === index;
        return acc;
      }, {} as Record<Skill, boolean>);
  }
};

export const getSkills = (): Skill[] => {
  const basicSkills = Object.values(BasicSkill);
  const roleSkills = Object.values(RoleSkill);
  return [...basicSkills, ...roleSkills];
};

export const buildInitialMutations = (): Record<Mutation, boolean> => {
  return getMutations().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Mutation, boolean>
  );
};

export const buildInitialSkills = (): Record<Skill, boolean> => {
  return getSkills().reduce(
    (prev, current) => ({ ...prev, [current]: false }),
    {} as Record<Skill, boolean>
  );
};

export const generateRandomCurrent = (
  current: CharacterSheet,
  roleOption: ROLE_OPTION_VALUE,
  generateOptions: GenerateOptions
): CharacterSheet => {
  switch (roleOption) {
    case RANDOM:
    default:
      return buildFullRandom(current, generateOptions);
  }
};

const buildFullRandom = <U extends Pick<CharacterSheet, 'description'>>(
  current: U,
  generateOptions: GenerateOptions
): CharacterSheet => {
  const c1 = buildBaseInfo({ name: current.description.name }, generateOptions);
  const c2 = addAttributes(c1);
  const c3 = addMutations(c2);
  const c4 = addSkills(c3);
  const c5 = addTalents(c4);
  const c6 = addGear(c5);

  return c6;
};
