// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let addingEmployees = true;

  while (addingEmployees) {
    const firstName = window.prompt("Please enter the first name of the employee.");
    const lastName = window.prompt("Please enter the last name of the employee.");
    let salary = window.prompt("Please enter the employee's salary as a numerical value.");
    salary = isNaN(salary) ? 0 : Number(salary);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    employees.push(employee);
    addingEmployees = confirm("Would you like to add another employee?");
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employees) {
  if (employees.length === 1 || 0) {
    console.log("There are not enough employees to calculate an average salary.");
    return;
  }
 
  let totalSalary = 0;
  for (const employee of employees) {
    totalSalary += employee.salary;
  }

  const averageSalary = totalSalary / employees.length;
  
  console.log(`The average employee salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}`);
};


// Select a random employee
const getRandomEmployee = function (employees) {
  // TODO: Select and display a random employee [random selection method]
  const randomWinner = Math.floor(Math.random() * employees.length);
  const winner = employees[randomWinner];
  // log "Congratulations to <employeeFirstName> <employeeLastName>, our random drawing winner!"
  console.log(`Congratulations to ${winner.firstName} ${winner.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table - CODE COMPLETE - DO NOT MODIFY
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};


// CODE COMPLETE - DO NOT MODIFY
const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
