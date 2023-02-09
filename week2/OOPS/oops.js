
// function createObj(){
//     let obj = {}
//     let property = document.getElementById('prop-input').value
//     let value = document.getElementById('val-input').value

//     obj[property] = value
//     console.log(obj,property,value)
//     document.getElementById('obj-output').innerHTML = JSON.stringify(obj)
// }
//oops

//constructor
class Employee{

    constructor(name,address,salary){
       this.name = name
       this.address = address
       this.salary = 20000
    }

    welcomeEmployee(){
        console.log(`Welcome to our company` )
       

    }
     
    //encapsulation
    setSalary(salary){
        this.salary = salary
    }

}
//abstraction
Employee.prototype.displaySalary = function(){
        console.log(`Salary is  ${this.salary}`)
    
}
//inheritance
class Sales extends Employee{
    constructor(name){
        super(name)
        this.name = name
        
    }
    //polymorphism
    //method overriding
    welcomeEmployee(){
        super.welcomeEmployee()
        console.log(`Hope ${this.name} rises high in the sales department`);
    
    }
}

let emp1 = new Employee()
emp1.displaySalary()
let saleEmp = new Sales("abc")
saleEmp.welcomeEmployee()
saleEmp.setSalary("30000")
saleEmp.displaySalary()



