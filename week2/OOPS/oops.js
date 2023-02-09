class Employee {
  constructor(name, salary) {
    this.name = name;

    this.salary = 20000;
  }

  welcomeEmployee() {
    console.log(`Welcome to our company`);
    document.getElementById("message").innerHTML = `Welcome to our company`;
  }

  //encapsulation
  setSalary(salary) {
    this.salary = salary;
  }
}
//abstraction
Employee.prototype.displaySalary = function () {
  console.log(`Salary is  ${this.salary}`);

  document.getElementById(
    "salary-message"
  ).innerHTML = `Salary is  ${this.salary}`;
};
//inheritance
class Sales extends Employee {
  constructor(name) {
    super(name);
    this.name = name;
  }
  //polymorphism
  //method overriding
  welcomeEmployee() {
    super.welcomeEmployee();
    console.log(`Hope ${this.name} rises high in the sales department`);

    document.getElementById(
      "message"
    ).innerHTML = `Hope ${this.name} rises high in the sales department`;
  }
}
class Developer extends Employee {
  constructor(name) {
    super(name);
    this.name = name;
  }
  //polymorphism
  //method overriding
  welcomeEmployee() {
    super.welcomeEmployee();
    console.log(`Hope ${this.name} rises high in the developer department`);
    document.getElementById(
      "message"
    ).innerHTML = `Hope ${this.name} rises high in the developer department`;
  }
}
function createEmployee() {
  let empName = document.getElementById("emp-name").value;
  let depName = document.getElementById("department").value;

  if (depName == "sales") {
    let saleEmp = new Sales(empName);
    saleEmp.setSalary("30000");
    saleEmp.welcomeEmployee();
    saleEmp.displaySalary();
  }
  if (depName == "developer") {
    let devEmp = new Developer(empName);
    devEmp.setSalary("40000");
    devEmp.welcomeEmployee();
    devEmp.displaySalary();
  }
}

