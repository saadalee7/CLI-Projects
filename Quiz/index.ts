#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue("\n\n\t\t>>>    Welcome to TypeScript Quiz    <<<\n"));

async function startQuiz() {

    let stdName = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: (chalk.yellow("Enter your name:"))
        }
    ]);

    console.log(chalk.green.underline("\nPlease answer the following questions\n"));
    let score = 0;

    let questions = await inquirer.prompt([
        {
            type: "list",
            name: "question1",
            message: (chalk.yellow("Q1. TypeScript is an ________ framework?")),
            choices: ["(A). Licensed", "(B). Open-sourced", "(C). Commercial", "(D). Both, A & B"],
            validate: (answer) => {
                return answer === "(B). Open-sourced";
            }
        },
        {
            type: "list",
            name: "question2",
            message: (chalk.yellow("Q2. TypeScript is a typed superset of __________?")),
            choices: ["(A). C#", "(B). Java", "(C). JavaScript", "(D). ReactJS"],
            validate: (answer) => {
                return answer === "(C). JavaScript";
            }
        },
        {
            type: "list",
            name: "question3",
            message: (chalk.yellow("Q3. TypeScript file compiled into __________?")),
            choices: ["(A). JavaScript", "(B). VBScript", "(C). TypeScript", "(D). None of these above"],
            validate: (answer) => {
                return answer === "(A). JavaScript";
            }
        },
        {
            type: "list",
            name: "question4",
            message: (chalk.yellow("Q4. TypeScript is ________ language?")),
            choices: ["(A). Object-oriented", "(B). Procedural", "(C). Functional", "(D). None of these above"],
            validate: (answer) => {
                return answer === "(A). Object-oriented";
            }
        },
        {
            type: "list",
            name: "question5",
            message: (chalk.yellow("Q5. Which of the followings are primitive types supported in TypeScript?")),
            choices: ["(A). number", "(B). string", "(C). boolean", "(D). All of the above"],
            validate: (answer) => {
                return answer === "(D). All of the above";
            }
        },
        {
            type: "list",
            name: "question6",
            message: (chalk.yellow("Q6. TypeScript can be used to write server side and client side application?")),
            choices: ["(A). True", "(B). False"],
            validate: (answer) => {
                return answer === "(A). True";
            }
        },
        {
            type: "list",
            name: "question7",
            message: (chalk.yellow("Q7. _________ command is used to generate a JavaScript file from a TypeScript file?")),
            choices: ["(A). npm filename.ts", "(B). tsc fileName.ts", "(C). tsc -js fileName.ts", "(D). All of the above"],
            validate: (answer) => {
                return answer === "(B). tsc fileName.ts";
            }
        },
        {
            type: "list",
            name: "question8",
            message: (chalk.yellow("Q8. Which configuration the file is required to complie the whole TypeScript project?")),
            choices: ["(A). tsconfig.js", "(B). tsconfig.json", "(C). web.config", "(D). app.json"],
            validate: (answer) => {
                return answer === "(B). tsconfig.json";
            }
        },
        {
            type: "list",
            name: "question9",
            message: (chalk.yellow("Q9. Which of the following statement declares a variable in TypeScript?")),
            choices: ["(A). var myVar = 123;", "(B). var myVar:number = 123;", "(C). let myVar:number = 123", "(D). All of the above"],
            validate: (answer) => {
                return answer === "(D). All of the above";
            }
        },
        {
            type: "list",
            name: "question10",
            message: (chalk.yellow("Q10. Which of the following statement is used to declare a class in TypeScript?")),
            choices: ["(A). class MyClass {}", "(B). class MyClass", "(C). class = MyClass", "(D). All of the above"],
            validate: (answer) => {
                return answer === "(A). class MyClass {}";
            }
        }
    ]);

   // question 1
    if (questions.question1 === "(B). Open-sourced") {
        console.log(chalk.green("\nQ1 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("\nQ1 answer is Incorrect and Correct answer is (B). Open-sourced!"));
    }
    
    // question 2
    if (questions.question2 === "(C). JavaScript") {
        console.log(chalk.green("Q2 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q2 answer is Incorrect and Correct answer is (C). JavaScript!"));
    }
    
    // question 3
    if (questions.question3 === "(A). JavaScript") {
        console.log(chalk.green("Q3 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q3 answer is Incorrectand Correct answer is (A). JavaScript!"));
    }

    // question 4
    if (questions.question4 === "(A). Object-oriented") {
        console.log(chalk.green("Q4 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q4 answer is Incorrect and Correct answer is (A). Object-oriented!"));
    }
    
    // question 5
    if (questions.question5 === "(D). All of the above") {
        console.log(chalk.green("Q5 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q5 answer is Incorrect and Correct answer is (D). All of the above!"));
    }

    // question 6
    if (questions.question6 === "(A). True") {
        console.log(chalk.green("Q6 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q6 answer is Incorrect and Correct answer is (A). True!"));
    }

    // question 7
    if (questions.question7 === "(B). tsc fileName.ts") {
        console.log(chalk.green("Q7 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q7 answer is Incorrect and Correct answer is (B). tsc fileName.ts!"));
    }

    // question 8
    if (questions.question8 === "(B). tsconfig.json") {
        console.log(chalk.green("Q8 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q8 answer is Incorrect and Correct answer is (B). tsconfig.json!"));
    }

    // question 9
    if (questions.question9 === "(D). All of the above") {
        console.log(chalk.green("Q9 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q9 answer is Incorrect and Correct answer is (D). All of the above!"));
    }

    // question 10
    if (questions.question10 === "(A). class MyClass {}") {
        console.log(chalk.green("Q10 answer is Correct!"));
        score++;
    } else {
        console.log(chalk.red("Q10 answer is Incorrect and Correct answer is (A). class MyClass {}!"));
    }

    // Show result
    console.log(chalk.yellow(`\nDear "${stdName.name}", You gave "${score}" correct answers out of 10 questions.\n`));

    if (score === 10) {
        console.log(chalk.green("Congratulations! You got perfect score."));
    } else if (score >= 7) {
        console.log(chalk.green("Good try."));
    } else {
        console.log(chalk.green("Better luck next time."));
    }

    console.log(chalk.bgBlue("\n\t\t>>>    Good Bye!    <<<\n\n"));
    
}

startQuiz();