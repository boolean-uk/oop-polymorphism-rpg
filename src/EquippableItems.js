class EquippableItem {
  constructor(damageModifier) {
    this.damageModifier = damageModifier;
  }

  calculateDamage(damageNumber) {
    return this.damageModifier * damageNumber
  }
}

class Sword extends EquippableItem {
  constructor(damageModifier, name) {
    super(damageModifier);
    this.name = name;
  }
}

class Helmet extends EquippableItem {
  constructor(damageModifier, name) {
    super(damageModifier);
    this.name = name;
  }
}

class Gloves extends EquippableItem {
  constructor(damageModifier, name) {
    super(damageModifier);
    this.name = name;
  }
}

class Boots extends EquippableItem {
  constructor(damageModifier, name) {
    super(damageModifier);
    this.name = name;
  }
}

class Pauldrons extends EquippableItem {
  constructor(damageModifier, name) {
    super(damageModifier);
    this.name = name;
  }
}

export { Sword, Helmet, Boots, Gloves, Pauldrons };
