import Character from "./index.js"

class Player extends Character {
	constructor(name, maxHitPoints, damage) {
		super(name)
		this.maxHitPoints = maxHitPoints
		this.currentHitPoints = this.maxHitPoints
		this.damage = damage
	}
}

export default Player