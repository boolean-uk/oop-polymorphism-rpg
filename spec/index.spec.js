import Player, { Ogre, Undead, Slime, BattleScene, MoonLightSword, HavelsHelmet, HavelsBoots, HavelsChest, HavelsPants } from "../src/index.js";

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

describe('Battle scene', () => {
    let player
    let ogre
    let undead
    let slime
    let battleScene
    let moonLightSword
    let havelsHelmet
    let havelsBoots
    let havelsChest
    let havelsPants

    beforeEach(() => {
        player = new Player({name: 'Jane', maxHitPoints: 150, damage: 20})
        ogre = new Ogre({name: 'Marnix', maxHitPoints: 200, damage: 100})
        undead = new Undead({name: 'Jacob', maxHitPoints: 80, damage: 30})
        slime = new Slime({name: 'Mr. Bubbles', maxHitPoints: 180, damage: 8})
        battleScene = new BattleScene()
        moonLightSword = new MoonLightSword(1.5)
        havelsHelmet = new HavelsHelmet(0.8)
        havelsBoots = new HavelsBoots(0.8)
        havelsChest = new HavelsChest(0.4)
        havelsPants = new HavelsPants(0.5)
    })

    it('should exist', () => {
        expect(battleScene).toBeInstanceOf(BattleScene)
    })

    it('if player fights an ogre the ogre should win', () => {
        const result = battleScene.fight(player, ogre)

        expect(result).toEqual(ogre)
    })

    it('if player fights an undead the player should win', () => {
        const result = battleScene.fight(player, undead)

        expect(result).toEqual(player)
    })

    it('if player fights a slime the player should win', () => {
        const result = battleScene.fight(player, slime)

        expect(result).toEqual(player)
    })

    it('character should be able to equip a weapon', () => {
        player.equipWeapon(moonLightSword)

        expect(player.equipedWeapon.damageModifier).toBe(1.5)
    })

    it('should throw an error if character tries to equip more than one weapon', () => {
        player.equipWeapon(moonLightSword)

        expect(() => player.equipWeapon(moonLightSword)).toThrow('you have reached the max of 1 weapon item')
    })

    it('should deal extra damage when having a weapon equipped', () => {
        undead.equipWeapon(moonLightSword)

        const result = battleScene.fight(player, undead)

        expect(result).toEqual(undead)
    })

    it('character should be able to equip an armour piece', () => {
        player.equipArmour(havelsHelmet)

        expect(player.equipedArmour[0].damageModifier).toBe(0.8)
    })

    it('should throw an error if character tries to equip more than four armour pieces', () => {
        player.equipArmour(havelsHelmet)
        player.equipArmour(havelsBoots)
        player.equipArmour(havelsChest)
        player.equipArmour(havelsPants)


        expect(() => player.equipArmour(havelsBoots)).toThrow('you have reached the max of 4 armour items')
    })

    it('should deal less damage when having armour equipped', () => {
        player.equipArmour(havelsHelmet)
        player.equipArmour(havelsBoots)
        player.equipArmour(havelsChest)
        player.equipArmour(havelsPants)

        const result = battleScene.fight(player, ogre)

        expect(result).toEqual(player)
    })
})

