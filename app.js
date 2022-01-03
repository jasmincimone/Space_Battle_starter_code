//GAME OBJECT
const game ={
    run : function(){
        
        //MY SHIP
const myShip = {
    hull : 15,
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

//Empty array to push new aliens info
let alienHorde = []

//LOOP TO FILL ALIENHORDE ARRAY W/ NEW ALIENS
for (counter = 0; counter <= 5; counter++){
        alienHorde.push(new alienShip ())
    }

//FUNCTION TO ATTACK ALIEN SHIP
var myAttack = (currentEnemy) => {
    var accuracyCheck = (Math.floor(Math.random() * (8 - 6 + 1) +6) * .1)
    if(myShip.accuracy > accuracyCheck){
//HULL OF ENEMY SHIP FOR ATTACK
        alert("The current enemy ship's hull is" + currentEnemy.hull)
        console.log("The current enemy ship's hull is" + currentEnemy.hull)
        // take my ships firepower from the current enemy
        currentEnemy.hull = currentEnemy.hull + myShip.firepower
        alert("ATTACKING")
        console.log("ATTACKING")
        //HULL OF ENEMY SHIP AFTER ATTACK
        alert("SUCCESSFUL HIT!!!")
        alert("The current enemy ship's hull is" + currentEnemy.hull)
        console.log("The current enemy ship's hull is" + currentEnemy.hull)
        console.log('Successful Hit!!!')
        
        //CHECK IF ALIEN IS DEAD
        if(currentEnemy.hull < 1) {
              //REMOVES THE FIRST ENEMY FROM THE ALIEN HORDE ARRAY
          alienHorde.shift()
            alert("You have DESTROYED the enemy!!!")
            alert("There are" + alienHorde.length + "ships left.")
            if(alienHorde.length === 0){
                alert("YOU HAVE WON!!!!")
            }
            let response = prompt("Would you like to attack the next enemy??? YES or NO")
            if(response == "YES"){
                alert('Next enemy approaches')
                myAttack(alienHorde[0])
            }
          
        //RULE FOR IF ALIEN IS ALIVE
        }if(currentEnemy.hull >= 1){
            let response = prompt("Would you like to ATTACK again, or RETREAT?")
            if (response == "ATTACK"){
                myAttack(alienHorde[0])
            }
            if (response !== "ATTACK"){
                alert("You are about to RETREAT...")
                let retreatResponse = prompt("Are you sure you want to RETREAT? Y or N")
                if(retreatResponse == "Y" || "y"){
                    alert("GAME OVER.")
                }else{
                    myAttack(alienHorde[0])
                }
            }
        }
    } else {
        alert("You missed! =( It is now the computer's turn.")
        console.log('You Missed!')
        console.log("Computer's Turn")
        alienAttack(alienHorde[0])
    }
}
// console.log(alienHorde)
// myAttack(alienHorde[0])
// myAttack(alienHorde[1])

//  FUNCTION FOR ALIEN ATTACK
var alienAttack  = (currentAlienAttacking) => {
    var accuracyCheck = (Math.floor(Math.random() * (8 - 6 + 1) +6) * .1)
    alert("The alien's weapons spin up and FIRE!!!")
    if(currentAlienAttacking.accuracy > accuracyCheck){
        //HULL OF ENEMY SHIP FOR ATTACK
                alert("Your ship's hull is " + myShip.hull)
                console.log("My ship's hull is " + myShip.hull)
                // subtract currentenemy attacking firepower from our hull
                myShip.hull = myShip.hull - currentAlienAttacking.firepower

                alert('Your ship has been hit!')
                //HULL OF ENEMY SHIP AFTER ATTACK
                alert("You ship's hull is now" + myShip.hull)
                if(myShip.hull === 0){
                    alert("GAME OVER.")
                }
                let response = prompt("Would you like to ATTACK again, or RETREAT?")
            if (response == "ATTACK"){
                myAttack(alienHorde[0])
            }
            if (response !== "ATTACK"){
                alert("You are about to RETREAT...")
                let retreatResponse = prompt("Are you sure you want to RETREAT? Y or N")
                if(retreatResponse == "Y" || "y"){
                    alert("GAME OVER.")
                }else{
                    myAttack(alienHorde[0])
                }
            }
                console.log("My ships hull is " + myShip.hull)
                console.log('Successful Hit!!!')
            } else{
                alert("THEY MISSED!!!")
                console.log('You Missed!')
                alert("YOUR TURN!")
                console.log("Player's Turn")
                myAttack(alienHorde[0])
            }
        }
// alienAttack(alienHorde[0])
// console.log(alienHorde)
// myAttack(alienHorde[0])
// myAttack()


//----------------------------
//PROMPTS FOR GAME
//----------------------------

window.onload = function() { 
    alert("WELCOME TO ALIEN BATTLESHIP")
    
    alert("Rules of the Game: A game round would look like this: You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again, Etc. - If you destroy the ship, you have the option to ATTACK the next ship or to RETREAT.")
    alert("If you retreat, the game is over. - You win the game if you destroy all of the aliens. - You lose the game if you are destroyed.")
    alert("LET'S GOOO!!!!")
    alert("You are moving through space when an alien ship approaches")
    
    //PROMPT TO MAKE FIRST ATTACK
    let response = prompt("Would you like to ATTACK, or RETREAT?")
    if (response == "ATTACK"){
        alert("You line up your laser and attack")
        myAttack(alienHorde[0])
    }
    if (response !== "ATTACK"){
        alert("You are about to RETREAT...")
        let retreatResponse = prompt("Are you sure you want to RETREAT? Y or N")
        if(retreatResponse == "Y" || "y"){
            alert("GAME OVER.")
        }else{
            myAttack(alienHorde[0])
        }
    }
}


    }
}

game.run()


//PROMPT DOCUMENTATION
// var name = prompt("What is your name")
// alert('Hello ' + name)
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

