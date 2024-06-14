import Character from "./index.js"

class Player extends Character {
	constructor(name, maxHitPoints, damage) {
		super(name, maxHitPoints, damage)
		this.currentHitPoints = this.maxHitPoints
	}
}

export default Player