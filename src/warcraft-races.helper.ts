enum WarcraftRaces {
  NULL = '',
  HUMAN = 'Human',
  TROLL = 'Troll',
  DRAENEI = 'Draenei',
  BLOODELF = 'Blood Elf',
  NIGHTELF = 'Night Elf',
  DWARF = 'Dwarf',
  PANDAREN = 'Pandaren',
  TAUREN = 'Tauren',
  UNDEAD = 'Undead',
  ORC = 'Orc',
  GNOME = 'Gnome',
  ZANDALARITROLL = 'Zandalari Troll',
  GOBLIN = 'Goblin',
  KULTIRAN = 'Kul Tiran',
  LIGHTFORGEDDRAENEI = 'Lightforged Draenei',
  HIGHTMOUNTAINTAUREN = 'Highmountain Tauren',
  NIGHTBORNE = 'Nightborne',
  WORGEN = 'Worgen',
  DARKIRONDWARF = 'Dark Iron Dwarf',
  VULPERA = 'Vulpera',
  MAGHARORC = 'Maghar Orc',
  VOIDELF = 'Void Elf',
  MECHAGNOME = 'Mechagnome',
  DRACTHYR = 'Dracthyr',
  EARTHEN = 'Earthen',
}

export function WarcraftRacesHelper(raceId: number): string {
  switch (raceId) {
    default:
      return WarcraftRaces.NULL;
    case 1:
      return WarcraftRaces.HUMAN;
    case 2:
      return WarcraftRaces.ORC;
    case 3:
      return WarcraftRaces.DWARF;
    case 4:
      return WarcraftRaces.NIGHTELF;
    case 5:
      return WarcraftRaces.UNDEAD;
    case 6:
      return WarcraftRaces.TAUREN;
    case 7:
      return WarcraftRaces.GNOME;
    case 8:
      return WarcraftRaces.TROLL;
    case 9:
      return WarcraftRaces.GOBLIN;
    case 10:
      return WarcraftRaces.BLOODELF;
    case 11:
      return WarcraftRaces.DRAENEI;
    case 22:
      return WarcraftRaces.WORGEN;
    case 24:
    case 25:
    case 26:
      return WarcraftRaces.PANDAREN;
    case 27:
      return WarcraftRaces.NIGHTBORNE;
    case 28:
      return WarcraftRaces.HIGHTMOUNTAINTAUREN;
    case 29:
      return WarcraftRaces.VOIDELF;
    case 30:
      return WarcraftRaces.LIGHTFORGEDDRAENEI;
    case 31:
      return WarcraftRaces.ZANDALARITROLL;
    case 32:
      return WarcraftRaces.KULTIRAN;
    case 34:
      return WarcraftRaces.DARKIRONDWARF;
    case 35:
      return WarcraftRaces.VULPERA;
    case 36:
      return WarcraftRaces.MAGHARORC;
    case 37:
      return WarcraftRaces.MECHAGNOME;
    case 52:
    case 70:
      return WarcraftRaces.DRACTHYR;
    case 84:
    case 85:
      return WarcraftRaces.EARTHEN;
  }
}
