class Character {
    constructor(character){
        this.name = character.name
        this.maxHitPoints = character.maxHitPoints
        this.currentHitPoints = character.maxHitPoints
        this.damage = character.damage
        this.equipedWeapon = ''
        this.equipedArmour = []
    }

    takeDamage(attacker) {
        if (attacker.equipedWeapon) {
            this.currentHitPoints -= attacker.equipedWeapon.calculateDamage(attacker.damage)
        }

        this.currentHitPoints -= attacker.damage
    }

    equipArmour(item) {
        if(this.equipedArmour.length === 4) {
            throw 'you have reached the max of 4 armour items'
        }

        this.equipedArmour.push(item)
    }

    equipWeapon(item) {
        if(this.equipedWeapon) {
            throw 'you have reached the max of 1 weapon item'
        }

        this.equipedWeapon = item
    }
}

class Player extends Character {
    constructor(character) {
        super(character)
    }
}

class Ogre extends Character {
    constructor(character) {
        super(character)
    }
}

class Undead extends Character {
    constructor(character) {
        super(character)
    }
}

class Slime extends Character {
    constructor(character) {
        super(character)
    }
}

class BattleScene {
    fight(player, enemy) {
        while(player.currentHitPoints > 0 && enemy.currentHitPoints > 0) {
            enemy.takeDamage(player)
            player.takeDamage(enemy)

            if (player.currentHitPoints <= 0 ) {
                return enemy
            }

            if (enemy.currentHitPoints <= 0) {
                return player 
            }
        }
    }
}

class EquippableItem {
    constructor(damageModifier) {
        this.damageModifier = damageModifier
    }

    calculateDamage(damageNumber) {
        if (this.type = 'weapon') {
            let damage = damageNumber
            damage += this.damageModifier
            return damage
        }

        if (this.type = 'armour') {
            let damage = damageNumber
            damage -= this.damageModifier
            return damage
        }

    }
}

class MoonLightSword extends EquippableItem {
    constructor(damageModifier) {
        super(damageModifier)
        this.type = 'weapon'
    }
}

export default Player
export { Ogre, Undead, Slime, BattleScene, MoonLightSword }