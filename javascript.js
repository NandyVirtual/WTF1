const name = prompt("what is your name")
console.log(name)
let jobTitle = prompt("what is your job role?")
console.log(jobTitle)


//calculator
const monthlyIncome = 2000;
console.log("Monthly Income is: " + monthlyIncome);
 
let dailyExpense = monthlyIncome * 0.01;
console.log("Daily Expense is: " + dailyExpense);
 
let monthlyExpense = dailyExpense * 30;
console.log( "Monthly Expense is: " + monthlyExpense);
 
let savings = monthlyIncome - monthlyExpense;
console.log("Savings is: "+ savings);
 
let spending = monthlyExpense;
console.log("Spending is: " + spending);
 
 
// Final result
const finalResult = monthlyIncome - (dailyExpense + monthlyExpense + savings + spending);
console.log(finalResult)