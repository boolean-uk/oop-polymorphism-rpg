export default class BattleScene {
    isAlive(character) {
        return character.currentHitPoints > 0
    }

    isDead(character) {
        return character.currentHitPoints <= 0
    }
    
    fight(character1, character2) {
        console.log(`Starting fight between ${character1.name} and ${character2.name}`)
        while (this.isAlive(character1) && this.isAlive(character2)) {
            console.log(`${character1.name} attacks ${character2.name}`)
            character2.takeDamage(character1)
    
            if (this.isDead(character2)) {
                console.log(`${character2.name} is dead`)
                return `${character1.name} wins the battle against ${character2.name}.`
            }
            
            console.log(`${character2.name} attacks ${character1.name}`)
            character1.takeDamage(character2)
            
            if (this.isDead(character1)) {
                console.log(`${character1.name} is dead`)
                return `${character2.name} wins the battle against ${character1.name}.`
            }
        }
    }    
}
