export default class EquippableItem {
    constructor(damageModifier) {
        this.damageModifier = damageModifier
    }

    calculateDamage() {
        return this.damageModifier
    }
}
