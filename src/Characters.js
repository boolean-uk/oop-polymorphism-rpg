class Character {
  constructor(
    name,
    maxHitPoints,
    currentHitPoints,
    damage,
    equippedWeapon = "",
    equippedArmour = [],
    strength,
    defense,
    critChanceBonus = 1
  ) {
    this.name = name;
    this.maxHitPoints = maxHitPoints;
    this.currentHitPoints = currentHitPoints;
    this._damage = damage;
    this.equippedWeapon = equippedWeapon;
    this.equippedArmour = equippedArmour;
    this._strength = strength;
    this._defense = defense;
    this._critChanceBonus = critChanceBonus;
  }

  get damage() {
    if (this.equippedWeapon) {
      return (
        this.equippedWeapon.calculateDamage(this._damage) *
        this.strengthMultiplier *
        this.getCrit()
      );
    } else {
      return this._damage * this.strengthMultiplier * this.getCrit();
    }
  }

  getCrit() {
    const critChance = 100 / (this._critChanceBonus * 0.5);
    if (Math.floor(Math.random() * critChance) === 1) {
      return 2;
    }
    return 1;
  }

  set strength(strength) {
    this._strength = strength;
  }

  set defense(defense) {
    this._defense = defense;
  }

  get strengthMultiplier() {
    if (!this._strength) {
      return 1;
    }
    return this._strength * 0.005 + 1;
  }

  get defenseMultiplier() {
    if (!this._defense) {
      return 1;
    }
    return 1 - this._defense * 0.004;
  }

  takeDamage(attacker) {
    let damageMitigation = this.defenseMultiplier;
    if (this.equippedArmour.length > 0) {
      this.equippedArmour.forEach((armour) => {
        damageMitigation *= armour.damageModifier;
      });
    }
    this.currentHitPoints -= attacker.damage * damageMitigation;
  }

  equipWeapon(weapon) {
    if (this.equippedWeapon) {
      throw new Error("This character already has a weapon equipped");
    }
    this.equippedWeapon = weapon;
  }

  equipArmour(armour) {
    if (this.equippedArmour.length >= 4) {
      throw new Error("Characters can only equip 4 items of armour");
    }
    this.equippedArmour.push(armour);
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
