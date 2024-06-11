class Character {
  constructor(name, maxHitPoints, currentHitPoints, damage, equippedWeapon = '', equippedArmour = []) {
    this.name = name;
    this.maxHitPoints = maxHitPoints;
    this.currentHitPoints = currentHitPoints;
    this.damage = damage;
    this.equippedWeapon = equippedWeapon
    this.equippedArmour = equippedArmour
  }

  takeDamage(attacker) {
    this.currentHitPoints -= attacker.damage;
  }

  equipWeapon(weapon) {
    if (this.equippedWeapon) {
      throw new Error('This character already has a weapon equipped')
    }
    this.equippedWeapon = weapon
  }
  
  equipArmour(armour) {
    if (this.equippedArmour.length >= 4) {
      throw new Error('Characters can only equip 4 items of armour')
    }
    this.equippedArmour.push(armour)
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


export { Character, Player, Enemy };
