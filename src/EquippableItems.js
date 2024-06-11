class EquippableItem {
    constructor(damageModifier) {
        this.damageModifier = damageModifier
    }

    calculateDamage(damageNumber) {
    }
}

class Sword extends EquippableItem {
    constructor(damageModifier, name) {
        super(damageModifier)
        this.name = name
    }
}


export { Sword }