import EquipableItem from "./equipableItems.js"

class Armor extends EquipableItem {
	constructor(damageModifier, name) {
		super(damageModifier)
		this.name = name
	}
}

export default Armor
