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
    this.equippedWeapon = weapon
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
