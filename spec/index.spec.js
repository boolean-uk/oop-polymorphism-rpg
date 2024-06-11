import Character from '../src/Character.js'
import { Player, NonPlayerCharacter, BattleScene } from '../src/index.js' // Adjust the import according to your file structure
import { weaponArmoury, armourArmoury } from '../src/EquippableItem.js'


describe('Character Classes', () => {
    let player, npc, battleScene

    beforeEach(() => {
        player = new Player('Hero', 100, 10)
        npc = new NonPlayerCharacter('Villain', 80, 8)
        battleScene = new BattleScene()
    })

    describe('Player', () => {
        it('should be an instance of Character', () => {
            expect(player instanceof Character).toBe(true)
        })

        it('should initialize with correct values', () => {
            expect(player.name).toBe('Hero')
            expect(player.maxHitPoints).toBe(100)
            expect(player.currentHitPoints).toBe(100)
            expect(player.damage).toBe(10)
        })
    })

    describe('NonPlayerCharacter', () => {
        it('should be an instance of Character', () => {
            expect(npc instanceof Character).toBe(true)
        })

        it('should initialize with correct values', () => {
            expect(npc.name).toBe('Villain')
            expect(npc.maxHitPoints).toBe(80)
            expect(npc.currentHitPoints).toBe(80)
            expect(npc.damage).toBe(8)
        })
    })

    describe('BattleScene', () => {
        it('should throw an error if characters are not instances of Character', () => {
            expect(() => battleScene.fight({}, player)).toThrowError(
                'Ensure both characters are Character instances'
            )
            expect(() => battleScene.fight(player, {})).toThrowError(
                'Ensure both characters are Character instances'
            )
        })

        it('should declare the Player as the winner if NPC is defeated', () => {
            expect(battleScene.fight(player, npc)).toBe('Hero')
        })

        it('should declare the NPC as the winner if Player is defeated', () => {
            player.currentHitPoints = 10

            expect(battleScene.fight(player, npc)).toBe('Villain')
        })

        it('should swap characters if player is in the second position', () => {
            expect(battleScene.fight(npc, player)).toBe('Hero')
        })
    })

    describe('Equipment', () => {
        it('should allow equipping weapons and armour', () => {
            const sword = weaponArmoury.get('Sword')
            player.equip(sword)
            expect(player.equipment.get('weapons')).toContain(sword)

            const helmet = armourArmoury.get('Helmet')
            player.equip(helmet)
            expect(player.equipment.get('armour')).toContain(helmet)
        })

        it('should calculate damage output correctly', () => {
            const sword = weaponArmoury.get('Sword')
            player.equip(sword)
            expect(player.damageOutput()).toBe(20)
        })

        it('should calculate damage resistance correctly', () => {
            const helmet = armourArmoury.get('Helmet')
            player.equip(helmet)
            expect(player.damageResist()).toBe(4)
        })
    })

    describe('Damage', () => {
        it('should take damage correctly', () => {
            player.takeDamage(npc)
            expect(player.currentHitPoints).toBe(92)
        })

        it('should account for damage resistance', () => {
            const helmet = armourArmoury.get('Helmet')
            player.equip(helmet)
            player.takeDamage(npc)
            expect(player.currentHitPoints).toBe(96)
        })
    })

    describe('Attributes in damage calculation', () => {
        it('should calculate atrribute based damage resistance correctly', () => {
            player.attributes.set('defence', 200)
            expect(player.takeDamage(npc)).toBe(98)
        })

        it('should calculate atrribute based damage output correctly', () => {
            player.attributes.set('strength', 200)
            expect(player.damageOutput()).toBe(20)
        })

        it('should calculate atrribute based damage output correctly when a critical strike occurs', () => {
            player.attributes.set('strength', 200)
            player.attributes.set('critChance', 10000)
            expect(player.damageOutput()).toBe(40)
        })
    })
})
