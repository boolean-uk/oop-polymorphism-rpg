import {
  Character,
  Player,
  BattleScene,
  Enemy,
  Enemy2,
} from "../src/index.cjs";

describe("RPG", () => {
  it("should initialize with the correct values", () => {
    const character = new Character("Zema", 100, 100, 20);
    expect(character.name).toBe("Zema");
    expect(character.maxHitPoints).toBe(100);
    expect(character.currentHitPoints).toBe(100);
    expect(character.damage).toBe(20);
  });

  it("should take damage correctly", () => {
    const character = new Character("Zema", 100, 100, 20);
    const player = new Player("Sami", 100, 100, 10);

    character.takeDamage(player);

    expect(character.currentHitPoints).toBe(90);
  });

  it("should print the correct damage message", () => {
    const character = new Character("Zema", 100, 100, 20);
    const player = new Player("Sami", 100, 100, 10);

    const message = character.takeDamage(player);

    expect(message).toBe("Sami has inflicted 10 on Zema.");
  });
  it("should have the 2 players battle each other and return a winner", () => {
    const character = new Character("Zema", 100, 100, 20);
    const player = new Player("Sami", 100, 100, 10);

    const battle = new BattleScene();
    const winner = battle.fight(character, player);

    expect(winner).toEqual(`The winner is Zema`);
  });
  it("should check that enemy 1 and 2 have the correct values", () => {
    const enemy = new Enemy("Gremlin", 100, 100, 5);
    const enemy2 = new Enemy2("Toad", 100, 100, 5);

    expect(enemy.name).toEqual("Gremlin");
    expect(enemy.maxHitPoints).toBe(100);
    expect(enemy.currentHitPoints).toBe(100);
    expect(enemy.damage).toBe(5);
    expect(enemy2.name).toEqual("Toad");
    expect(enemy2.maxHitPoints).toBe(100);
    expect(enemy2.currentHitPoints).toBe(100);
    expect(enemy2.damage).toBe(5);
  });
});
