export class Character {
    constructor(
      name,
      maxHitPoints,
      damage,
      strength = 0,
      defense = 0,
      criticalStrikeChance = 0
    ) {
      this.name = name;
      this.maxHitPoints = maxHitPoints;
      this.currentHitPoints = maxHitPoints;
      this.damage = damage + (0.5 / 100) * strength;
      this.weapon = null;
      this.armour = [];
      this.strength = strength;
      this.defense = defense;
      this.criticalStrikeChance = criticalStrikeChance;
    }
  
    takeDamage(attacker) {
      let armourPoints = this.armour.reduce(
        (prev, curr) => prev + curr.damageModifier,
        1
      );
      this.currentHitPoints -=
        attacker.damage / armourPoints + (0.5 / 100) * this.defense;
    }
  
    equipWeapon(weapon) {
      this.weapon = weapon;
      this.damage = this.weapon.calculateDamage(this.damage);
    }
  
    equipArmour(armour) {
      if (this.armour.length == 4) throw "cannot add more armour";
      this.armour.push(armour);
    }
  }
  
  export class Player extends Character {}
  
  export class Minion extends Character {}
  
  export class MiniBoss extends Character {}
  
  export class Boss extends Character {}
  
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
  
  export class EquippableItem {
    constructor(damageModifier) {
      this.damageModifier = damageModifier;
    }
    calculateDamage(damage) {
      return damage * this.damageModifier;
    }
  }
  
  // weapons
  export class Club extends EquippableItem {}
  export class Sword extends EquippableItem {}
  
  
  // armour
  export class Helmet extends EquippableItem {}
  export class Shield extends EquippableItem {}
  export class Breatsplate extends EquippableItem {}
  export class Boots extends EquippableItem {}
  