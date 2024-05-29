#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue("\n\n\t>>>    Welcome to Employee Management System    <<<"));

type Employee = {
    id: number;
    name: string;
    age: number;
    salary: number;
    department: string;
    designation: string;
    email: string;
    phone: number;
    address: string;
}

let database: Employee[] = [{
    id: 1,
    name: "John",
    age: 30,
    salary: 50000,
    department: "IT",
    designation: "Manager",
    email: "john@example.com",
    phone: 1234567890,
    address: "123 Main St",
}];

async function main() {

    console.log(chalk.underline.yellow(`\n\t\t\t\t"MENU"\n`));

    const { choice } = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: (chalk.blue("Select an option")),
            choices: [
                "Add Employee",
                "View Employee",
                "Update Employee",
                "Remove Employee",
                "About",
                "Exit",
            ],
        },
    ]);

    if (choice === "Add Employee") {

        let addEmployee: Employee = await inquirer.prompt([{
            name: "id",
            type: "number",
            message: (chalk.yellow("Enter employee id:")),
            validate: (value) => {
                if (value < 0) {
                    return "ID cannot be negative";
                }
                return true;
            },
        },
        {
            name: "name",
            type: "input",
            message: (chalk.yellow("Enter employee name:")),
            validate: (value) => {
                if (value.trim() === "") {
                    return "Name is required";
                }
                return true;
            },
        },
        {
            name: "age",
            type: "number",
            message: (chalk.yellow("Enter employee age:")),
            validate: (value) => {
                if (value < 0) {
                    return "Age cannot be negative";
                }
                return true;
            },
        },
        {
            name: "salary",
            type: "number",
            message: (chalk.yellow("Enter employee salary:")),
            validate: (value) => {
                if (value < 0) {
                    return "Salary cannot be negative";
                }
                return true;
            },
        },
        {
            name: "department",
            type: "list",
            message: (chalk.blue("Select employee department:")),
            choices: ["IT", "HR", "Marketing"],
        },
        {
            name: "designation",
            type: "list",
            message: (chalk.blue("Select employee designation:")),
            choices: ["Manager", "Developer", "Sales"],
        },
        {
            name: "email",
            type: "input",
            message: (chalk.yellow("Enter employee email:")),
            validate: (value) => {
                if (!value.includes("@")) {
                    return "Invalid email! Use @ in email";
                }
                return true;
            },
        },
        {
            name: "phone",
            type: "number",
            message: (chalk.yellow("Enter employee phone:")),
            validate: (value) => {
                if (value < 0) {
                    return "Phone cannot be negative";
                }
                return true;
            },
        },
        {
            name: "address",
            type: "input",
            message: (chalk.yellow("Enter employee address:")),
            validate: (value) => {
                if (value.trim() === "") {
                    return "Address is required";
                }
                return true;
            },
        }]);

        database.push(addEmployee as Employee);
        console.log(database);
        console.log(chalk.green("\nEmployee Added Successfully!\n"));
        console.log("========================================================================================================\n")

    } else if (choice === "View Employee") {

        console.log(chalk.yellow('\n\t\t\t***   EMPLOYEE LIST   ***\n'));

        if (database.length === 0) {

            console.log(chalk.red("\nNo employee available.\n"));
            console.log("========================================================================================================\n")

        } else {
            database.forEach((employee, index) => {
                console.log(`Employee ${index + 1}:`);
                console.log(`ID: ${employee.id}`);
                console.log(`Name: ${employee.name}`);
                console.log(`Age: ${employee.age}`);
                console.log(`Salary: ${employee.salary}`);
                console.log(`Department: ${employee.department}`);
                console.log(`Designation: ${employee.designation}`);
                console.log(`Email: ${employee.email}`);
                console.log(`Phone: ${employee.phone}`);
                console.log(`Address: ${employee.address}\n`);
                console.log("========================================================================================================\n")
            });
        };

    } else if (choice === "Update Employee") {
        let employeeNames = database.map(employee => employee.name);
            let updateEmployeeName: { update: string } = await inquirer.prompt({
                name: "update",
                type: "list",
                message: "Select employee to update:",
                choices: employeeNames
            });

            let employeeToUpdate = database.find(employee => employee.name === updateEmployeeName.update);

            let updatedEmployee: Employee = await inquirer.prompt([
                {
                    name: "id",
                    type: "number",
                    message: (chalk.yellow("Enter employee id")),
                    default: employeeToUpdate?.id,
                },
                {
                    name: "name",
                    type: "input",
                    message: (chalk.yellow("Enter employee name:")),
                    default: employeeToUpdate?.name,
                },
                {
                    name: "age",
                    type: "number",
                    message: (chalk.yellow("Enter employee age")),
                    default: employeeToUpdate?.age,
                },
                {
                    name: "salary",
                    type: "number",
                    message: (chalk.yellow("Enter employee salary")),
                    default: employeeToUpdate?.salary,
                },
                {
                    name: "department",
                    type: "list",
                    message: (chalk.blue("Enter employee department")),
                    choices: ["IT", "HR", "Marketing"],
                    default: employeeToUpdate?.department
                },
                {
                    name: "designation",
                    type: "list",
                    message: (chalk.blue("Enter employee designation")),
                    choices: ["Manager", "Developer", "Sales"],
                    default: employeeToUpdate?.designation
                },
                {
                    name: "email",
                    type: "input",
                    message: (chalk.yellow("Enter employee email")),
                    default: employeeToUpdate?.email,
                },
                {
                    name: "phone",
                    type: "number",
                    message: (chalk.yellow("Enter employee phone")),
                    default: employeeToUpdate?.phone,
                },
                {
                    name: "address",
                    type: "input",
                    message: (chalk.yellow("Enter employee address")),
                    default: employeeToUpdate?.address,
                }
            ]);

            if (employeeToUpdate) {
                Object.assign(employeeToUpdate, updatedEmployee);
                console.log(chalk.green("\nEmployee updated successfully!\n"));
                console.log("========================================================================================================\n")
            } else {
                console.log(chalk.red("\nEmployee not found!\n"));
                console.log("========================================================================================================\n")
            }

    } else if (choice === "Remove Employee") {

        const { idToRemove } = await inquirer.prompt({
            type: 'number',
            name: 'idToRemove',
            message: (chalk.yellow('Enter employee ID to remove:')),
        });
        const index = database.findIndex(employee => employee.id === idToRemove);

        if (index !== -1) {

            database.splice(index, 1);
            console.log(chalk.green('\nEmployee deleted successfully.\n'));
            console.log("========================================================================================================\n")
            
        } else {

            console.log(chalk.red('\nEmployee not found.\n'));
            console.log("========================================================================================================\n")

        }
    } else if (choice === "About") {

        console.log("\nVersion 1.0.0 Nearly up to date!");
        console.log("Developer: Muhammad Saad");
        console.log("Description: Employee Managing system save all employees record save and secure.");
        console.log("© 2024 All rights reserved.\n");
        

    } else if (choice === "Exit") {

        console.log(chalk.green.italic('\nExiting program...'));
        console.log(chalk.bgBlue("\n\t\t\t>>>    Good Bye!    <<<\n\n"));
        process.exit();

    } else {
        console.log("Invalid choice");
    }
    main();
}

main();