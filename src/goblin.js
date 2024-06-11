import Character from "./index.js";

class Goblin extends Character{
    constructor(name='Chikx', maxHitPoints = 23, damage = 5) {
        super(name, maxHitPoints, damage)        
    }
}

// const gob1 = new Goblin('Pitsis', 33, 7)
// const gob2 = new Goblin()

// console.log(gob1);
// console.log(gob2);
export default Goblin