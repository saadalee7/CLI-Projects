#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgRed("\n>>>    Welcome to Guess the Number Game!    <<<\n"));
const randomNumber = Math.floor(Math.random() * 6 + 1);

async function main() {
    let playAgain = true;

    while (playAgain) {
        let guessuserNumber = false;

        while (!guessuserNumber) {
            const answer = await inquirer.prompt([{
                name: "userGuessNumber",
                type: "number",
                message: (chalk.bold.yellow("I'm thinking of a number between 1 to 6. Can you guess what it is?"))
            }]);

            if (answer.userGuessNumber === randomNumber) {
                console.log(chalk.green.italic("Congratulations! You guessed the number correctly."));
                guessuserNumber = true;
            } else {
                console.log(chalk.red.italic('You guessed wrong number. Try Again!'));
            }
        }

        const continueGame = await inquirer.prompt([{
            name: "continue",
            type: "confirm",
            message: (chalk.blue("Do you want to play again ?"))
        }]);

        playAgain = continueGame.continue;
    }
    console.log(chalk.bgRed("\n>>>    Thank You For Playing!    <<<\n"));
}

main();