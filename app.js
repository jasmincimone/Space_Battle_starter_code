const myShip = {
    hull : 20,
    firepower: -5,
    accuracy : .7
}
//return Math.floor(Math.random() * (max - min + 1) + min)
const alienShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.floor(Math.random() * (8 - 6 + 1) +6) * .1
}
console.log(alienShip)

var myAttack = () => {
    if(myShip.accuracy > alienShip.accuracy){
        console.log(alienShip.hull)
        alienShip.hull = alienShip.hull + myShip.firepower
        console.log(alienShip.hull)
        console.log('Successful Hit!!!')
    } else {
        console.log('You Missed!')
    }
}
myAttack()
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

