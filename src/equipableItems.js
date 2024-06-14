class EquipableItem {
	constructor(damageModifier) {
		this.damageModifier = damageModifier
	}

	weaponDamageModifier() {
        return this.damageModifier
    }
    
    armorDamageModifier(damage) {
        return damage - this.damageModifier 
    }
}


export default EquipableItem
