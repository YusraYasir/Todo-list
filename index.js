#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.magenta.bold("\n\tWelcome to code With Yusra - Todo-List Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What you want to add in your Todo-list :"
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.green(`\n\t${addTask.task} Task added in Todo-list sucessfully\n`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "false"
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log("Your updated Todo-List:", todoList);
