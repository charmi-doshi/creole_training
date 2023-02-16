//this keyword
function thisDemo(){
    let first_Name =  document.getElementById("first-name").value
    let last_Name =  document.getElementById("last-name").value
    let roleName =  document.getElementById("role").value
 
    console.log(first_Name,last_Name,roleName);
    

    let Person = {
       details : function(){
          return "fullname is " + this.firstName + this.lastName + " works as a " + this.role 
       }
    }

    let person1 = {
        firstName : first_Name,
        lastName : last_Name,
        role : roleName
    }

    document.getElementById("output").innerHTML = Person.details.call(person1) 
    console.log(Person.details.call(person1))
}
//arrow func
function getMyFunction(){
    var variable = "global"
    const obj = {
        variable : "obj",
        arrowFunc : () =>{
            //global obj hence it gives undefined
            console.log(this.variable)
            return this.variable
        },
        regFunc(){
            //object scope
            return this.variable
        }
    }
    document.getElementById("output-2").innerHTML = obj.arrowFunc()
    document.getElementById("output-3").innerHTML = obj.regFunc()
    
}

