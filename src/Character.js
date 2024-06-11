import Weapon from './Weapon.js'
import Armor from './Armor.js'

export default class Character {
    constructor(name, maxHitPoints, currentHitPoints, damage, equipment = []) {
        this.name = name
        this.maxHitPoints = maxHitPoints
        this.currentHitPoints = currentHitPoints
        this.damage = damage
        this.equipment = equipment
    }

    takeDamage(attacker) {
        let totalDamage = attacker.damage
        console.log(`${attacker.name} base damage: ${attacker.damage}`)
        
        for (const item of attacker.equipment) {
            if (item instanceof Weapon) {
                const itemDamage = item.calculateDamage(attacker.damage)
                totalDamage += itemDamage
                console.log(`${attacker.name} deals additional ${itemDamage} damage with ${item.constructor.name}`)
            }
        }

        for (const item of this.equipment) {
            if (item instanceof Armor) {
                const itemReduction = item.calculateDamage(attacker.damage)
                totalDamage -= itemReduction
                console.log(`${this.name} reduces damage by ${itemReduction} with ${item.constructor.name}`)
            }
        }

        this.currentHitPoints -= totalDamage
        this.currentHitPoints = Math.max(this.currentHitPoints, 0)
        console.log(`${this.name} takes ${totalDamage} damage, remaining HP: ${this.currentHitPoints}`)
    }

    equip(item) {
        if (item instanceof Weapon) {
            if (this.equipment.some(e => e instanceof Weapon)) {
                throw new Error('You can only equip one weapon at a time.')
            } else {
                this.equipment.push(item)
            }
        } else if (item instanceof Armor) {
            if (this.equipment.filter(e => e instanceof Armor).length <= 4) {
                if (!this.equipment.some(e => e.constructor === item.constructor)) {
                    this.equipment.push(item)
                } else {
                    throw new Error('You cannot equip the same type of armor.')
                }
            } else {
                throw new Error('You can only equip up to 4 armors at a time.')
            }
        }
    }
}
