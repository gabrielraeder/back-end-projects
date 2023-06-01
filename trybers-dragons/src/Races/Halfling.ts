import Race from './Race';

export default class Halfling extends Race {
  public _maxLifePoints: number;
  private static _raceInstances = 0;
  
  constructor(name: string, dext: number) {
    super(name, dext);
    this._maxLifePoints = 60;
    Halfling._raceInstances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Halfling._raceInstances;
  }
}