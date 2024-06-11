import Character from './Character.js'

class Player extends Character {
    constructor(name, maxHitPoints, damage) {
        super(name, maxHitPoints, damage)
    }
}

class NonPlayerCharacter extends Character {
    constructor(name, maxHitPoints, damage) {
        super(name, maxHitPoints, damage)
    }
}



class BattleScene {
    fight(character1, character2) {
        if (
            !(character1 instanceof Character) ||
            !(character2 instanceof Character)
        ) {
            throw new Error('Ensure both characters are Character instances')
        }

        if (character2 instanceof Player && !character1 instanceof Player) {
            ;[character1] = [character2]
        }

        while (
            character1.currentHitPoints > 0 &&
            character2.currentHitPoints > 0
        ) {
            character2.takeDamage(character1)
            if (!character2.currentHitPoints > 0) {
                return character1.name
            }
            character1.takeDamage(character2)
        }

        return character2.name
    }
}

export {
    Player,
    NonPlayerCharacter,
    BattleScene,
}
