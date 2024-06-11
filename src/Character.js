export default class Character{
    constructor(name, maxHitPoints, damage) {
        this.name = name
        this.maxHitPoints = maxHitPoints
        this.currentHitPoints = maxHitPoints
        this.damage = damage
    }

    takeDamage(attacker) {
        this.currentHitPoints -= attacker.damage
        return this.currentHitPoints
    }
}