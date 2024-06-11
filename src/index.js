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



const me = new Player ("Me", 20, 5)
console.log(me)
console.log(me.damage)
me.takeDamage({damage: 13})
console.log(me)

export default Character