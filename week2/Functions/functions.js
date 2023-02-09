
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

  document.getElementById("func-output").innerHTML =
    employee.onHandSalary.call(emp1);
}
//function constructor
function funcConstuctor(){
  const myFunction = new Function ("a","b", "return a + b ")
  let num1 = Number(document.getElementById("num-input-1").value)
  let num2 = Number(document.getElementById("num-input-2").value)
  let x = myFunction(num1,num2)
  document.getElementById("func-output-2").innerHTML =x;

}
function funcBind(){
  let givenName = document.getElementById("input-1").value
  let givenGrade = Number(document.getElementById("input-2").value)

const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    document.getElementById("func-output-3").innerHTML =`${this.name} studies in grade ${this.grade}`;
  },
};

// object definition
const student2 = {
  name: givenName,
  grade: givenGrade,
};

// the object student2 is borrowing introduction method from student1
let result= student1.introduction.bind(student2);

// invoking result() function
result(); 
}