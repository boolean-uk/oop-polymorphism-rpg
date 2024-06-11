import { Player, Enemy } from "../src/Characters.js";
import BattleScene from "../src/BattleScene.js";
import {
  Sword,
  Helmet,
  Gloves,
  Boots,
  Pauldrons,
} from "../src/EquippableItems.js";

describe("Characters", () => {
  let player1;
  let enemy1;
  let enemy2;
  let enemy3;


  beforeEach(() => {
    player1 = new Player("Will", 100, 100, 25);
    enemy1 = new Enemy("Goblin", 20, 20, 5);
    enemy2 = new Enemy("Giant", 200, 200, 20);
    enemy3 = new Enemy("Necromancer", 50, 50, 10);
  });

  it("should have a takeDamage method that reduces their HP by attacker's damage", () => {
    player1.takeDamage(enemy1);

    expect(player1.currentHitPoints).toEqual(95);
  });

  it("should be able to equip a weapon", () => {
    const excalibur = new Sword(2, "Excalibur");
    player1.equipWeapon(excalibur);

    expect(player1.equippedWeapon).toEqual(excalibur);
  });

  it("should be unable to equip a weapon if it already has a weapon equipped", () => {
    const excalibur = new Sword(2, "Excalibur");
    const claymore = new Sword(3, "Claymore");
    player1.equipWeapon(excalibur);

    expect(() => player1.equipWeapon(claymore)).toThrowError(
      "This character already has a weapon equipped"
    );
  });

  it("should be able to equip armour", () => {
    const shouldersOfCheese = new Pauldrons(0.8, "Shoulders of Cheese");
    player1.equipArmour(shouldersOfCheese);

    expect(player1.equippedArmour[0]).toEqual(shouldersOfCheese);
  });

  it("should be unable to equip more than 4 pieces of armour", () => {
    const shouldersOfCheese = new Pauldrons(0.8, "Shoulders of Cheese");
    const helmetOfCustard = new Helmet(0.95, 'Helmet of Custard')
    const bootsOfPork = new Boots(0.9, 'Boots of Pork')
    const glovesOfChutney = new Gloves(0.9, 'Gloves of Chutney')
    const sneakers = new Boots(1.3, 'Converse')

    player1.equipArmour(shouldersOfCheese);
    player1.equipArmour(helmetOfCustard);
    player1.equipArmour(bootsOfPork);
    player1.equipArmour(glovesOfChutney);

    expect(() => {player1.equipArmour(sneakers);}).toThrowError('Characters can only equip 4 items of armour');
  });

  it('should cause damage calculated with modifiers from equipped weapon', ()=>{
   const excalibur = new Sword(2, "Excalibur");
    enemy3.equipWeapon(excalibur)
    player1.takeDamage(enemy3)
    expect(player1.currentHitPoints).toEqual(80)
  })

  it('should cause damage mitigation with modifiers from equipped armour', ()=>{
    const shouldersOfCheese = new Pauldrons(0.8, "Shoulders of Cheese");
    player1.equipArmour(shouldersOfCheese)
    player1.takeDamage(enemy3)

    expect(player1.currentHitPoints).toEqual(92)
  })

  it("should take into account character's strength stat when calculating damage output", ()=>{
    player1.strength = 40
    enemy3.takeDamage(player1)

    expect(enemy3.currentHitPoints).toEqual(20)
  })

  it("should take into account character's defense stat when calculating damage", ()=>{
    player1.defense = 100
    player1.takeDamage(enemy3)

    expect(player1.currentHitPoints).toEqual(94)
  })
});





describe("Battle scene", () => {
  let player1;
  let enemy1;
  let enemy2;
  let enemy3;
  let excalibur;

  beforeEach(() => {
    player1 = new Player("Will", 100, 100, 25);
    enemy1 = new Enemy("Goblin", 20, 20, 5);
    enemy2 = new Enemy("Giant", 200, 200, 20);
    enemy3 = new Enemy("Necromancer", 50, 50, 10);

    excalibur = new Sword(2)
  });

  it("should return the name of the surviving combatant", () => {
    const battleScene1 = new BattleScene(player1, enemy1);
    expect(battleScene1.fight()).toEqual("Will wins!");

    const battleScene2 = new BattleScene(player1, enemy2);
    expect(battleScene2.fight()).toEqual("Giant wins!");
  });
});

