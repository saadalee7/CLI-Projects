#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("\n>>>    Welcome to Student Management System!    <<<\n\n"));
console.log(chalk.bgBlue("\t\t  >>>    MENU    <<<\n"));
const students = [];
async function main() {
    let answer = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "Select Option:",
            choices: ['Add A New Student', 'Search Student', 'Show All Student', 'Delete Student', 'Exit']
        }]);
    if (answer.operator === 'Add A New Student') {
        let addStudent = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: (chalk.yellow('Enter first name:')),
            },
            {
                type: 'input',
                name: 'lastName',
                message: (chalk.yellow('Enter last name:')),
            },
            {
                type: 'input',
                name: 'id',
                message: (chalk.yellow('Enter student ID (5 digits):')),
                validate: (input) => /^\d{5}$/.test(input) ? true : 'Please enter a 5-digit ID.',
            },
            {
                type: 'input',
                name: 'fees',
                message: (chalk.yellow('Enter student fees:')),
                validate: (input) => /^\d+(\.\d{1,2})?$/.test(input) ? true : 'Please enter a valid amount.',
            },
            {
                type: 'checkbox',
                name: 'courseEnroll',
                message: (chalk.blue('Select course enrolled:')),
                choices: ['English', 'Maths', 'Science', 'Computer', 'Physics', 'Chemistry']
            },
        ]);
        students.push(addStudent);
        console.log(chalk.green("\nStudent Added Successfully!\n"));
        console.log("========================================================================================================\n");
    }
    else if (answer.operator === 'Show All Student') {
        console.log(('\n***   List of students   ***\n'));
        if (students.length === 0) {
            console.log(chalk.red("\nNo students available.\n"));
            console.log("========================================================================================================\n");
        }
        else {
            students.forEach((student, index) => {
                console.log(`Student ${index + 1}:`);
                console.log(`Name: ${student.firstName} ${student.lastName}`);
                console.log(`ID: ${student.id}`);
                console.log(`Fees: ${student.fees}`);
                console.log(`Courses Enrolled: ${student.courseEnroll.join(', ')}\n`);
                console.log("========================================================================================================\n");
            });
        }
    }
    else if (answer.operator === 'Search Student') {
        const { searchId } = await inquirer.prompt({
            type: 'input',
            name: 'searchId',
            message: 'Enter student ID to search:',
        });
        const foundStudent = students.find(student => student.id === searchId);
        if (foundStudent) {
            console.log('\nStudent found:');
            console.log(`Name: ${foundStudent.firstName} ${foundStudent.lastName}`);
            console.log(`ID: ${foundStudent.id}`);
            console.log(`Fees: ${foundStudent.fees}`);
            console.log(`Courses Enrolled: ${foundStudent.courseEnroll.join(', ')}\n`);
            console.log("========================================================================================================\n");
        }
        else {
            console.log(chalk.green('\nStudent not found.\n'));
            console.log("========================================================================================================\n");
        }
    }
    else if (answer.operator === 'Delete Student') {
        const { idToDelete } = await inquirer.prompt({
            type: 'input',
            name: 'idToDelete',
            message: 'Enter student ID to delete:',
        });
        const index = students.findIndex(student => student.id === idToDelete);
        if (index !== -1) {
            students.splice(index, 1);
            console.log(chalk.green('\nStudent deleted successfully.\n'));
            console.log("========================================================================================================\n");
        }
        else {
            console.log(chalk.red('\nStudent not found.\n'));
            console.log("========================================================================================================\n");
        }
    }
    else if (answer.operator === 'Exit') {
        console.log(chalk.green.italic('\nExiting program...'));
        console.log(chalk.bgRed("\n>>>    Good Bye!    <<<\n\n"));
        process.exit();
    }
    else {
        console.log('Invalid choice.');
    }
    main();
}
main();
