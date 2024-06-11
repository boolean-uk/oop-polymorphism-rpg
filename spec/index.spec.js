import Player, { Ogre, Undead, Slime } from "../src/index.js";

describe('Characters', () => {
    let player
    let ogre
    let undead
    let slime

    beforeEach(() => {
        player = new Player({name: 'Jane', maxHitPoints: 150, damage: 20})
        ogre = new Ogre({name: 'Marnix', maxHitPoints: 500, damage: 100})
        undead = new Undead({name: 'Jacob', maxHitPoints: 80, damage: 30})
        slime = new Slime({name: 'Mr. Bubbles', maxHitPoints: 180, damage: 8})
    })

    it('should exist', () => {
        expect(player).toBeInstanceOf(Player)
        expect(player.name).toBe('Jane')
        expect(player.maxHitPoints).toBe(150)
        expect(player.currentHitPoints).toBe(150)
        expect(player.damage).toBe(20)

        expect(ogre).toBeInstanceOf(Ogre)
        expect(ogre.name).toBe('Marnix')
        expect(ogre.maxHitPoints).toBe(500)
        expect(ogre.currentHitPoints).toBe(500)
        expect(ogre.damage).toBe(100)

        expect(undead).toBeInstanceOf(Undead)
        expect(undead.name).toBe('Jacob')
        expect(undead.maxHitPoints).toBe(80)
        expect(undead.currentHitPoints).toBe(80)
        expect(undead.damage).toBe(30)

        expect(slime).toBeInstanceOf(Slime)
        expect(slime.name).toBe('Mr. Bubbles')
        expect(slime.maxHitPoints).toBe(180)
        expect(slime.currentHitPoints).toBe(180)
        expect(slime.damage).toBe(8)
    })
})