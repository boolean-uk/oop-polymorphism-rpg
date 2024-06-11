import {  
    Player,
    EasyEnemy,
    MediumEnemy,
    HardEnemy,
    BattleScene
} from '../src/index.js'

describe('Battle Scene', () => {
    let player
    let easyEnemy
    let mediumEnemy
    let hardEnemy
    let battleScene

    beforeEach(() => {
        player = new Player()
        easyEnemy = new EasyEnemy()
        mediumEnemy = new MediumEnemy()
        hardEnemy = new HardEnemy()
        battleScene = new BattleScene()
    })

    it("should be able to return the fight's winner", () => {        
        expect(battleScene.fight(player, hardEnemy)).toMatch(
            /(Ghost Rider wins the battle against Darkseid|Darkseid wins the battle against Ghost Rider)/
        )        
    })
})
