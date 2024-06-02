#! /usr/bin/env node
//Shebang

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright('\t\t****************************'));
console.log(chalk.magentaBright('\t\t****Find Your Percentage****'));
console.log(chalk.magentaBright('\t\t****************************'));
 
let condition=true;

while(condition){
let answer=await inquirer.prompt(
    [
        {
            name:'obtained',
            type:'number',
            message:chalk.green('\n Enter your obtained marks:')
        },
        {
            name:'total',
            type:'number',
            message:chalk.green('\n Enter your total marks:')
        }
    ]
)

let percentage=answer.obtained/answer.total*100;

let round_percentage=parseFloat(percentage.toFixed(2));

console.log(chalk.green(`\n\t\t You secured ${round_percentage}%`));

let more=await inquirer.prompt(
    {
        name:'find_more',
        type:'list',
        message:chalk.green('\nDo you want to find more percentages?'),
        choices:['Yes','No']
    }
)
more.find_more==='Yes'? (condition=true):(condition=false);

};

console.log(chalk.magentaBright('\n\n\t\t****************************'));
console.log(chalk.magentaBright('\t\t**********The End***********'));
console.log(chalk.magentaBright('\t\t****************************'));