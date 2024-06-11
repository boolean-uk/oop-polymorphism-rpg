class Character {
    constructor(name, maxHitPoints, currentHitPoints, damage) {
        this.name = name
        this.maxHitPoints = maxHitPoints
        this.currentHitPoints = currentHitPoints
        this.damage = damage
    }

    takeDamage(character) {
        this.currentHitPoints -= character.damage
    }
}

class Player extends Character {
    constructor() {
        super(
            'Ghost Rider',
            3500,
            3500,
            875
        )
    }
}

class EasyEnemy extends Character {
    constructor() {
        super(
            'Lex Luthor',
            1800,
            1800,
            Math.floor(
                1800 / [1, 2, 4, 8][Math.floor(Math.random() * 4)]
            )
        )
    }
}

class MediumEnemy extends Character {
    constructor() {
        super(
            'Ultron',
            2650,
            2650,
            Math.floor(
                2650 / [1, 2, 4, 8][Math.floor(Math.random() * 4)]
            )
        )
    }
}

class HardEnemy extends Character {
    constructor() {
        super(
            'Darkseid',
            5000,
            5000,
            Math.floor(
                5000 / [1, 2, 4, 8][Math.floor(Math.random() * 4)]
            )
        )
    }
}

class BattleScene {
    fight(player, enemy) {
        while(player.currentHitPoints > 0 && enemy.currentHitPoints > 0) {
            enemy.takeDamage(player)

            if (enemy.currentHitPoints <= 0) {
                return `${player.name} wins the battle against ${enemy.name}.`
            } 
            
            player.takeDamage(enemy)
            
            if (player.currentHitPoints <= 0) {
                return `${enemy.name} wins the battle against ${player.name}.`
            }
        }
    }
}

export {  
    Player,
    EasyEnemy,
    MediumEnemy,
    HardEnemy,
    BattleScene
}
