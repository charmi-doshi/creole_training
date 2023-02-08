//call()
function funcCall() {
  const employee = {
    onHandSalary: function () {
      return this.salary + this.bonus - this.tax;
    },
  };
  const emp1 = {
    salary: 10000,
    bonus: 2000,
    tax: 100,
  };

  document.getElementById('func-output').innerHTML = employee.onHandSalary.call(emp1)
}
function funcBind(){
    const Car = {
        name:"ford",
        details : function(){
            return this.model + " " + this.mileage
        }
    }
    const car1 = {
        model : "xyz",
        mileage : "80kmph"
    }
    
    const car2 = {
        model : "abc",
        mileage : "50kmph"
    }

    let details = Car.details.bind(car1)
    document.getElementById('func-output-2').innerHTML = details
}
