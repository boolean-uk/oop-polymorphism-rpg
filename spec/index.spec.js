const {
	Balrog,
	BattleScene,
	Dragon,
	Muppet,
	Player,
} = require("../src/index.js");

it("take damage", () => {
	const naruto = new Player("Naruto");

	naruto.takeDamage(20);

	expect(naruto.currentHitPoints).toBeLessThanOrEqual(naruto.maxHitPoints);
});

it("both players take dmg on a battle scene", () => {
	const naruto = new Player("Naruto");
	const balrog = new Balrog();
	const alduin = new Dragon();
	const missPiggy = new Muppet();

	const narnia = new BattleScene(naruto, missPiggy);

	narnia.fight(naruto, missPiggy);
	expect(naruto.currentHitPoints).toBeLessThanOrEqual(naruto.maxHitPoints);
	expect(missPiggy.currentHitPoints).toBeLessThanOrEqual(
		missPiggy.maxHitPoints
	);
});
