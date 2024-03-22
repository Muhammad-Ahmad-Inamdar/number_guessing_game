#!/usr/bin/env node

import inquirer from "inquirer";

const random_number:number=Math.floor(Math.random()*6+1)

const awnswer=await inquirer.prompt([
    {   name:'user_number',
        type:'number',
        message:'Guess a number in betweem 1 to 6 ',

}
])   

if (awnswer.user_number===random_number) {
    console.log(`Conguragulations..!!\nYou Guessed Correctly`)
}
else {
console.log(`You guessed a wrong number\nThe number was: ${random_number}\nTry Again..!`)
}

