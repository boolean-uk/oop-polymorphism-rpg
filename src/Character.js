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
        this.attributes = new Map()
        this.attributes.set('strength', 0)
        this.attributes.set('defence', 0)
        this.attributes.set('critChance', 0)
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
        const strength = this.attributes.get('strength')
        const weapons = this.equipment.get('weapons')
        for (let i = 0; i < weapons.length; i++ ) {
            damage = weapons[i].calculateDamage(damage)
        }

        const finalDamage = damage * Math.round(1 + (strength * 0.005))
        return finalDamage * (this.isCrit() ? 2 : 1)
    }

    isCrit() {
        const critChance = this.attributes.get('critChance', 0)
        
        if((Math.floor(Math.random() * 101)) < (critChance * 0.005)) {
            return true
        }

        return false
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
        const defence = this.attributes.get('defence')

        this.currentHitPoints -= this.damageTaken < 0 ? 0 : Math.ceil((damageTaken * (1 - (defence * 0.004))))
        return this.currentHitPoints
    }
}
