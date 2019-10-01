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

function calculateBonus(employee){
  // this variables should keep the rest of the function code clean
  let rating = employee.reviewRating;
  let number = employee.employeeNumber;
  let income = employee.annualSalary;
  let bonus = 0; // this will be adjusted through the statements below
  if (rating == 3) {
    bonus += .04; // if rating is 3, increase bonus by 4%
  }
  else if (rating == 4){
    bonus += .06; // if rating is 4, increase bonus by 6%
  }
  else if (rating == 5){
    bonus += .1; // if rating is 5, increase bonus by 10%
  }
  if (number.length == 4){
    bonus += .05; // if employee number is 4 digits long, increase by 5%
  }
  if (income > 65000 && bonus >= .01){
    bonus -= .01; // if income is greater than $65,000, reduce bonus by 1% if not already greater than 1%.
  }
  if (bonus > .13){ //prevents bonus from going over 13%
    bonus = .13;
  }
  return bonus;
}
function bonusInfo(employee) {
  baseBonus = calculateBonus(employee);
  income = Number(employee.annualSalary); // type coercion to Number to prevent string concatenation
  employeeBonus = {
    name: employee.name, // the employee's name
    bonusPercentage: baseBonus, // base bonus percentage
    totalCompensation: baseBonus*income + income, // total bonus
    totalBonus: Math.round(baseBonus*income) // generate bonus with income, rounded
  }
  return employeeBonus;
}

// Loop over all employees to calculate bonus

for (let index = 0; index < employees.length; index++) {
  console.log(bonusInfo(employees[index]));
} // works!

//create an array to output everything on the DOM