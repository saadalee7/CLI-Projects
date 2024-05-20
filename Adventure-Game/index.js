#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan("\n\n>>>   Welcome to Advanture Game    <<<\n\n"));
async function main() {
    let playerName = await inquirer.prompt([
        {
            name: "playerName",
            type: "input",
            message: (chalk.blue("Enter your name:")),
        },
    ]);
    console.log(chalk.bold.yellow(`\nDear "${playerName.playerName}", You are in the jungle and you find a treasure box but the key is missing?`));
    console.log(chalk.bold.yellow(`You have to find the key to open the box!\n`));
    console.log(chalk.bold.yellow(`*** Lets find the key ***\n`));
    let createLoop = true;
    while (createLoop) {
        let optionOfKeys = await inquirer.prompt([
            {
                name: "optionOfKeys",
                type: "list",
                message: (chalk.blue("Select one option:")),
                choices: ["1. The keys are under the rocks.", "2. The keys are in the table drawers.", "3. The keys are on top of grass."],
            },
        ]);
        if (optionOfKeys.optionOfKeys === "1. The keys are under the rocks.") {
            console.log(chalk.red.italic("\nThere is no any keys!\n"));
            let guessAgain1 = await inquirer.prompt([
                {
                    name: "guessAgain1",
                    type: "confirm",
                    message: (chalk.blue("Do you want to find key again?")),
                },
            ]);
            createLoop = guessAgain1.guessAgain1;
        }
        else if (optionOfKeys.optionOfKeys === "2. The keys are in the table drawers.") {
            console.log(chalk.red.italic("\nThere is no any table!\n"));
            let guessAgain2 = await inquirer.prompt([
                {
                    name: "guessAgain2",
                    type: "confirm",
                    message: (chalk.blue("Do you want to find key again?")),
                },
            ]);
            createLoop = guessAgain2.guessAgain2;
        }
        else if (optionOfKeys.optionOfKeys === "3. The keys are on top of grass.") {
            console.log(chalk.green.italic("\nCongratulations! You find the keys but wait there are so many keys?\n"));
            console.log(chalk.bold.yellow(`*** Lets find the correct key! ***\n`));
            let createLoop1 = true;
            while (createLoop1) {
                let correctKey = await inquirer.prompt([
                    {
                        name: "correctKey",
                        type: "list",
                        message: (chalk.blue("Select one option:")),
                        choices: ["1. The key is red.", "2. The key is blue.", "3. The key is yellow."],
                    },
                ]);
                correctKey.correctKey = Math.floor(Math.random() * 3) + 1;
                if (correctKey.correctKey === 1) {
                    console.log(chalk.green.italic("\nCongratulations! You find the correct key!"));
                    createLoop1 = false;
                }
                else if (correctKey.correctKey === 2) {
                    console.log(chalk.red.italic("\nWrong Key!\n"));
                    let guessAgain3 = await inquirer.prompt([
                        {
                            name: "guessAgain3",
                            type: "confirm",
                            message: (chalk.blue("Do you want to find key again?")),
                        },
                    ]);
                    createLoop1 = guessAgain3.guessAgain3;
                }
                else if (correctKey.correctKey === 3) {
                    console.log(chalk.red.italic("\nWrong Key!\n"));
                    let guessAgain4 = await inquirer.prompt([
                        {
                            name: "guessAgain4",
                            type: "confirm",
                            message: (chalk.blue("Do you want to find key again?")),
                        },
                    ]);
                    createLoop1 = guessAgain4.guessAgain4;
                }
                else {
                    console.log(chalk.yellow("Invalid Operator!"));
                }
                createLoop = false;
            }
        }
        else {
            console.log(chalk.yellow("Invalid Operator!"));
        }
    }
    console.log(chalk.bold.yellow("\n\n---   Game Over   ---\n"));
    console.log(chalk.bold.yellow.underline(`"This game is under testing in future adding more features!"`));
    console.log(chalk.bgCyan("\n\n>>>    Thank you for playing the game!    <<<\n\n"));
}
main();
