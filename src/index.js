import Weapon from "./Weapons.js"
class Character {
	constructor(name, maxHitPoints, damage, weapon) {
		this.name = name
		this.maxHitPoints = maxHitPoints
		this.currentHitPoints = this.maxHitPoints
		this.damage = damage
		this.weapon = weapon
	}

	equipWeapon(weapon) {
		this.weapon = weapon
	}

	takeDamage(attacker) {
		let dmg = Math.floor(Math.random() * attacker.inflictDamage() + 1)
		this.currentHitPoints -= dmg
		console.log(
			`${attacker.name} hits ${this.name} for ${dmg} points of damage`
		)
		return this.currentHitPoints
	}

	inflictDamage() {
		let totalDamageInflicted = this.damage
		if (!this.weapon) {
			return totalDamageInflicted
		} else {
			totalDamageInflicted += this.weapon.weaponDamageModifier()
			return totalDamageInflicted
		}
	}
}
export default Character
