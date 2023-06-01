import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _raceInstances = 0;
  
  constructor(name: string, dext: number) {
    super(name, dext);
    this._maxLifePoints = 80;
    Dwarf._raceInstances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Dwarf._raceInstances;
  }
}