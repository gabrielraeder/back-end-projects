import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  private static _raceInstances = 0;
  
  constructor(name: string, dext: number) {
    super(name, dext);
    this._maxLifePoints = 74;
    Orc._raceInstances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Orc._raceInstances;
  }
}