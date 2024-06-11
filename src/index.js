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

export default Player