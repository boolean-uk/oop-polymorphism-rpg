import EquippableItem from './EquippableItem.js'

export default class Armor extends EquippableItem {
    constructor(damageModifier) {
        super(damageModifier)
    }
}

class Greaves extends Armor {
    constructor() {
        super(50)
    }
}

class Helmet extends Armor {
    constructor() {
        super(100)
    }
}

class Shield extends Armor {
    constructor() {
        super(150)
    }
}

class ChainMail extends Armor {
    constructor() {
        super(200)
    }
}

export {
    Greaves,
    Helmet,
    Shield,
    ChainMail
}
