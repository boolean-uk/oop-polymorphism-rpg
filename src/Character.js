class Character {
    constructor(name, maxHitPoints, currentHitPoints, damage) {
        this.name = name
        this.maxHitPoints = maxHitPoints
        this.currentHitPoints = currentHitPoints
        this.damage = damage
    }

    takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage
    }
}

class Player extends Character {
    constructor(name, maxHitPoints, currentHitPoints, damage) {
        super(name, maxHitPoints, currentHitPoints, damage)
    }
}


class Enemy extends Character {
    constructor(name, maxHitPoints, currentHitPoints, damage) {
        super(name, maxHitPoints, currentHitPoints, damage)
    }
}

class BattleScene {
    constructor(combatant1, combatant2) {
        this.combatant1 = combatant1
        this.combatant2 = combatant2
    }

    fight() {
        while (this.combatant1.currentHitPoints > 0 && this.combatant2.currentHitPoints > 0) {
            this.combatant1.takeDamage(this.combatant2)
            this.combatant2.takeDamage(this.combatant1)
            if (this.combatant2.currentHitPoints <= 0) {
                return `${this.combatant1.name} wins!`
            }
            if (this.combatant1.currentHitPoints <= 0) {
                return `${this.combatant2.name} wins!`
            }
        }
    }
}

export { Character, Player, Enemy, BattleScene}