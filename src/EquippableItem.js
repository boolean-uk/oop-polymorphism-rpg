export default class EquippableItem {
    constructor(damagemodifier) {
        this.damagemodifier = damagemodifier
    }

    calculateDamage(damage=0) {
        return damage+this.damagemodifier
    }
}

export class Weapon extends EquippableItem {
    constructor(name, damageModifier) {
        super(damageModifier)
        this.name = name
    }
}

export class Armour extends EquippableItem {
    constructor(name, damageModifier) {
        super(damageModifier)
        this.name = name
    }
}

export const weaponArmoury = new Map([
    ['Sword', new Weapon('Sword', 10)],
    ['Axe', new Weapon('Axe', 12)],
    ['Bow', new Weapon('Bow', 8)],
    ['Dagger', new Weapon('Dagger', 6)],
    ['Mace', new Weapon('Mace', 11)],
    ['Spear', new Weapon('Spear', 9)],
    ['Crossbow', new Weapon('Crossbow', 10)],
    ['Halberd', new Weapon('Halberd', 13)],
    ['Warhammer', new Weapon('Warhammer', 14)],
    ['Staff', new Weapon('Staff', 7)],
])

export const armourArmoury = new Map([
    ['Leather Armour', new Armour('Leather Armour', 5)],
    ['Chainmail Armour', new Armour('Chainmail Armour', 8)],
    ['Plate Armour', new Armour('Plate Armour', 12)],
    ['Helmet', new Armour('Helmet', 4)],
    ['Shield', new Armour('Shield', 6)],
    ['Gauntlets', new Armour('Gauntlets', 3)],
    ['Boots', new Armour('Boots', 2)],
    ['Greaves', new Armour('Greaves', 4)],
    ['Bracers', new Armour('Bracers', 3)],
    ['Cloak', new Armour('Cloak', 1)],
])