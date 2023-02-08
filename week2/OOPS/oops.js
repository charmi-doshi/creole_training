
function createObj(){
    let obj = {}
    let property = document.getElementById('prop-input').value
    let value = document.getElementById('val-input').value

    obj[property] = value
    console.log(obj,property,value)
    document.getElementById('obj-output').innerHTML = JSON.stringify(obj)
}
//oops

//constructor
class Employee{

    constructor(empId,name,address,roleName,salary){
        this.empId = empId;
        this.name = name;
        this.address = address;
        this.roleName = roleName;
        this.salary = salary;
    }

     getDetails(){
        return `Employee name is ${this.name} lives at ${address} and works as a ${this.roleName}`
     }   
    

    //encapsulation
    setSalary(newSalary){
        this.salary = newSalary;
    }
}
function createEmp(){
    let empId = document.getElementById('emp-id').value
    let name = document.getElementById('name').value
    let address = document.getElementById('address').value
    let roleName = document.getElementById('role-name').value

    const emp = new Employee(empId,name,address,roleName)
   
    
    emp.getDetails()

}


