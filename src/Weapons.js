import EquipableItem from "./EquipableItems.js"

class Weapon extends EquipableItem {
	constructor(damageModifier,name) {
		super(damageModifier)
		this.name = name
	}
}

export default Weapon
