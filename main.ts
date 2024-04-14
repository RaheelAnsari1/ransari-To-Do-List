import inquirer from "inquirer"
let todos = []
let condition = true

while(condition)
{
        let todoQuestioins = await inquirer.prompt(
        [
        {
            name: "firstQuestion",
            type: "input",
            message: "What Would You Like To Add In Your Todos"
        },
        {
            name: "secondQueston",
            type: "confirm",
            message: "Would You Like to Add More In Your Todos ?",   
            default: "true"
        }
        ]
);
todos.push(todoQuestioins.firstQuestion)
console.log(todos)
condition = todoQuestioins.secondQueston;
}