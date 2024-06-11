class Character {
  constructor(name, maxHitPoints, currentHitPoints, damage) {
    this.name = name;
    this.maxHitPoints = maxHitPoints;
    this.currentHitPoints = currentHitPoints;
    this.damage = damage;
  }
  takeDamage(Player) {
    if (Player.damage) {
      this.currentHitPoints -= Player.damage;
      return `${Player.name} has inflicted ${Player.damage} on ${this.name}.`;
    }
  }
}

class Player extends Character {
  constructor(name, maxHitPoints, currentHitPoints, damage) {
    super(name, maxHitPoints, currentHitPoints, damage);
  }
}

class Enemy extends Character {
  constructor(name, maxHitPoints, currentHitPoints, damage) {
    super(name, maxHitPoints, currentHitPoints, damage);
  }
}

class Enemy2 extends Character {
  constructor(name, maxHitPoints, currentHitPoints, damage) {
    super(name, maxHitPoints, currentHitPoints, damage);
  }
}
class BattleScene {
  fight(character, player) {
    while (character.currentHitPoints > 0 && player.currentHitPoints > 0) {
      player.takeDamage(character);

      if (player.currentHitPoints <= 0) {
        return `The winner is ${character.name}`;
      }

      character.takeDamage(player);

      if (character.currentHitPoints <= 0) {
        return `The winner is ${player.name}`;
      }
    }
  }
}

module.exports = { Character, Player, BattleScene, Enemy, Enemy2 };
