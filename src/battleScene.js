class BattleScene {
	constructor(p1, p2) {
		this.p1 = p1
		this.p2 = p2
	}

	fight() {
		console.log(`${this.p1.name} is going to fight ${this.p2.name}`)
		while (
			this.p1.currentHitPoints > 0 ||
			this.p2.currentHitPoints > 0
		) {
			this.p1.takeDamage(this.p2)
			console.log(
				` \n ${this.p1.name} now has ${this.p1.currentHitPoints} HP\n\n`
			)
			if (this.p1.currentHitPoints <= 0) {
				console.log(`\n\n${this.p2.name} has won the fight!`)
				return `${this.p2.name} has won the fight!`
				
			}
			this.p2.takeDamage(this.p1)
			console.log(
				` \n ${this.p2.name} now has ${this.p2.currentHitPoints} HP\n\n`
			)
			if (this.p2.currentHitPoints <= 0) {
				console.log(`\n\n${this.p1.name} has won the fight!`)
				return `${this.p1.name} has won the fight!`
				
			}
		}
	}
}

export default BattleScene


