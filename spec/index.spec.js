import {
  Character,
  Player,
  Goblin,
  Orc,
  Dragon,
  BattleScene,
} from "../src/index.js";

describe("test Charachter", () => {
  it("it should exist", () => {
    const charachter = new Character();
    expect(charachter).toBeInstanceOf(Character);
  });

  it("it should create charachter", () => {
    const char1 = new Character("Char1", 100, 10);

    expect(char1.name).toBe("Char1");
    expect(char1.maxHitPoints).toBe(100);
    expect(char1.currentHitPoints).toBe(100);
    expect(char1.damage).toBe(10);
  });
});

describe("test player ceration", () => {
  it("it should create player", () => {
    const player = new Player("Rando", 80, 25);

    expect(player.name).toBe("Rando");
    expect(player.maxHitPoints).toBe(80);
    expect(player.currentHitPoints).toBe(80);
    expect(player.damage).toBe(25);
  });
});

describe("test enemy ceration", () => {
  it("it should create globin", () => {
    const goblin = new Goblin();

    expect(goblin.name).toBe("Goblin");
    expect(goblin.maxHitPoints).toBe(30);
    expect(goblin.currentHitPoints).toBe(30);
    expect(goblin.damage).toBe(5);
  });

  it("it should create orc", () => {
    const orc = new Orc();

    expect(orc.name).toBe("Orc");
    expect(orc.maxHitPoints).toBe(50);
    expect(orc.currentHitPoints).toBe(50);
    expect(orc.damage).toBe(10);
  });

  it("it should create dragon", () => {
    const dragon = new Dragon();

    expect(dragon.name).toBe("Dragon");
    expect(dragon.maxHitPoints).toBe(100);
    expect(dragon.currentHitPoints).toBe(100);
    expect(dragon.damage).toBe(20);
  });
});

describe("test BattleScene", () => {
  it("Rando should win the battle against Goblin'", () => {
    const player = new Player("Rando", 80, 25);
    const goblin = new Goblin();
    const battle = new BattleScene();

    const winner = battle.fight(player, goblin);

    expect(winner).toBe("Rando");
  });
});
