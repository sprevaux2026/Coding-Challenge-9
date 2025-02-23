// Task 1 - Created Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
//get the details of the employee
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test Case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary());

// Task 2 - Created Manager Class with Inheritance
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
  // Get the details of the manager
      getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }


// Calculate bonus for the manager
calculateBonus() {
    return this.salary * 12 * 0.1;
}

// Modify calculateAnnualSalary() to include bonus
calculateAnnualSalary() {
    return super.calculateAnnualSalary() + this.calculateBonus();
}
}

// Test Case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

// Task 3 - Created Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    // Add employee to the company
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // List all the employees in the company
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }

    // Task 4 modify payroll system
    calculateTotalPayroll() {  
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary(); // total payroll
        }, 0);
    } // payroll system
        // Task 5: Implementing Promotions
        promoteToManager(employee, teamSize) {
            const index = this.employees.indexOf(employee);
            if (index !== -1) {
                this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
            }
        }
    
}

// Test Case
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
console.log(company.calculateTotalPayroll()); // Expected payroll output

   
