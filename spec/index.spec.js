import BattleScene, 
{ Character,
     Player, 
     Minion, 
     MiniBoss,
      Boss, 
      EquippableItem, 
      Club, 
      Sword } 
      from "../src/index.js"

describe("Core Criteria", () => {
    let battleScene, character, player, minion, miniBoss, boss;
    beforeEach(() => {
      battleScene = new BattleScene();
      character = new Character("npc", 100, 10);
      player = new Player("player", 100, 3.3);
      minion = new Minion("player", 100, 2.3);
      miniBoss = new MiniBoss("player", 100, 5.3);
      boss = new Boss("player", 100, 12.5);
    });
  
    it("should exist", () => {
      expect(battleScene).toBeInstanceOf(BattleScene);
  
      expect(character).toBeInstanceOf(Character);
  
      expect(player).toBeInstanceOf(Character);
      expect(player).toBeInstanceOf(Player);
  
      expect(minion).toBeInstanceOf(Character);
      expect(minion).toBeInstanceOf(Minion);
  
      expect(miniBoss).toBeInstanceOf(Character);
      expect(miniBoss).toBeInstanceOf(MiniBoss);
  
      expect(boss).toBeInstanceOf(Character);
      expect(boss).toBeInstanceOf(Boss);
    });

    it("should take damage", () => {
        player.takeDamage(minion)
        expect(player.currentHitPoints).toBe(player.maxHitPoints - minion.damage)
      });
    
      it("should fight",()=>{
        let result = battleScene.fight(player, minion)
        expect(result).toBe(player)
      })
    })  

      describe("Extension criteria", () => {
        let battleScene, character, player, minion, miniBoss, boss;
        beforeEach(() => {
          battleScene = new BattleScene();
          character = new Character("npc", 100, 10);
          player = new Player("player", 100, 1.1);
          minion = new Minion("player", 100, 0.7);
          miniBoss = new MiniBoss("player", 100, 1.5);
          boss = new Boss("player", 100, 2.1);
        });
      
        it("should equip one weapon", () => {
          let club = new Club(0.6);
          expect(club).toBeInstanceOf(EquippableItem);
          expect(club).toBeInstanceOf(Club);
      
          minion.equipWeapon(club);
          expect(minion.weapon).toBe(club);
      
          let rustySword = new Sword(0.9);
          minion.equipWeapon(rustySword);
          expect(minion.weapon).toBe(rustySword);
        });
      
})