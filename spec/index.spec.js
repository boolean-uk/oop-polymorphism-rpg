import Character from "../src/index.js"
import Player from "../src/player.js"
import BattleScene from "../src/BattleScene.js"

describe("character", () => {
	let charSheet

	beforeEach(() => {
		charSheet = new Character()
	})

	it("should be an instance of Character", () => {
		expect(charSheet).toBeInstanceOf(Character)
	})

	it("should be a charachter with no name, 0 hp and 0 damage", () => {
		expect(charSheet.name).toBe("")
		expect(charSheet.maxHitPoints).toBe(0)
		expect(charSheet.damage).toBe(0)
	})
})

describe("Player", () => {
	let player1
	let player2

	beforeEach(() => {
		player1 = new Player("Hero", 35, 6)
		player2 = new Player("Enemy", 33, 1)
	})

	it("should be able to create multiple new characters with different names and stats", () => {
		expect(player1.name).toBe("Hero")
		expect(player2.name).toBe("Enemy")
		expect(player1.maxHitPoints).toBe(35)
		expect(player2.maxHitPoints).toBe(33)
		expect(player1.currentHitPoints).toBe(35)
		expect(player2.currentHitPoints).toBe(33)
		expect(player1.damage).toBe(6)
		expect(player2.damage).toBe(1)
	})

	it("should use the function takeDamage from Character to decrease the current hit points according to the attackers damage", () => {
		expect(player1.currentHitPoints).toBe(35)
		player1.takeDamage(player2)
		expect(player1.currentHitPoints).toBe(34)
	})
})

describe("BatleScene", () => {
	let fight
	let player1
	let player2

	beforeEach(() => {
		player1 = new Player("Hero", 50, 5)
		player2 = new Player("Enemy", 5, 1)
		fight = new BattleScene(player1, player2)
	})

	it("should be an instance of BattleScene", () => {
		expect(fight).toBeInstanceOf(BattleScene)
    })
    
    it('should accept 2 players', () => {
        expect(fight.p1.name).toBe('Hero')
        expect(fight.p1.damage).toBe(5)
        expect(fight.p2.name).toBe('Enemy')
        expect(fight.p2.damage).toBe(1)
	})
	
	it('should return the name of the winner', () => {
		expect(fight.fight()).toEqual('Hero has won the fight!')
	})
    

})
