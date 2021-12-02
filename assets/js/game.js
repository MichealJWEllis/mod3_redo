// Game states
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy robos
// * Defeat each enemy robo
// "LOSE" - Player robo's health is zero or less

window.alert("Welcome to Robot Gladiators!");


// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;

// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
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

// function to set name 
var getPlayerName = function() {
    var name = "";

    while(name === "" || name === null){
        name = prompt("What is your robos name?");
    }

    console.log("Rogo's name " + name);
}

var fight = function (enemy) {
    //console.log(enemy);
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt(
            'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
        );

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = playerInfo.money - 2;
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name +
            " attacked " +
            enemy.name +
            ". " +
            enemy.name +
            " now has " +
            enemy.health +
            " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            // award player money for winning
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name +
            " attacked " +
            playerInfo.name +
            ". " +
            playerInfo.name +
            " now has " +
            playerInfo.health +
            " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

// fight();
var startGame = function () {
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robo Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store?");

                if (storeConfirm) {
                    shop();
                }

            }
        } else {
            window.alert("You have lost your robo in battle!  Game OVA!");
            break;
        }
    }
    endGame();
};

// end game function
var endGame = function () {
    // if player is stil alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game!  You now have a score of " + playerInfo.money + ". ");
    } else {
        window.alert("You've lost your robo in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robo Gladiators!");
    }
};

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL you health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You didn't pick any valid option. Try again!");
            shop();
            break;
    }
};

var randomNumber = function (max, min) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 30,
    money: 50,
    reset: function () {
        this.health = 100;
        this.money = 50;
        this.attack = 30;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling players health by 20 for 7 points");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("No money yo!");
        }

    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading players attack by 6 for 7 points");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("No money yo!");
        }
    }
}
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];



startGame();



