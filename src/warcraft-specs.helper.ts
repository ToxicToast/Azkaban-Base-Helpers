enum WarcraftSpecs {
  NULL = '',
  ENHANCEMENT = 'Enhancement',
  MISTWEAVER = 'Mistweaver',
  PROTECTION = 'Protection',
  SURVIVAL = 'Survival',
  DISCIPLINE = 'Discipline',
  BREWMASTER = 'Brewmaster',
  FURY = 'Fury',
  UNHOLY = 'Unholy',
  ASSASSINATION = 'Assassination',
  RESTORATION = 'Restoration',
  FROST = 'Frost',
  ARCANE = 'Arcane',
  HOLY = 'Holy',
  RETRIBUTION = 'Retribution',
  ARMS = 'Arms',
  BEAST_MASTERY = 'Beast Mastery',
  MARKSMANSHIP = 'Marksmanship',
  SHADOW = 'Shadow',
  SUBTLETY = 'Subtlety',
  FERAL = 'Feral',
  GUARDIAN = 'Guardian',
  DESTRUCTION = 'Destruction',
  FIRE = 'Fire',
  BLOOD = 'Blood',
  OUTLAW = 'Outlaw',
  ELEMENTAL = 'Elemental',
  AFFLICTION = 'Affliction',
  DEMONOLOGY = 'Demonology',
  WINDWALKER = 'Windwalker',
  BALANCE = 'Balance',
  HAVOC = 'Havoc',
  VENGEANCE = 'Vengeance',
  DEVASTATION = 'Devastation',
  PRESERVATION = 'Preservation',
  AUGMENTATION = 'Augmentation',
}

export function WarcraftSpecsHelper(specId: number): string {
  switch (specId) {
    default:
      return WarcraftSpecs.NULL;
    case 263:
      return WarcraftSpecs.ENHANCEMENT;
    case 270:
      return WarcraftSpecs.MISTWEAVER;
    case 66:
      return WarcraftSpecs.PROTECTION;
    case 255:
      return WarcraftSpecs.SURVIVAL;
    case 256:
      return WarcraftSpecs.DISCIPLINE;
    case 268:
      return WarcraftSpecs.BREWMASTER;
    case 72:
      return WarcraftSpecs.FURY;
    case 252:
      return WarcraftSpecs.UNHOLY;
    case 259:
      return WarcraftSpecs.ASSASSINATION;
    case 264:
      return WarcraftSpecs.RESTORATION;
    case 64:
      return WarcraftSpecs.FROST;
    case 62:
      return WarcraftSpecs.ARCANE;
    case 65:
      return WarcraftSpecs.HOLY;
    case 70:
      return WarcraftSpecs.RETRIBUTION;
    case 71:
      return WarcraftSpecs.ARMS;
    case 73:
      return WarcraftSpecs.PROTECTION;
    case 253:
      return WarcraftSpecs.BEAST_MASTERY;
    case 254:
      return WarcraftSpecs.MARKSMANSHIP;
    case 258:
      return WarcraftSpecs.SHADOW;
    case 261:
      return WarcraftSpecs.SUBTLETY;
    case 103:
      return WarcraftSpecs.FERAL;
    case 104:
      return WarcraftSpecs.GUARDIAN;
    case 105:
      return WarcraftSpecs.RESTORATION;
    case 267:
      return WarcraftSpecs.DESTRUCTION;
    case 257:
      return WarcraftSpecs.HOLY;
    case 63:
      return WarcraftSpecs.FIRE;
    case 250:
      return WarcraftSpecs.BLOOD;
    case 251:
      return WarcraftSpecs.FROST;
    case 260:
      return WarcraftSpecs.OUTLAW;
    case 262:
      return WarcraftSpecs.ELEMENTAL;
    case 265:
      return WarcraftSpecs.AFFLICTION;
    case 266:
      return WarcraftSpecs.DEMONOLOGY;
    case 269:
      return WarcraftSpecs.WINDWALKER;
    case 102:
      return WarcraftSpecs.BALANCE;
    case 577:
      return WarcraftSpecs.HAVOC;
    case 581:
      return WarcraftSpecs.VENGEANCE;
    case 1467:
      return WarcraftSpecs.DEVASTATION;
    case 1468:
      return WarcraftSpecs.PRESERVATION;
    case 1473:
      return WarcraftSpecs.AUGMENTATION;
  }
}
