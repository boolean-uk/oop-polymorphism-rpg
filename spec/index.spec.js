import BattleScene, { Character, Player, Minion, MiniBoss, Boss } from "../src/index.js"

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


})