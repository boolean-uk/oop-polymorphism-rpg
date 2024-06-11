class Character {
    constructor(character){
        this.name = character.name
        this.maxHitPoints = character.maxHitPoints
        this.currentHitPoints = character.maxHitPoints
        this.damage = character.damage
    }

    takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage
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

export default Player
export { Ogre, Undead, Slime, BattleScene }