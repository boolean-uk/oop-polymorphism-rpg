import { Weapon, Armour} from '../src/EquippableItem.js'

export default class Character {
    constructor(
        name,
        maxHitPoints,
        damage,
        maximumWeapons = 1,
        maximumArmour = 4
    ) {
        this.name = name
        this.maxHitPoints = maxHitPoints
        this.currentHitPoints = maxHitPoints
        this.damage = damage
        this.equipment = new Map()
        this.equipment.set('weapons', [])
        this.equipment.set('armour', [])
        this.maximumWeapons = maximumWeapons
        this.maximumArmour = maximumArmour
    }

    equip(item) {
        if (
            (item instanceof Weapon) &&
            this.equipment.get('weapons').length < this.maximumWeapons
        ) {
            this.equipment.get('weapons').push(item)
            return this
        }

        if (
            (item instanceof Armour) &&
            this.equipment.get('armour').length < this.maximumArmour
        ) {
            this.equipment.get('armour').push(item)
            return this
        }

        throw Error('Item cannot be equipped')
    }

    damageOutput() {
        let damage = this.damage
        const weapons = this.equipment.get('weapons')
        for (let i = 0; i < weapons.length; i++ ) {
            damage = weapons[i].calculateDamage(damage)
        }
        return damage
    }

    damageResist() {
        let resist = 0
        const armour = this.equipment.get('armour')
        for (let i = 0; i < armour.length; i++) {
            resist = armour[i].calculateDamage(resist)
        }
        return resist
    }

    takeDamage(attacker) {
        const damageTaken = attacker.damageOutput() - this.damageResist()

        this.currentHitPoints -= this.damageTaken < 0 ? 0 : damageTaken
        return this.currentHitPoints
    }
}
