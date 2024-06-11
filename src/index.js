class Character {
    constructor(name, hitPoints, damage) {
        this.name = name
        this.maxHitPoints = hitPoints
        this.currentHitPoints = hitPoints
        this.damage = damage
    }
    takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage
    }
}

class Player extends Character {
    constructor(name, hitPoints, damage) {
        super(name, hitPoints, damage)
    }
}

class Wolf extends Character {
    constructor(name, hitPoints, damage) {
        super(name, hitPoints, damage)
    }
}

class Goblin extends Character {
    constructor(name, hitPoints, damage) {
        super(name, hitPoints, damage)
    }
}

class Undead extends Character {
    constructor(name, hitPoints, damage) {
        super(name, hitPoints, damage)
    }
}

class Brawler extends Character {
    constructor(name, hitPoints, damage) {
        super(name, hitPoints, damage)
    }
}

class BattleScene {
    fight(characterOne, characterTwo) {
        while (characterOne.currentHitPoints > 0 && characterTwo.currentHitPoints > 0) {
            characterTwo.takeDamage(characterOne)
            console.log(`${characterTwo.name} took ${characterOne.damage} damage`)
            if (characterTwo.currentHitPoints > 0) {
                characterOne.takeDamage(characterTwo)
                console.log(`${characterOne.name} took ${characterTwo.damage} damage`)
            }
            if (characterTwo.currentHitPoints <= 0) {
                return characterOne.name
            }
            if (characterOne.currentHitPoints <= 0) {
                return characterTwo.name
            }
        }
    }
}



// const me = new Player ("Me", 20, 5)
// console.log(me)
// console.log(me.damage)
// me.takeDamage({damage: 13})
// console.log(me)

export default Character
export { Player, Undead, BattleScene }