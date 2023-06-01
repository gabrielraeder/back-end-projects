import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private char1: Fighter,
    private char2: Fighter,
  ) {
    super(char1);
  }

  attacking(): void {
    let turn = 0;
    while (this.char1.lifePoints > 0 && this.char2.lifePoints > 0) {
      if (turn % 2 === 0) {
        this.char1.attack(this.char2);
      } else {
        this.char2.attack(this.char1);
      }
      turn += 1;
    }
  }

  fight(): number {
    this.attacking();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}