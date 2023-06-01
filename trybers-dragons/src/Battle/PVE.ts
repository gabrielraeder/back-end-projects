import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private char: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(char);
  }

  turns(turn: number, monster: number): void {
    if (turn % 2 === 0) {
      this.char.attack(this.monsters[getRandomInt(0, this.monsters.length)]);
    } else {
      this.monsters[monster].attack(this.char);
    }
  }

  attacking(): void {
    let turn = 0;
    let monster = 0;
    while (this.char.lifePoints > 0 && this
      .monsters.some((i) => i.lifePoints > 0)) {
      this.turns(turn, monster);
      monster = monster === this.monsters.length - 1 ? 0 : monster + 1;
      turn += 1;
    }
  }

  fight(): number {
    this.attacking();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}