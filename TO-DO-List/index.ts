#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// inquirer
// array
// function
// operators

console.log(chalk.bgRed("\n>>>    Welcome to TO-DO List Application    <<<\n"));
let todos :string[] = ["Monday", "Tuesday", "Wednesday"];

async function createTodo(todos:string[]) {
    let con = true;
    while(con){
        let answer = await inquirer.prompt([{
            type: "list",
            message: (chalk.blue("Select an operators")),
            name: "operator",
            choices: ["Add" , "Update", "View", "Delete"]
        }]);

        if(answer.operator === "Add") {
            let addTodo = await inquirer.prompt([{
                type: "input",
                message: (chalk.yellow("What would you like to add in your TO-DO?")),
                name: "add"
            }]);
            todos.push(addTodo.add);
            console.log(todos);
            let addCon = await inquirer.prompt([{
                name: "addCon",
                type: "confirm",
                message: (chalk.blue("Do you want add more in your list?"))
            }])
            con = addCon.addCon;
        };

        if(answer.operator === "Update") {
            let updateTodo = await inquirer.prompt([{
                type: "list",
                message: (chalk.yellow("What would you like to update in your TO-DO?")),
                name: "update",
                choices: todos.map(item => item) // using arrow function which mean replacing 1 item to another item is called map funtion
            }]);
            let addTodo = await inquirer.prompt([{
                type: "input",
                message: (chalk.yellow("Add update item in the list")),
                name: "add"
            }]);
            let newTodo = todos.filter(val => val !== updateTodo.update); // using arrow funtion for checking item that update item is not same
            todos = [...newTodo, addTodo.add]; // whenever we use multiple array we use ... 3 dots 
            console.log(todos);
            let updateCon = await inquirer.prompt([{
                name: "updateCon",
                type: "confirm",
                message: (chalk.blue("Do you want to continue?"))
            }])
            con = updateCon.updateCon;
        };

        if(answer.operator === "View") {
            console.log("*** TO-DO LIST ***");
            console.log(todos);
            console.log("******************");
            let viewCon = await inquirer.prompt([{
                name: "viewCon",
                type: "confirm",
                message: (chalk.blue("Do you want to continue?"))
            }])
            con = viewCon.viewCon;
        };

        if(answer.operator === "Delete") {
            let deleteTodo = await inquirer.prompt([{
                type: "list",
                message: (chalk.yellow("What would you like to delete item in your TO-DO?")),
                name: "delete",
                choices: todos.map(item => item)
            }]);
            let newTodo = todos.filter(val => val !== deleteTodo.delete);
            todos = [...newTodo];
            console.log(todos);
            let deleteCon = await inquirer.prompt([{
                name: "deleteCon",
                type: "confirm",
                message: (chalk.blue("Do you want to continue?"))
            }])
            con = deleteCon.deleteCon;
        };
    }
    console.log(chalk.bgRed("\n>>>    Thank You for Using!    <<<\n"));
}

createTodo(todos);

// let todos :string[] = [];
// let condition = true;

// while(condition){
//     let todoQuestion = await inquirer.prompt([{
//         name: "firstQuestion",
//         type: "input",
//         message: "What would you like to add in your TO-DO?"
//     },
//     {
//         name: "secondQuestion",
//         type: "confirm",
//         message: "Would you like to add more in your TO-DO?",
//         default: "true"
//     }])

//     todos.push(todoQuestion.firstQuestion);
//     console.log(todos);
//     condition = todoQuestion.secondQuestion;
// }