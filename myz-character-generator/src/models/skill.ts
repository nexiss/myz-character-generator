import { Attribute } from './attributes';

export enum BasicSkill {
  ENDURE = 'ENDURE',
  FORCE = 'FORCE',
  FIGHT = 'FIGHT',
  SNEAK = 'SNEAK',
  MOVE = 'MOVE',
  SHOOT = 'SHOOT',
  SCOUT = 'SCOUT',
  COMPREHEND = 'COMPREHEND',
  KNOW_THE_ZONE = 'KNOW_THE_ZONE',
  SENSE_EMOTION = 'SENSE_EMOTION',
  MANIPULATE = 'MANIPULATE',
  HEAL = 'HEAL',
}

export enum RoleSkill {
  INTIMIDATE = 'INTIMIDATE',
  JURY_RIG = 'JURY_RIG',
  FIND_THE_PATH = 'FIND_THE_PATH',
  MAKE_A_DEAL = 'MAKE_A_DEAL',
  SIC_THE_DOG = 'SIC_THE_DOG',
  INSPIRE = 'INSPIRE',
  COMMAND = 'COMMAND',
  SHAKE_IT_OFF = 'SHAKE_IT_OFF',
}

export type Skill = BasicSkill | RoleSkill;

export type BasicSkillsAttributes = {
  [BasicSkill.ENDURE]: Attribute.STRENGTH;
  [BasicSkill.FORCE]: Attribute.STRENGTH;
  [BasicSkill.FIGHT]: Attribute.STRENGTH;
  [BasicSkill.SNEAK]: Attribute.AGILITY;
  [BasicSkill.MOVE]: Attribute.AGILITY;
  [BasicSkill.SHOOT]: Attribute.AGILITY;
  [BasicSkill.SCOUT]: Attribute.WITS;
  [BasicSkill.COMPREHEND]: Attribute.WITS;
  [BasicSkill.KNOW_THE_ZONE]: Attribute.WITS;
  [BasicSkill.SENSE_EMOTION]: Attribute.EMPATHY;
  [BasicSkill.MANIPULATE]: Attribute.EMPATHY;
  [BasicSkill.HEAL]: Attribute.EMPATHY;
};

export type RoleSkillsAttributes = {
  [RoleSkill.INTIMIDATE]: Attribute.WITS;
  [RoleSkill.JURY_RIG]: Attribute.WITS;
  [RoleSkill.FIND_THE_PATH]: Attribute.AGILITY;
  [RoleSkill.MAKE_A_DEAL]: Attribute.EMPATHY;
  [RoleSkill.SIC_THE_DOG]: Attribute.AGILITY;
  [RoleSkill.INSPIRE]: Attribute.EMPATHY;
  [RoleSkill.COMMAND]: Attribute.WITS;
  [RoleSkill.SHAKE_IT_OFF]: Attribute.STRENGTH;
};

export type SkillAttributes = BasicSkillsAttributes & RoleSkillsAttributes;
