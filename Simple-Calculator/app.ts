#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("\n>>>    Welcome to Simple Calculator!    <<<\n"));

async function main() {
    let useAgain = true;
    while(useAgain){
        const answer = await inquirer.prompt([{
            message: (chalk.yellow('Enter Your Numbers:')),
            type: 'number',
            name: 'firstNumber'
        },
        {
            message: (chalk.blue('Select one of the operator you perform operation:')),
            type: 'list',
            name: 'operator',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            message: (chalk.yellow('Enter Your Numbers:')),
            type: 'number',
            name: 'secondNumber'
        }])

        // conditional statement

        if(answer.operator === 'Addition'){
            console.log(chalk.green.italic('Your answer is ' + (answer.firstNumber + answer.secondNumber)));
            let addContinue = await inquirer.prompt([{
                name: "add",
                type: "confirm",
                message: "Do you want to continue ?"
            }])
            useAgain = addContinue.add;
        } else if(answer.operator === 'Subtraction'){
            console.log(chalk.green.italic('Your answer is ' + (answer.firstNumber - answer.secondNumber)));
            let subContinue = await inquirer.prompt([{
                name: "sub",
                type: "confirm",
                message: "Do you want to continue ?"
            }])
            useAgain = subContinue.sub;
        } else if(answer.operator === 'Multiplication'){
            console.log(chalk.green.italic('Your answer is ' + (answer.firstNumber * answer.secondNumber)));
            let multiContinue = await inquirer.prompt([{
                name: "multi",
                type: "confirm",
                message: "Do you want to continue ?"
            }])
            useAgain = multiContinue.multi;
        } else if(answer.operator === 'Division'){
            console.log(chalk.green.italic('Your answer is ' + (answer.firstNumber / answer.secondNumber)));
            let dividContinue = await inquirer.prompt([{
                name: "divid",
                type: "confirm",
                message: "Do you want to continue ?"
            }])
            useAgain = dividContinue.divid;
        } else{
            console.log('Please Enter Valid Operator');
        }
    }
    console.log(chalk.bgRed("\n>>>    Thank You For Using Simple Calculator!    <<<\n"));
}

main();