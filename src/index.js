export class Character {
  constructor(name, maxHitPoints, damage) {
    this.name = name;
    this.maxHitPoints = maxHitPoints;
    this.currentHitPoints = maxHitPoints;
    this.damage = damage;
  }

  takeDamage(attacker) {
    this.currentHitPoints -= attacker.damage;
    if (this.currentHitPoints < 0) this.currentHitPoints = 0;
    console.log(
      `${this.name} takes ${attacker.damage} damage from ${attacker.name}. ${this.name} has ${this.currentHitPoints} HP left.`
    );
  }
}

export class Player extends Character {
  constructor(name, maxHitPoints, damage) {
    super(name, maxHitPoints, damage);
  }
}

export class Goblin extends Character {
  constructor() {
    super("Goblin", 30, 5);
  }
}

export class Orc extends Character {
  constructor() {
    super("Orc", 50, 10);
  }
}

export class Dragon extends Character {
  constructor() {
    super("Dragon", 100, 20);
  }
}

export class BattleScene {
  fight(character1, character2) {
    while (character1.currentHitPoints > 0 && character2.currentHitPoints > 0) {
      character1.takeDamage(character2);
      if (character1.currentHitPoints > 0) {
        character2.takeDamage(character1);
      }
    }

    if (character1.currentHitPoints > 0) {
      console.log(`${character1.name} wins the battle!`);
      return character1.name;
    } else {
      console.log(`${character2.name} wins the battle!`);
      return character2.name;
    }
  }
}
