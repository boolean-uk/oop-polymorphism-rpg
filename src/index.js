class Character  {
    constructor() {
        this.name = ''
        this.maxHitPoints = 30
        this.currentHitPoints = 30
        this.damage = 5
    }

    takeDamage(attacker) {
        attacker.currentHitPoints -= this.damage
    }
}

class Player extends Character {
    constructor() {
        super().name = 'Horne'
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy1 extends Character {
    constructor() {
        super().name = 'Villmata'
        this.damage = 10
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy2 extends Character {
    constructor() {
        super().name = 'Bearl'
        this.damage = 3
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy3 extends Character {
    constructor() {
        super().name = 'Clawes'
        this.damage = 6
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class BattleScene extends Character {
    constructor() {
        super()
    }

    fight(player, enemy) {
        let strikes = 0
        while(strikes < 6) {
            strikes++
            player.takeDamage(enemy)
            enemy.takeDamage(player)
            if (
                player.currentHitPoints === 0
            ) {
                return enemy.name
            } else if (
                enemy.currentHitPoints === 0
            ) {
                return player.name
                }
        }
    }
}

class EquippableItem {
    constructor() {
        this.damageModifier = 7
    }

    calculateDamage(damage) {
        damage += this.damageModifier
    }
}

export { Player, Enemy1, BattleScene }
export default Character

const playerInstance = new Player()
const enemyInstance = new Enemy1()
const enemy2 = new Enemy2()
const battleInstance = new BattleScene()
battleInstance.fight(playerInstance, enemyInstance)



