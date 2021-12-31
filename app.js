//MY SHIP
const myShip = {
    hull : 20,
    firepower: -5,
    accuracy : .7
}
//ALIEN SHIP
//return Math.floor(Math.random() * (max - min + 1) + min)
const alienStats = {
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.floor(Math.random() * (8 - 6 + 1) +6) * .1
}

//CLASS TO CREATE ALIEN SHIPS
class alienShip {
    constructor (hull, firepower, accuracy){
    this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
    this.accuracy = Math.floor(Math.random() * (8 - 6 + 1) +6) * .1;
    }
}

// let alien1 = new alienShip('Alien1', alienStats.hull, alienStats.firepower, alienStats.accuracy)

let alienHorde = []

//LOOP TO FILL ALIENHORDE ARRAY W/ NEW ALIENS
for (counter = 0; counter <= 5; counter++){
        alienHorde.push(new alienShip () )
    }

//FUNCTION TO ATTACK ALIEN SHIP
var myAttack = (currentEnemy) => {
    if(myShip.accuracy > currentEnemy.accuracy){
//HULL OF ENEMY SHIP FOR ATTACK
        console.log("The current enemy ship's hull is" + currentEnemy.hull)
        currentEnemy.hull = currentEnemy.hull + myShip.firepower
        console.log("ATTACKING")
        //HULL OF ENEMY SHIP AFTER ATTACK
        console.log("The current enemy ship's hull is" + currentEnemy.hull)
        console.log('Successful Hit!!!')
    } else {
        console.log('You Missed!')
    }
}
console.log(alienHorde)
myAttack(alienHorde[0])
// myAttack()

/*
CODE SPACESHIP

The USS Schwarzenegger should have the following properties
hull - 20

firepower -5

accuracy - .7

CODE ALIEN SHIPS
The alien ships should each have the following ranged properties determined randomly: 

hull - between 3 and 6

firepower - between 2 and 4 

accuracy - between .6 and .8

You could be battling six alien ships each with unique values.

Example use of accuracy to determine a hit: example=>

 if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```

 CODE ACTIONS

 ATTACK METHOD LOOPS

You attack the first alien ship - If the ship survives, it attacks you 
- If you survive, you attack the ship again 
- If it survives, it attacks you again 
- Etc. 
- If you destroy the ship, you have the option to 
**attack** the next ship or to

RETREAT METHOD LOOPS
**retreat** 
- If you retreat, the game is over, perhaps leaving the game open for further developments or options. 
- You win the game if you destroy all of the aliens. 
- You lose the game if you are destroyed.

*/

