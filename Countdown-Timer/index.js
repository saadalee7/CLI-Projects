#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("\n\n\t\t>>>    Welcome to Countdown Timer    <<<\n"));
async function main() {
    const menu = await inquirer.prompt({
        name: "menu",
        type: "list",
        message: (chalk.yellow("What would you like to check?")),
        choices: ["SECONDS", "MINUTES"]
    });
    if (menu.menu === "SECONDS") {
        const seconds = await inquirer.prompt({
            name: "seconds",
            type: "number",
            message: (chalk.yellow("Enter the number of seconds between (0-59):"))
        });
        console.log(chalk.blue(`\nCountdown will start in "${seconds.seconds}" seconds.\n`));
        console.log(chalk.red("Countdown started!"));
        function countSeconds(seconds) {
            const intervalId = setInterval(() => {
                seconds--;
                if (seconds === 0) {
                    clearInterval(intervalId);
                    console.log(chalk.green("Countdown finished!"));
                    console.log(chalk.bgBlue("\n\n\t\t>>>    Thank you for using Countdown Timer!    <<<\n"));
                }
                else {
                    console.log(seconds);
                }
            }, 1000);
        }
        countSeconds(seconds.seconds);
    }
    else if (menu.menu === "MINUTES") {
        const minutes = await inquirer.prompt({
            name: "minutes",
            type: "number",
            message: (chalk.yellow("Enter the number of minutes between (0-59):"))
        });
        console.log(chalk.blue(`\nCountdown will start in "${minutes.minutes}" minutes.\n`));
        console.log(chalk.red("Countdown started!"));
        function countMinutes(minutes) {
            let remainingSeconds = minutes.minutes * 60;
            const intervalId = setInterval(() => {
                const remainingMinutes = Math.floor(remainingSeconds / 60);
                const remainingSecs = remainingSeconds % 60;
                console.log(`${remainingMinutes}:${remainingSecs}`);
                if (remainingSeconds === 0) {
                    clearInterval(intervalId);
                    console.log(chalk.green("Countdown finished!"));
                    console.log(chalk.bgBlue("\n\n\t\t>>>    Thank you for using Countdown Timer!    <<<\n"));
                }
                remainingSeconds--;
            }, 1000);
        }
        countMinutes(minutes);
    }
    else {
        console.log("Invalid input");
    }
}
main();
