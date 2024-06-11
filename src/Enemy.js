import Character from './Character.js'

export default class Enemy extends Character {
    constructor(name, maxHitPoints, currentHitPoints, damage, equipment = []) {
        super(name, maxHitPoints, currentHitPoints, damage, equipment)
    }
}

function getRandomDamage(HP) {
    return Math.floor(HP / [1, 2, 4, 8][Math.floor(Math.random() * 4)])
}

class EasyEnemy extends Enemy {
    constructor() {
        super('Memnon', 1800, 1800, getRandomDamage(1800))
    }
}

class MediumEnemy extends Enemy {
    constructor() {
        super('Dario III', 2650, 2650, getRandomDamage(2650))
    }
}

class HardEnemy extends Enemy {
    constructor() {
        super('Porus', 5000, 5000, getRandomDamage(5000))
    }
}


export {
    EasyEnemy,
    MediumEnemy,
    HardEnemy
}
