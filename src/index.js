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
}

class Enemy1 extends Character {
    constructor() {
        super().name = 'Villmata'
    }
}

class Enemy2 extends Character {
    constructor() {
        super.name = 'Bearl'
    }
}

class Enemy2 extends Character {
    constructor() {
        super().name = 'Clawes'
    }
}

const playerInstance = new Player()
console.log(playerInstance.name)