class Character {
    constructor(name, maxHitPoints, damage) {
      this.name = name;
      this.maxHitPoints = maxHitPoints;
      this.currentHitPoints = maxHitPoints;
      this.damage = damage;
    }
  
    takeDamage(attacker) {
        console.log("Attacker damage:", attacker.damage);
        console.log("Current hit points before damage:", this.currentHitPoints);
        this.currentHitPoints -= attacker.damage;
        if (this.currentHitPoints < 0) {
            this.currentHitPoints = 0;
        }
        console.log("Current hit points after damage:", this.currentHitPoints);
    }
    
  }
  
  class Player extends Character {
    constructor(name, maxHitPoints, damage) {
      super(name, maxHitPoints, damage);
    }
  }
  
  class Goblin extends Character {
    constructor() {
      super('Goblin', 30, 5);
    }
  }
  
  class Troll extends Character {
    constructor() {
      super('Troll', 50, 10);
    }
  }
  
  class Dragon extends Character {
    constructor() {
      super('Dragon', 100, 20);
    }
  }
  
  class BattleScene {
    fight(char1, char2) {
      while (char1.currentHitPoints > 0 && char2.currentHitPoints > 0) {
        char1.takeDamage(char2);
        if (char1.currentHitPoints <= 0) {
          return char2.name;
        }
        char2.takeDamage(char1);
        if (char2.currentHitPoints <= 0) {
          return char1.name;
        }
      }
    }
  }
  
  module.exports = { Character, Player, Goblin, Troll, Dragon, BattleScene };
  