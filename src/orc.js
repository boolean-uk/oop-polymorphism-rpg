import Character from "./index.js"

class Orc extends Character {
	constructor(name = "Gorgo", maxHitPoints = 52, damage = 8) {
		super(name, maxHitPoints, damage)
	}
}

export default Orc
