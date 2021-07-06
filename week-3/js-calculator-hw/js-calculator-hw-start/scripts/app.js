// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.
//
// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input
//
// * Write your code below!
//
//  Use the following to create the code
//  window.prompt() - takes data from use input
//  parseFloat() - creates a floating number based on data
//  window.confirm() - creates a true or false return asking the user 
//  window.alert - will just show a message to the user

let calcs = true

window.alert("Welcome to the calculator")

while (calcs) {

    const numOne = parseFloat(window.prompt("What is the 1st number?"))
    const numTwo = parseFloat(window.prompt("Cool, what's the 2nd number?"))
    const operand = window.prompt("...and would you like to + , - , / , or * ?")
    
    if (operand === '+') {
        window.alert(numOne + numTwo)
    }
    if (operand === '-') {
        window.alert(numOne - numTwo)
    }
    if (operand === '/') {
        window.alert(numOne / numTwo)
    }
    if (operand === '*') {
        window.alert(numOne * numTwo)
    }
    
calcs = window.confirm("Would you like to go again")
    
}
    