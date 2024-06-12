import EquipableItem from "./equipableItems.js"

class Weapon extends EquipableItem {
	constructor(damageModifier, name) {
		super(damageModifier)
		this.name = name
	}
}

export default Weapon
