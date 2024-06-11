import BattleScene from '../src/BattleScene.js'
import Player from '../src/Player.js'
import {
    EasyEnemy,
    MediumEnemy,
    HardEnemy
} from '../src/Enemy.js'
import {
    Dagger,
    Axe,
    Sword
} from '../src/Weapon.js'
import {
    Greaves,
    Helmet,
    Shield,
    ChainMail
} from '../src/Armor.js'

describe('Battle Scene', () => {
    let battle
    let player
    let easyEnemy
    let mediumEnemy
    let hardEnemy
    let dagger
    let axe
    let sword
    let greaves
    let helmet
    let shield
    let chainMail

    beforeEach(() => {
        battle = new BattleScene()
        player = new Player()
        easyEnemy = new EasyEnemy()
        mediumEnemy = new MediumEnemy()
        hardEnemy = new HardEnemy()
        dagger = new Dagger()
        axe = new Axe()
        sword = new Sword()
        greaves = new Greaves()
        helmet = new Helmet()
        shield = new Shield()
        chainMail = new ChainMail
    })

    it("should be able to return the fight's winner", () => {        
        player.equip(axe)
        easyEnemy.equip(dagger)

        expect(battle.fight(player, easyEnemy)).toMatch(
            /(Alexander the Great wins the battle against Memnon.)|(Memnon wins the battle against Alexander the Great.)/
        )
    })
})
