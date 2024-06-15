class Character {
	constructor(name) {
		this.name = name;
		this.maxHitPoints = 100;
		this.currentHitPoints = 100;
		this.damage = 10;
	}

	takeDamage(attacker) {
		this.currentHitPoints = this.currentHitPoints - attacker.damage;
	}
	get isAlive() {
		return this.currentHitPoints > 0;
	}
}

class Player extends Character {}

class Balrog extends Character {}
class Dragon extends Character {}
class Muppet extends Character {}

class BattleScene {
	fight(p1, p2) {
		while (p1.isAlive && p2.isAlive) {
			p1.takeDamage(p2);
			p2.takeDamage(p1);
		}

		return p1.isAlive ? p1 : p2;
	}
}

module.exports = { Player, Balrog, Dragon, Muppet, BattleScene };
