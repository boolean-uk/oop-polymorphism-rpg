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

    hitsObsorbed(attack) {
        attack.takeDamage(this)
    }
}

class Enemy1 extends Character {
    constructor() {
        super().name = 'Villmata'
    }

    hitsObsorbed(attack) {
        attack.takeDamage(this)
    }
}

class Enemy2 extends Character {
    constructor() {
        super.name = 'Bearl'
    }

    hitsObsorbed(attack) {
        attack.takeDamage(this)
    }
}

class Enemy3 extends Character {
    constructor() {
        super().name = 'Clawes'
    }

    hitsObsorbed(attack) {
        attack.takeDamage(this)
    }
}

const playerInstance = new Player()
const enemyInstance = new Enemy1()
enemyInstance.hitsObsorbed(playerInstance)
enemyInstance.currentHitPoints

