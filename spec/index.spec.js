import Character, { Player, Undead, BattleScene } from "../src/index.js";

describe("Character", () => {
    const character = new Character("Me", 20, 5)
    it("should exist", () => {
        expect(character).toBeInstanceOf(Character)
    })
    it("should be able to recive damage", () => {
        expect(character.currentHitPoints).toEqual(20)
        character.takeDamage({damage: 7})
        expect(character.currentHitPoints).toEqual(13)
    })
})

describe("Player", () => {
    const player = new Player("Me", 20, 6)
    it("should exist", () => {
        expect(player).toBeInstanceOf(Player)
    })
    it("should be able to recive damage", () => {
        expect(player.currentHitPoints).toEqual(20)
        player.takeDamage({damage: 7})
        expect(player.currentHitPoints).toEqual(13)
    })
})

describe("Undead", () => {
    const undead = new Undead("Joe", 8, 7)
    it("should exist", () => {
        expect(undead).toBeInstanceOf(Undead)
    })
    it("should be able to recive damage", () => {
        expect(undead.currentHitPoints).toEqual(8)
        undead.takeDamage({damage: 7})
        expect(undead.currentHitPoints).toEqual(1)
    })
})

describe("BattleScene", () => {
    const battleScene = new BattleScene()
    it("should exist", () => {
        expect(battleScene).toBeInstanceOf(BattleScene)
    })
    it("should return the characters name which wins the fight", () => {
        const me = new Player("Alistair", 20, 6)
        const undeadOne = new Undead("Frank", 8, 7)
        const undeadTwo = new Undead("Slender", 7, 8)
        const undeadThree = new Undead("Snapper", 7, 10)
        expect(battleScene.fight(me, undeadOne)).toEqual("Alistair")
        expect(battleScene.fight(me, undeadTwo)).toEqual("Alistair")
        // console.log(me.currentHitPoints)
        expect(battleScene.fight(me, undeadThree)).toEqual("Snapper")
    })
})