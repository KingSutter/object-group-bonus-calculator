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
function calculateBonus(rating, number, income){
  let bonus = 0;
  if (rating == 3) {
    bonus += .04;
  }
  else if (rating == 4){
    bonus += .06;
  }
  else if (rating == 5){
    bonus += .1;
  }
  if (number.length == 4 && bonus <= .08){
    bonus += .05;
  }
  if (income > 65000 && bonus > 0){
    bonus -= .01;
  }
  return bonus * income;
}
function newEmployee(employee) {
  
  employeeBonus = {
    name: employee.name,
    bonusPercentage: null,
    totalCompensation: null,
    totalBonus: null,
  }
}

console.log(newEmployee(x));