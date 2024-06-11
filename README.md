# OOP - Polymorphism

1. Fork and clone this repository
2. `npm ci` to install dependencies
3. `npx jasmine` to run any tests you create

## Core Criteria

Create a simple RPG where a character can battle monsters

- Create a `Character` class which has:
    - a `name` string
    - a `maxHitPoints` number
    - a `currentHitPoints` number (default to the same as maxHitPoints)
    - a `damage` number, which stores the amount of damage the character can do to other characters
    - a `takeDamage` method which accepts a character (the attacker) as its only parameter
- Using inheritance, create a `Player` character
- Using inheritance, create a variety of different enemy characters
    - Create _at least_ 3 different enemies
- Create a `BattleScene` class with a `fight` method that takes two characters its parameters
    - Using a `while` loop, make the characters hit each other (using their `takeDamage` methods) until one of them runs out of hit points, then return the winning character's name
- You must create at least one test for each function you create

## Extensions

Note: It might be difficult to create tests for some extensions. You do not need to write tests for these, though you can if you wish.

1. Create an `EquippableItem` class that contains:
    - A `damageModifier` number
    - A `calculateDamage` method that accepts a damage number as its only parameter
2. Using inheritance with the EquippableItem class, create a variety of weapons and armour that can increase the damage a character does, as well as decrease the damage a character receives.
    - Characters should be able to equip one weapon and no more than 4 armours at a time
    - Use the attribute and method you created on the EquippableItem class to help calculate these final values during a battle
3. Introduce a number of character stats to your characters that further affect the damage dealt and received:
    - `strength` that increases damage dealt by 0.5% per point
    - `defense` that decreases damage taken by 0.4% per point
    - `criticalStrikeChance` that increases by 0.5% per point the chance that a character will deal double the amount of damage it deals in a single hit
4. You'll be able to expand on this to create an actual game, if you so wish. Try creating a user interface!
