export enum Attribute {
  STRENGTH = 'strength',
  AGILITY = 'agility',
  WITS = 'wits',
  EMPATHY = 'empathy',
}

export type Attributes = Record<Attribute, number>;
