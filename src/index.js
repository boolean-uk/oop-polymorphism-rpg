class Character  {
    constructor() {
        this.name = ''
        this.maxHitPoints = 30
        this.currentHitPoints = 30
        this.damage = 2
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
        this.damage = 5
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy2 extends Character {
    constructor() {
        super().name = 'Bearl'
        this.damage = 2
    }

    hitsObsorbed(combatant) {
        combatant.takeDamage(this)
    }
}

class Enemy3 extends Character {
    constructor() {
        super().name = 'Clawes'
        this.damage = 4
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
        this.damageModifier = 0
    }

    calculateDamage(damage) {
        damage += this.damageModifier
    }
}

class Sword extends EquippableItem {
    constructor() {
        super()
        this.name = 'Sword of Mrtyu'
        this.damage = 7
        this.armour = 1
    }

    mrtyuSwing(attack) {
        attack.calculateDamage(this.damage)
    }

    mrtyuBlock(defend) {
        defend.calculateDamage(this.armour)
    }
}

class ChestPlate extends EquippableItem {
    constructor() {
        super()
        this.name = 'Chest Guard'
        this.damage = 0
        this.armour = 10
    }

    chestGuard(defend) {
        defend.calculateDamage(this.armour)
    }
}

class Helmet extends EquippableItem {
    constructor() {
        super()
        this.name = 'Helmet'
        this.damage = 2
        this.armour = 7
    }

    helmet(attack) {
        attack.calculateDamage(this.damage)
    }

    helmet(defend) {
        defend.calculateDamage(this.armour)
    }
}

class Gauntlet extends EquippableItem {
    constructor() {
        super()
        this.name = 'Gauntlet'
        this.damage = 0
        this.armour = 3
    }

    gauntlet(defend) {
        defend.calculateDamage(this.armour)
    }
}

export { Player, Enemy1, BattleScene }
export default Character

const playerInstance = new Player()
const enemyInstance = new Enemy1()
const enemy2 = new Enemy2()
const battleInstance = new BattleScene()
battleInstance.fight(playerInstance, enemyInstance)



