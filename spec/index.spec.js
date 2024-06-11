import Player from "../src/index.js";

describe('Player', () => {
    let player

    beforeEach(() => {
        player = new Player({name: 'Jane', maxHitPoints: 150, damage: 20})
    })

    it('should exist', () => {
        expect(player).toBeInstanceOf(Player)
        expect(player.name).toBe('Jane')
        expect(player.maxHitPoints).toBe(150)
        expect(player.currentHitPoints).toBe(150)
        expect(player.damage).toBe(20)
    })
})