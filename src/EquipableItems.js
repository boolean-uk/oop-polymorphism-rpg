class EquipableItem {
	constructor(damageModifier) {
		this.damageModifier = damageModifier
	}

	weaponDamageModifier() {
		return this.damageModifier + 1
    }
    
    armorDamageModifier() {
        return this.damageModifier - 1
    }
}


export default EquipableItem
