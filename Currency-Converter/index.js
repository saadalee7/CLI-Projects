#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgRed("\n>>>    Welocome to Currency Conversion Application    <<<\n"));
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0026,
        "INR": 0.30,
        "EUR": 0.0034,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "INR": 104.03,
        "EUR": 1.17,
        "PKR": 350.76
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "INR": 83.55,
        "EUR": 0.94,
        "PKR": 277.54
    },
    "INR": {
        "USD": 0.012,
        "GBP": 0.0096,
        "INR": 1,
        "EUR": 0.011,
        "PKR": 3.33
    },
    "EUR": {
        "USD": 1.07,
        "GBP": 0.86,
        "INR": 89.10,
        "EUR": 1,
        "PKR": 296.95
    }
};
async function main() {
    let useAgain = true;
    while (useAgain) {
        const answer = await inquirer.prompt([{
                name: "from",
                type: "list",
                message: (chalk.blue("Please Select Your Currency:")),
                choices: ["PKR", "GBP", "USD", "INR", "EUR"]
            },
            {
                name: "to",
                type: "list",
                message: (chalk.blue("Please Select Your Conversion Rate:")),
                choices: ["PKR", "GBP", "USD", "INR", "EUR"]
            },
            {
                name: "amount",
                type: "number",
                message: (chalk.yellow("Enter Your Amount:"))
            }]);
        const { from, to, amount } = answer; // destructing user input
        if (from && to && amount) {
            let result = currencyConversion[from][to] * amount;
            console.log(chalk.italic.green(`\nYour Conversion from "${from}" to "${to}" is "${result.toFixed(2)}".\n`)); // Fixing the number of decimal points to 2
            let ask = await inquirer.prompt([{
                    name: "ask",
                    type: "confirm",
                    message: (chalk.blue("Do you want to use again?"))
                }]);
            useAgain = ask.ask;
        }
        else {
            console.log("Invalid Conversion!");
        }
        ;
    }
    console.log(chalk.bgRed("\n>>>    Thank You for Using!    <<<\n"));
}
main();
// const currency :any = {
//     USD: 1, // base currency
//     EUR: 0.91,
//     GBP: 0.76,
//     INR: 74.57,
//     PKR: 280
// }
// let user_answer = await inquirer.prompt([{
//     name: 'from',
//     message: 'Enter From Currency:',
//     type: 'list',
//     choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
// },
// {
//     name: 'to',
//     message: 'Enter To Currency:',
//     type: 'list',
//     choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
// },
// {
//     name: 'amount',
//     message: 'Enter Your Amount:',
//     type: 'number'
// }]);
// let fromAmount = currency[user_answer.from];
// let toAmount = currency[user_answer.to];
// let amount = user_answer.amount;
// let baseAmount = amount / fromAmount;
// let convertAmount = baseAmount * toAmount;
// console.log(`You select from ${fromAmount.list} to ${toAmount.list} and convertion amount is ${convertAmount}`);
