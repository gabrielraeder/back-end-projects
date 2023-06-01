import Race from './Race';

export default class Elf extends Race {
  public _maxLifePoints: number;
  private static _raceInstances = 0;
  
  constructor(name: string, dext: number) {
    super(name, dext);
    this._maxLifePoints = 99;
    Elf._raceInstances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Elf._raceInstances;
  }
}