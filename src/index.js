class Character {
	constructor(name = "", maxHitPoints = 0, damage = 0) {
		this.name = name
		this.maxHitPoints = maxHitPoints
		this.currentHitPoints = this.maxHitPoints
		this.damage = damage
	}

	takeDamage(attacker) {
		let dmg = Math.floor(Math.random() * attacker.damage + 1)
		this.currentHitPoints -= dmg
		console.log(
			`${attacker.name} hits ${this.name} for ${dmg} points of damage`
		)
	}
}

export default Character

