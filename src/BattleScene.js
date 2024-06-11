class BattleScene {
    constructor(combatant1, combatant2) {
      this.combatant1 = combatant1;
      this.combatant2 = combatant2;
    }
  
    fight() {
      while (
        this.combatant1.currentHitPoints > 0 &&
        this.combatant2.currentHitPoints > 0
      ) {
        this.combatant1.takeDamage(this.combatant2);
        this.combatant2.takeDamage(this.combatant1);
        if (this.combatant2.currentHitPoints <= 0) {
          return `${this.combatant1.name} wins!`;
        }
        if (this.combatant1.currentHitPoints <= 0) {
          return `${this.combatant2.name} wins!`;
        }
      }
    }
  }

  export default BattleScene