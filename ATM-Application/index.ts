#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.bgRed("\n>>>            Welcome to ATM            <<<\n"))

let myBalance = 10000; // PKR
let myPin = 1234;

async function main(){
    let pinError = false;
    while(!pinError){
        let answer = await inquirer.prompt([{
            name : "pin",
            type : "input",
            message : chalk.yellow("Enter Your 4-Digits Pin:")
        }])

        let pinInput = parseInt(answer.pin);
        if(pinInput === myPin){
            console.log(chalk.green("Pin is correct!"))
            pinError = true;

            let continueUsingATM = true;
            while(continueUsingATM){
                let operationAnswer = await inquirer.prompt([{
                    name: "operation",
                    message: chalk.blue("Select your operation"),
                    type: "list",
                    choices: ["Withdrawal Amount","Check Balance"]
                }])

                if(operationAnswer.operation === "Withdrawal Amount"){
                    let amountAnswer = await inquirer.prompt([{
                        name: "amount",
                        message: "Select Option",
                        type: "list",
                        choices: ["Fast Cash", "Enter Amount"]
                    }]);

                    if(amountAnswer.amount === "Fast Cash"){
                        let fastcashAmount = await inquirer.prompt([{
                            name: "option1",
                            message: "Fast Cash",
                            type: "list",
                            choices: ["500", "1000", "5000", "10000", "20000"]
                        }]);

                        let amt = parseInt(fastcashAmount.option1);
                        if(myBalance >= amt){
                            myBalance -= amt;
                            console.log(chalk.green("Withdrawal Successful!"))
                            console.log(chalk.bgBlack.italic("Your remaining balance is PKR " + myBalance));
                            let continue1 = await inquirer.prompt([{
                                name: 'continue1',
                                type: 'confirm',
                                message: chalk.yellow("Do you want to continue?")
                            }])
                            continueUsingATM = continue1.continue1;
                        } else{
                            console.log(chalk.red("Insufficient Balance!"));
                            continueUsingATM = false;
                        }
                    } else if(amountAnswer.amount === "Enter Amount"){
                        let enterAmount = await inquirer.prompt([{
                            name: "option2",
                            message: "Enter Amount Here:",
                            type: "input"
                        }]);

                        let amt1 = parseInt(enterAmount.option2);
                        if(myBalance >= amt1){
                            myBalance -= amt1;
                            console.log(chalk.green("Withdrawal Successful!"))
                            console.log(chalk.bgBlack.italic("Your remaining balance is PKR " + myBalance));

                            let continue2 = await inquirer.prompt([{
                                name: 'continue2',
                                type: 'confirm',
                                message: chalk.yellow("Do you want to continue?")
                            }])
                            continueUsingATM = continue2.continue2;
                        } else{
                            console.log(chalk.red("Insufficient Balance!"));
                            continueUsingATM = false;
                        }
                    } else{
                        console.log("Invalid operation")
                    }
                
                } else if(operationAnswer.operation === "Check Balance"){
                    console.log(chalk.bgBlack.italic(`Your Balance is PKR ${myBalance}`));

                    let checkBalance = await inquirer.prompt([{
                        name: 'check',
                        type: 'confirm',
                        message: chalk.yellow("Do you want to continue?")
                    }]);
                    continueUsingATM = checkBalance.check;
                }
            }
        } else{
            console.log(chalk.red("Pin is incorrect!"));
        }
    }
    console.log(chalk.bgRed("\n>>>         Thank you for using the ATM!         <<<"));
}

main();