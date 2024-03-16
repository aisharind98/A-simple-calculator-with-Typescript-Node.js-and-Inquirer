import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
 
// conditional statement
if (answer.operator === "Addition") {
console.log(answer.firstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.SecondNumber); 
} else if (answer.operator === "Multiplication") {
 console.log(answer.firstNumber * answer.SecondNumber); 
} 
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.SecondNumber); 
} else {
    console.log("please select valid operator")
}