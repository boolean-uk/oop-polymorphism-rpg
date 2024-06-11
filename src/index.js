class Character  {
    constructor(name) {
        this.name = name
        this.maxHitPoints = 30
        this.currentHitPoints = 30
        this.damage = 5
    }

    takeDamage(attacker) {
        attacker.currentHitPoints -= this.damage
    }
}