// Create a simple calculator that prompts the user for a number, an operator
// (either +, -, * or /) and another number, and then uses the functions created
// in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
var num1= prompt("Enter a number");
var operator= prompt("Enter an operator");
var num2= prompt("Enter another number");

var parsedNum1 = parseInt(num1);
var parsedNum2 = parseInt(num2);
switch (operator) {
    case '+': answer = parsedNum1 + parsedNum2; break;
    case '-': answer = parsedNum1 - parsedNum2; break;
    case '*': answer = parsedNum1 * parsedNum2; break;
    case '/': answer = parsedNum1 / parsedNum2; break;
}
document.write(''+ parsedNum1 +' '+ operator +' '+ parsedNum2 +' is equal to '+ answer +'');