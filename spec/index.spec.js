import Character, {Player, Enemy1 } from "../src/index.js"

describe('Character', () => {
    let character
    let enemy
    beforeEach(() => {
        character = new Character()
        enemy = new Enemy1()
    })
    it('should take damage from an attacker', () => {
        let attacker = enemy
        character.takeDamage(attacker)
        expect(attacker.currentHitPoints).toBe(25)
    })
})