import { TalentByRole } from '../store/data';
import { Role } from './role';

// TODO: Use english names instead
export enum GeneralTalent {
  ADMIRER = 'ADMIRER',
  ARCHEOLOGIST = 'ARCHEOLOGIST',
  ASSASIN = 'ASSASIN',
  BAD_OMENS = 'BAD_OMENS',
  BODYGUARD = 'BODYGUARD',
  BUTCHER = 'BUTCHER',
  COMBAT_VETERAN = 'COMBAT_VETERAN',
  COOL_HEAD = 'COOL_HEAD',
  COUNSELOR = 'COUNSELOR',
  COWARD = 'COWARD',
  FAST_DRAW = 'FAST_DRAW',
  FLYWEIGHT = 'FLYWEIGHT',
  GADGETEER = 'GADGETEER',
  GOOD_FOOTWORK = 'GOOD_FOOTWORK',
  HARD_HITTER = 'HARD_HITTER',
  JACK_OF_ALL_TRADES = 'JACK_OF_ALL_TRADES',
  LIGHT_EATER = 'LIGHT_EATER',
  LONER = 'LONER',
  NEVER_SURRENDER = 'NEVER_SURRENDER',
  PACK_MULE = 'PACK_MULE',
  PERSONAL_ARITHMETIC = 'PERSONAL_ARITHMETIC',
  SHARPSHOOTER = 'SHARPSHOOTER',
  SLEEPLESS = 'SLEEPLESS',
  STOIC = 'STOIC',
  THERAPIST = 'THERAPIST',
  WEAPON_SPECIALIST = 'WEAPON_SPECIALIST',
  WORKHORSE = 'WORKHORSE',
  ZONE_COOK = 'ZONE_COOK',
}

export enum RoleTalent {
  BARGE_THROUGH = 'BARGE_THROUGH',
  SUCKER_PUNCH = 'SUCKER_PUNCH',
  MEAN_STREAK = 'MEAN_STREAK',
  TINKERER = 'TINKERER',
  MOTORHEAD = 'MOTORHEAD',
  INVENTOR = 'INVENTOR',
  SCAVENGER = 'SCAVENGER',
  ROT_FINDER = 'ROT_FINDER',
  MONSTER_HUNTER = 'MONSTER_HUNTER',
  VICIOUS_CREEP = 'VICIOUS_CREEP',
  WHEELER_DEALER = 'WHEELER_DEALER',
  JUICY_INFO = 'JUICY_INFO',
  MUTANTS_BEST_FRIEND = 'MUTANTS_BEST_FRIEND',
  FIGHT_DOG = 'FIGHT_DOG',
  BLOODHOUND = 'BLOODHOUND',
  AGITATOR = 'AGITATOR',
  PERFORMER = 'PERFORMER',
  BONESAW = 'BONESAW',
  RACKETEER = 'RACKETEER',
  COMMANDER = 'COMMANDER',
  GUNSLINGERS = 'GUNSLINGERS',
  CYNIC = 'CYNIC',
  REBEL = 'REBEL',
  RESILIENT = 'RESILIENT',
}

export type CharacterTalent<T extends Role> =
  | GeneralTalent
  | typeof TalentByRole[T][number];

export type Talent = GeneralTalent | RoleTalent;
