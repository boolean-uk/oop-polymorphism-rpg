import { Player, Enemy, BattleScene } from '../src/Character.js'

describe('Characters', ()=> {
    let player1
    let enemy1
    let enemy2
    let enemy3

    beforeEach(()=> {
         player1 = new Player('Will', 100, 100, 25)
         enemy1 = new Enemy('Goblin', 20, 20, 5)
         enemy2 = new Enemy('Giant', 200, 200, 20)
         enemy3 = new Enemy('Necromancer', 50, 50, 10)
    })

    it("should have a takeDamage method that reduces their HP by attacker's damage", () => {
        player1.takeDamage(enemy1)

        expect(player1.currentHitPoints).toEqual(95)

    })
})


