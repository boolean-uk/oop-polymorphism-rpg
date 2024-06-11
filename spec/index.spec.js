import Character from "../src/index.js";

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