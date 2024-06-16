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
    constructor(
        name,
        maxHitPoints,
        damage,
        strength = 0,
        
      ) {
        this.name = name;
        this.maxHitPoints = maxHitPoints;
        this.currentHitPoints = maxHitPoints;
        this.damage = damage + (0.5 / 100) * strength;  }
    
      takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage;
      }
    
      equipWeapon(weapon) {
        this.weapon = weapon;
        this.damage = this.weapon.calculateDamage(this.damage);
      }
}

export class Player extends Character {}

export class Minion extends Character {}

export class MiniBoss extends Character {}

export class Boss extends Character {}

export class EquippableItem{
    constructor(damageModifier){
        this.damageModifier = damageModifier
    }
    calculateDamage(damage){}

}

// weapons
export class Club extends EquippableItem {}
export class Sword extends EquippableItem {}

