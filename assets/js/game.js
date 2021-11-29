// Game states
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy robos
// * Defeat each enemy robo
// "LOSE" - Player robo's health is zero or less

window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(playerName, playerAttack, playerHealth);
// console.log(enemyNames.length);

// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);

// for(var i = 0; i < enemyNames.length; i++){
//     console.log(" ");
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }
// Example of looping through an array! 
// for(var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i] , i);
// }
// for(var i = 0; i < 3; i++){
//     console.log("apple",  i);
// }
// for([initial expression]; [condition]; [increment expression]) {
//     statement
//  }



var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        // if player choses to fight, then fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if(promptFight === "fight" || promptFight === "FIGHT"){
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
    
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left." );
            }
    
            // remove players health by subtracting the amount set in the enemyAttack variable 
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
    
            // check players health
            if(playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left." );
            }
    
            // if player chose to skip fight
        } else if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip fight?");
    
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                window.alert(playerName + " has chose to skip the fight!");
                window.alert(playerName + " has beed deducted 10 points for skipping the fight!")
                window.alert("Player now has " + playerMoney + " points!");
            }
            else {
                fight();
            }   
        } else {
            window.alert("Please chose a valid option. Try again!");
        }
    }
};

// fight();
for(var i = 0; i < enemyNames.length; i++) {
    //debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
};