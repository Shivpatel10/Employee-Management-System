// Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name; //string
        this.salary = salary; //number
        this.position = position; //string
        this.department = department; //string
    }
        getDetails() { // using getDetail to return a string with employee's info
            return(console.log( `${this.name} is earning ${this.salary} as a ${this.position}`));
        };
}















// Create departments
    //const engineering = new Department("Engineering");
    //const marketing = new Department("Marketing");

// Create employees
    //const alice = new Employee("Alice", 80000, "Developer", "Engineering");
    //const bob = new Employee("Bob", 75000, "Designer", "Marketing");
    //const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
    //const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
    //engineering.addEmployee(alice);
    //engineering.addEmployee(charlie);
    //marketing.addEmployee(bob);
    //marketing.addEmployee(diana);

// Calculate total salary for each department
    //console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
    //console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
    //console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
    //console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);