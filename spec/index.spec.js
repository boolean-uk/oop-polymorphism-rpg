import exp from "constants"
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
        expect(character.currentHitPoints).toBe(30)
    })
})
describe('Player and Enemies', () => {
    let player
    let enemy
    beforeEach(() => {
        player = new Player()
        enemy = new Enemy1()
    })
    it('should obsorb hits from an attacker which calls the takeDamge method', () => {
        player.hitsObsorbed(enemy)
        expect(player.currentHitPoints).toBe(25)
        expect(enemy.currentHitPoints).toBe(30)
    })
})