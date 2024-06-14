import Character from "./index.js"

class Goblin extends Character {
	constructor(name, maxHitPoints, damage) {
		super(name, maxHitPoints, damage)
		this.currentHitPoints = maxHitPoints
	}
}

export default Goblin
