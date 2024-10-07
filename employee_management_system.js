// Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name; //string
        this.salary = salary; //number
        this.position = position; //string
        this.department = department; //string
    }
        getDetails() { // using getDetail to return a string with employee's info
            return(
                console.log( `${this.name} is earning ${this.salary} as a ${this.position}`));
        };
}

//Task 2: Create a Department Class
    class Department {
        constructor(departmentName, employees) {
         this.departmentName = departmentName; //string
         this.employees = []; //array of employees
        }

            addEmployee(employee) {
                this.employees.push(employee) //this statement to add an employee to the employees array created in the department class
            };

            getDepartmentSalary() {
                return this.employees.reduce((totalDepSalary, employee) => totalDepSalary += employee.salary); 
                //used reduce to get one total salary of all employees within a department
            };
    // Task 4: Handle Bonuses for Managers
            calculateTotalSalaryWithBonus() {
                return this.employees.reduce((totalSalwithBonus, employee) => {
                    if (employee in Manager) { //
                        return totalSalwithBonus + employee.salary + employee.bonus;
                    }
                    return totalSalwithBonus + employee.salary
                }, 0);
            }
    }

//Task 3: Create a Manager Class that Inherits from Employee
    class Manager extends Employee {
        constructor(name, salary, department, bonus) {
            super(name, salary, "Manager", department); // used to ensure that the parent Employee class properties are correctly initialized 
             this.bonus = bonus; //number
            }
                getDetails() { // using getDetail to return a string with employee's info
                    return(
                        console.log(`${this.name} is earning ${this.salary} as a Manager within the ${this.department} department with a bonus of ${this.bonus}`));
                };
    }










// Create departments
    const operations = new Department("Operations");
    const strategy = new Department("Strategy");

// Create employees
    const joe = new Employee("Joe", 100000, "Developer", "Operations");
    const mike = new Employee("Mike", 95000, "Designer", "Strategy");
    const chris = new Manager("Chris", 160000, "Operations Manager", "Operations", 40000);
    const ava = new Manager("Ava", 170000, "Strategy Manager", "Strategy", 35000);

// Add employees to departments
    operations.addEmployee(joe);
    operations.addEmployee(chris);
    strategy.addEmployee(mike);
    strategy.addEmployee(ava);

// Calculate total salary for each department
    console.log(`Total salary for Operations: $${operations.getDepartmentSalary()}`);
    console.log(`Total salary with bonuses for Operations: $${operations.calculateTotalSalaryWithBonus()}`);
    console.log(`Total salary for Strategy: $${strategy.getDepartmentSalary()}`);
    console.log(`Total salary with bonuses for Strategy: $${strategy.calculateTotalSalaryWithBonus()}`);