const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
x = {
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
};
function calculateBonus(employee){
  // this variables should keep the rest of the function code clean
  let rating = employee.reviewRating;
  let number = employee.employeeNumber;
  let income = employee.annualSalary;
  let bonus = 0;
  if (rating == 3) {
    bonus += .04; // if rating is 3, increase bonus by 4%
  }
  else if (rating == 4){
    bonus += .06; // if rating is 4, increase bonus by 6%
  }
  else if (rating == 5){
    bonus += .1; // if rating is 5, increase bonus by 10%
  }
  if (number.length == 4 && bonus <= .08){
    bonus += .05; // if employee number is 4 digits long and bonus won't go to 13%, increase by 5%
  }
  if (income > 65000 && bonus >= .01){
    bonus -= .01; // if income is greater than $65,000, reduce bonus by 1% if not already at 0.
  }
  return bonus;
}
function newEmployee(employee) {
  baseBonus = calculateBonus(employee);
  income = Number(employee.annualSalary);
  employeeBonus = {
    name: employee.name,
    bonusPercentage: baseBonus,
    totalCompensation: baseBonus*income + income,
    totalBonus: Math.round(baseBonus*income)
  }
  return employeeBonus;
}

console.log(newEmployee(employees[1]));