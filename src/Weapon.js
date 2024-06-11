import EquippableItem from './EquippableItem.js'

export default class Weapon extends EquippableItem {
    constructor(damageModifier) {
        super(damageModifier)
    }
}

class Dagger extends Weapon {
    constructor() {
        super(50)
    }
}

class Axe extends Weapon {
    constructor() {
        super(100)
    }
}

class Sword extends Weapon {
    constructor() {
        super(200)
    }
}

export {
    Dagger,
    Axe,
    Sword
}
