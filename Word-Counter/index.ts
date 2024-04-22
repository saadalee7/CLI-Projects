#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgRed("\n>>>    Welocome to Word Counter Application    <<<\n\n"));

async function main() {
    let useAgain = true;
    while(useAgain) {
        const answer :{sentence:string} = await inquirer.prompt([{
            name: "sentence",
            type: "input",
            message: (chalk.yellow("Enter your sentence to count the word:"))
        }])

        if(answer.sentence){
        const words = answer.sentence.trim().split(' ');

        console.log(words);
        console.log(chalk.green.italic(`\nYour sentence word counter is: "${words.length}".\n`));

        const joinedSentence = answer.sentence.replace(/\s/g, ''); // Remove spaces
        console.log(chalk.green.italic(`Your sentence character counter is: "${joinedSentence.length}".\n`));
        } else {
            console.log("Invalid Input!")
        }
        const again = await inquirer.prompt({
            name: "again",
            type: "confirm",
            message: (chalk.blue("Do you want to count words again?"))
        })
        useAgain = again.again;
    }
    console.log(chalk.bgRed("\n\n>>>    Thank You for Using!    <<<\n"));
}
main();