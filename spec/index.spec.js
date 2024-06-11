const { Character, Player, Goblin, Troll, Dragon, BattleScene } = require('../src/index');

describe("RPG Game", function() {
  let player;
  let goblin;
  let troll;
  let dragon;
  let battle;

  beforeEach(function() {
    player = new Player("Player", 100, 15);
    goblin = new Goblin();
    troll = new Troll();
    dragon = new Dragon();
    battle = new BattleScene();
  });

  describe("Character", function() {
    it("should create a character with correct attributes", function() {
      expect(player.name).toBe("Player");
      expect(player.maxHitPoints).toBe(100);
      expect(player.currentHitPoints).toBe(100);
      expect(player.damage).toBe(15);
    });

    it("should correctly reduce hit points when taking damage", function() {
      const attacker = new Character("Attacker", 50, 20);
      player.takeDamage(attacker);
      expect(player.currentHitPoints).toBe(80);
    });

    it("should not reduce hit points below zero when taking damage", function() {
        const attacker = new Character("Attacker", 200, 30);
        player.takeDamage(attacker);
        expect(player.currentHitPoints).toBe(70);
      });      
  });

  describe("Player", function() {
    it("should create a player with correct attributes", function() {
      expect(player.name).toBe("Player");
      expect(player.maxHitPoints).toBe(100);
      expect(player.currentHitPoints).toBe(100);
      expect(player.damage).toBe(15);
    });
  });

  describe("Goblin", function() {
    it("should create a goblin with correct attributes", function() {
      expect(goblin.name).toBe("Goblin");
      expect(goblin.maxHitPoints).toBe(30);
      expect(goblin.currentHitPoints).toBe(30);
      expect(goblin.damage).toBe(5);
    });
  });

  describe("Troll", function() {
    it("should create a troll with correct attributes", function() {
      expect(troll.name).toBe("Troll");
      expect(troll.maxHitPoints).toBe(50);
      expect(troll.currentHitPoints).toBe(50);
      expect(troll.damage).toBe(10);
    });
  });

  describe("Dragon", function() {
    it("should create a dragon with correct attributes", function() {
      expect(dragon.name).toBe("Dragon");
      expect(dragon.maxHitPoints).toBe(100);
      expect(dragon.currentHitPoints).toBe(100);
      expect(dragon.damage).toBe(20);
    });
  });

  describe("BattleScene", function() {
    it("should correctly handle battles", function() {
      spyOn(player, 'takeDamage').and.callThrough();
      spyOn(goblin, 'takeDamage').and.callThrough();

      const winner = battle.fight(player, goblin);
      expect(winner).toBeTruthy();
      expect(player.takeDamage).toHaveBeenCalled();
      expect(goblin.takeDamage).toHaveBeenCalled();
    });
  });
});
