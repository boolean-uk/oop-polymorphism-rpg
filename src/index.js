class Character {
	constructor(name, maxHitPoints, damage, weapon, armor) {
		this.name = name
		this.maxHitPoints = maxHitPoints
		this.currentHitPoints = this.maxHitPoints
		this.damage = damage
		this.weapon = weapon
		this.armor = armor
	}

	equipWeapon(weapon) {
		this.weapon = weapon
	}

	equipArmor(armor) {
		this.armor = armor
	}

	takeDamage(attacker) {
		let dmg = Math.floor(Math.random() * attacker.inflictDamage())
		let totalDamage = dmg
		if (this.armor) {
			totalDamage = dmg - this.armor.armorDamageModifier(this.damage)			
		}

		this.currentHitPoints -= totalDamage
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
