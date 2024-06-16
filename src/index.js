export default class BattleScene {
    fight(characterA, characterB) {
        while (characterA.currentHitPoints > 0 && characterB.currentHitPoints > 0) {
          characterA.takeDamage(characterB);
          characterB.takeDamage(characterA);
        }
    
        return characterA.currentHitPoints > characterB.currentHitPoints
          ? characterA
          : characterB;
      }
    

}


export class Character {
    constructor(name, maxHitPoints, damage) {
        this.name = name;
        this.maxHitPoints = maxHitPoints;
        this.currentHitPoints = maxHitPoints;
        this.damage = damage;
      }
    
      takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage;
      }
    
}

export class Player extends Character {}

export class Minion extends Character {}

export class MiniBoss extends Character {}

export class Boss extends Character {}