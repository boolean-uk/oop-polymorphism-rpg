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
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy2 extends Character {
    constructor() {
        super.name = 'Bearl'
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy3 extends Character {
    constructor() {
        super().name = 'Clawes'
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
                enemy.currentHitPoints === 0 &&
                player.currentHitPoints > enemy.currentHitPoints
            ) {
                return console.log(player.name)
            } else if (
                player.currentHitPoints === 0 &&
                enemy.currentHitPoints > player.currentHitPoints
            ) {
                    return console.log(enemy.name)
                }
        }
    }
}
export { Player, Enemy1 }
export default Character

const playerInstance = new Player()
const enemyInstance = new Enemy1()
const battleInstance = new BattleScene()
battleInstance.fight(playerInstance, enemyInstance)



