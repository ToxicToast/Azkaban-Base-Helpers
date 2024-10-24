enum WarcraftClasses {
  NULL = '',
  HUNTER = 'Hunter',
  WARLOCK = 'Warlock',
  DRUID = 'Druid',
  MAGE = 'Mage',
  DEATHKNIGHT = 'Death Knight',
  DEMONHUNTER = 'Demon Hunter',
  MONK = 'Monk',
  PRIEST = 'Priest',
  PALADIN = 'Paladin',
  ROGUE = 'Rogue',
  SHAMAN = 'Shaman',
  WARRIOR = 'Warrior',
  EVOKER = 'Evoker',
}

export function WarcraftClassesHelper(classId: number): string {
  switch (classId) {
    default:
      return WarcraftClasses.NULL;
    case 1:
      return WarcraftClasses.WARRIOR;
    case 2:
      return WarcraftClasses.PALADIN;
    case 3:
      return WarcraftClasses.HUNTER;
    case 4:
      return WarcraftClasses.ROGUE;
    case 5:
      return WarcraftClasses.PRIEST;
    case 6:
      return WarcraftClasses.DEATHKNIGHT;
    case 7:
      return WarcraftClasses.SHAMAN;
    case 8:
      return WarcraftClasses.MAGE;
    case 9:
      return WarcraftClasses.WARLOCK;
    case 10:
      return WarcraftClasses.MONK;
    case 11:
      return WarcraftClasses.DRUID;
    case 12:
      return WarcraftClasses.DEMONHUNTER;
    case 13:
      return WarcraftClasses.EVOKER;
  }
}
